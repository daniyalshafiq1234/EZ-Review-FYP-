package com.example.fyp.controller;

import com.example.fyp.model.Document;
import com.example.fyp.request.DocumentDetails;
import com.example.fyp.request.DocumentStatusChangedRequest;
import com.example.fyp.response.UploadResponseMessage;
import com.example.fyp.response.UserNotAssignedDocsResponse;
import com.example.fyp.service.DocumentService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/documents")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @PostMapping
    public ResponseEntity<UploadResponseMessage> uploadDocument(@RequestPart("docMetadata") String documentAdditionalData,
                                                                @RequestPart("files") MultipartFile[] files,
                                                                @AuthenticationPrincipal String userId) {


        ObjectMapper objectMapper = new ObjectMapper();

        String message;
        List<String> fileNames = new ArrayList<>();
        Document savedDoc;
        Long savedDocId;
        DocumentDetails additionalDocDetails;

        Long UserId = Long.parseLong(userId);

        try {
            for (MultipartFile file : Arrays.asList(files)) {
                savedDoc = documentService.save(file);
                savedDocId = savedDoc.getId();
                additionalDocDetails = objectMapper.readValue(documentAdditionalData,DocumentDetails.class);
                documentService.saveAdditionalDocumentDetails(additionalDocDetails,savedDocId,UserId);
                fileNames.add(file.getOriginalFilename());
            }
            message = "Uploaded the files successfully: " + fileNames;
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new UploadResponseMessage(message));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED)
                    .body(new UploadResponseMessage("Could not upload the files: " + fileNames + "!"));
        }
    }

    @GetMapping
    public ResponseEntity<List<Document>> getListFiles() {
        List<Document> fileInfos = documentService.loadAll()
                .stream()
                .map(this::pathToFileData)
                .collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK)
                .body(fileInfos);
    }
    @GetMapping("/my")
    public ResponseEntity<List<Document>> getListFilesMy() {
        List<Document> fileInfos = documentService.getListFilesMy();

        return ResponseEntity.status(HttpStatus.OK)
                .body(fileInfos);
    }

    @DeleteMapping
    public void delete() {
        documentService.deleteAll();
    }

    @GetMapping("{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        Resource file = documentService.loadByFileName(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
    private Document pathToFileData(Path path) {
        Document fileData = new Document();
        String filename = path.getFileName()
                .toString();
        fileData.setDocumentName(filename);
        fileData.setDocumentLink(MvcUriComponentsBuilder.fromMethodName(DocumentController.class, "getFile", filename)
                .build()
                .toString());
        try {
            fileData.setSize(Files.size(path));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Error: " + e.getMessage());
        }

        return fileData;
    }

    @GetMapping("/userNotAssignedDocs")
    public ArrayList<Map<String, Object>> getUserNotAssignedDocs(@AuthenticationPrincipal String userId){
        return documentService.getUserNotAssignedDocs(Long.valueOf(userId));
    }
    @GetMapping("/userReviewNotStartedDocs")
    public ArrayList<Map<String, Object>> userReviewNotStartedDocs(@AuthenticationPrincipal String userId){
        return documentService.getUserReviewNotStartedDocs(Long.valueOf(userId));
    }
    @GetMapping("/userReviewInProgressDocs")
    public ArrayList<Map<String, Object>> userReviewInProgressDocs(@AuthenticationPrincipal String userId){
        return documentService.getUserReviewInProgressDocs(Long.valueOf(userId));
    }
    @GetMapping("/userReviewCompletedDocs")
    public ArrayList<Map<String, Object>> userReviewCompletedDocs(@AuthenticationPrincipal String userId){
        return documentService.getUserReviewCompletedDocs(Long.valueOf(userId));
    }
    @PutMapping("/statusChanged")
    public void updateDocumentStatus(@RequestBody DocumentStatusChangedRequest request){
        String colId = request.getColumnId();
        if(!colId.equals("two") && !colId.equals("three") && !colId.equals("four")){
            throw new IllegalStateException("Column id not valid");
        }
        Long docId = request.getDocId();

        documentService.updateDocumentStatus(colId,docId);
    }
}