package com.example.fyp.repository;

import com.example.fyp.model.Document;
import com.example.fyp.request.DocumentDetails;
import com.example.fyp.response.UserNotAssignedDocsResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Map;

@Repository
public interface DocumentRepository extends JpaRepository<Document,Long> {
    @Modifying
    @Transactional
    @Query(value = "update document set domain=?1, document_title=?2, review_status = ?3, author_id=?4, submitted_at=?5 where id = ?6",nativeQuery = true)
    void saveAdditionalDocumentDetails(String domain, String title, String reviewStatus, Long authorId, LocalDateTime time, Long docId);

    @Modifying
    @Transactional
    @Query(value = "insert into document_reviewing_organizations values (?1,?2)",nativeQuery = true)
    void saveDocOrg(Long docId, Long organizationId);

    @Query(value = "select id, document_link, document_title, domain, submitted_at from document where author_id=?1 and review_status='NOT_ASSIGNED'",nativeQuery = true)
    ArrayList<Map<String, Object>> getUserNotAssignedDocs(Long userId);

    @Query(value = "select id, document_link, document_title, domain from document where author_id=?1 and review_status='REVIEW_NOT_STARTED'",nativeQuery = true)
    ArrayList<Map<String, Object>> getUserReviewNotStartedDocs(Long userId);

    @Query(value = "select id, document_link, document_title, domain from document where author_id=?1 and review_status='REVIEW_IN_PROGRESS'",nativeQuery = true)
    ArrayList<Map<String, Object>> getUserReviewInProgressDocs(Long userId);

    @Query(value = "select id, document_link, document_title, domain from document where author_id=?1 and review_status='REVIEW_COMPLETED'",nativeQuery = true)
    ArrayList<Map<String, Object>> getUserReviewCompletedDocs(Long userId);

    @Query(value = "select d.id,d.document_link,d.document_title,d.domain from document d inner join document_reviewer dr on d.id=dr.document_id where dr.reviewer_id=?1 and d.review_status='REVIEW_NOT_STARTED'",nativeQuery = true)
    ArrayList<Map<String, Object>> getReviewerNotStartedDocs(Long reviewerId);

    @Query(value = "select d.id,d.document_link,d.document_title,d.domain from document d inner join document_reviewer dr on d.id=dr.document_id where dr.reviewer_id=?1 and d.review_status='REVIEW_IN_PROGRESS'",nativeQuery = true)
    ArrayList<Map<String, Object>> getReviewerInprogressDocs(Long reviewerId);

    @Query(value = "select d.id,d.document_link,d.document_title,d.domain from document d inner join document_reviewer dr on d.id=dr.document_id where dr.reviewer_id=?1 and d.review_status='REVIEW_COMPLETED'",nativeQuery = true)
    ArrayList<Map<String, Object>> getReviewerCompletedDocs(Long reviewerId);
}