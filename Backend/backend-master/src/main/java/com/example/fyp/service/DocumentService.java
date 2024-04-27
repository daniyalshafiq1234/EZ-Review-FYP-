package com.example.fyp.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import com.example.fyp.controller.DocumentController;
import com.example.fyp.model.Document;
import com.example.fyp.repository.DocumentRepository;
import com.example.fyp.repository.OrganizationRepository;
import com.example.fyp.request.DirectReviewRequestMetaData;
import com.example.fyp.request.DocumentDetails;
import com.example.fyp.response.UserNotAssignedDocsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepo;

    @Autowired
    private OrganizationRepository organizationRepo;

    @Value("${upload.path}")
    private String uploadPath;

    @PostConstruct
    public void init() {
        try {
            Files.createDirectories(Paths.get(uploadPath));
        } catch (IOException e) {
            throw new RuntimeException("Could not create upload folder!");
        }
    }

    public Document save(MultipartFile file) {

        String filename = file.getOriginalFilename();
        String url = MvcUriComponentsBuilder.fromMethodName(DocumentController.class, "getFile", filename)
                    .build()
                    .toString();

        try {
            Path root = Paths.get(uploadPath);
            if (!Files.exists(root)) {
                init();
            }

            Files.copy(file.getInputStream(), root.resolve(filename));
            return documentRepo.save(new Document(file.getOriginalFilename(), url , file.getSize()));
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
    }

    public Resource loadByFileName(String filename) {
        try {
            Path file = Paths.get(uploadPath)
                    .resolve(filename);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }

    public void deleteAll() {
        FileSystemUtils.deleteRecursively(Paths.get(uploadPath)
                .toFile());
        documentRepo.deleteAll();
    }

    public List<Path> loadAll() {
        try {
            Path root = Paths.get(uploadPath);
            if (Files.exists(root)) {
                return Files.walk(root, 1)
                        .filter(path -> !path.equals(root))
                        .collect(Collectors.toList());
            }

            return Collections.emptyList();
        } catch (IOException e) {
            throw new RuntimeException("Could not list the files!");
        }
    }
    public List<Document> getListFilesMy(){
        return documentRepo.findAll();
    }

    public void saveAdditionalDocumentDetails(DocumentDetails documentDetails,Long docId,Long authorId) {
        String domain = documentDetails.getDomain();
        String title = documentDetails.getTitle();
        String reviewStatus = "NOT_ASSIGNED";
        String organizationName = documentDetails.getOrganizationName();
        Long organizationId = organizationRepo.getOrgIdByItsName(organizationName);
        documentRepo.saveAdditionalDocumentDetails(domain,title,reviewStatus,authorId,LocalDateTime.now() ,docId);
        documentRepo.saveDocOrg(docId,organizationId);
    }

    public void saveAdditionalDirectReviewData(DirectReviewRequestMetaData additionalDocDetails, Long savedDocId, Long authorId) {
        ArrayList <String> reviewers = additionalDocDetails.getReviewers();
    }

    public ArrayList<Map<String, Object>> getUserNotAssignedDocs(Long userId) {
        return documentRepo.getUserNotAssignedDocs(userId);
    }

    public ArrayList<Map<String, Object>> getUserReviewNotStartedDocs(Long userId) {
        return documentRepo.getUserReviewNotStartedDocs(userId);
    }

    public ArrayList<Map<String, Object>> getUserReviewInProgressDocs(Long userId) {
        return documentRepo.getUserReviewInProgressDocs(userId);
    }

    public ArrayList<Map<String, Object>> getUserReviewCompletedDocs(Long userId) {
        return documentRepo.getUserReviewCompletedDocs(userId);
    }

    public ArrayList<Map<String, Object>> getReviewerNotStartedDocs(Long reviewerId) {
        return documentRepo.getReviewerNotStartedDocs(reviewerId);
    }

    public ArrayList<Map<String, Object>> getReviewerCompletedDocs(Long reviewerId) {
        return documentRepo.getReviewerCompletedDocs(reviewerId);
    }

    public ArrayList<Map<String, Object>> reviewerInprogressDocs(Long reviewerId) {
        return documentRepo.getReviewerInprogressDocs(reviewerId);
    }

    public void updateDocumentStatus(String colId, Long docId) {
        Document docFromDB = documentRepo.getById(docId);

        if(colId.equals("two")){
            docFromDB.setReviewStatus("REVIEW_NOT_STARTED");
        }
        else if(colId.equals("three")){
            docFromDB.setReviewStatus("IN_PROGRESS");
        }
        else if(colId.equals("four")){
            docFromDB.setReviewStatus("COMPLETED");
        }
        else{
            throw new IllegalStateException("col id not valid");
        }
        documentRepo.save(docFromDB);
    }
}