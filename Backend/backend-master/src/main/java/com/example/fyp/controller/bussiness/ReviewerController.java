package com.example.fyp.controller.bussiness;

import com.example.fyp.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Map;
//TODO: Secure this route for reviewer role only
@RestController
@RequestMapping("/reviewer")
public class ReviewerController {

    @Autowired
    private DocumentService documentService;


    @GetMapping("/reviewerNotStartedDocs")
    public ArrayList<Map<String, Object>> reviewerNotStartedDocs(@AuthenticationPrincipal String reviewerId){
        return documentService.getReviewerNotStartedDocs(Long.valueOf(reviewerId));
    }
    @GetMapping("/reviewerInprogressDocs")
    public ArrayList<Map<String, Object>> reviewerInprogressDocs(@AuthenticationPrincipal String reviewerId){
        return documentService.reviewerInprogressDocs(Long.valueOf(reviewerId));
    }
    @GetMapping("/reviewerCompletedDocs")
    public ArrayList<Map<String, Object>> reviewerCompletedDocs(@AuthenticationPrincipal String reviewerId){
        return documentService.getReviewerCompletedDocs(Long.valueOf(reviewerId));
    }

}
