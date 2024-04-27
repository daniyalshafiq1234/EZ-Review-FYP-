package com.example.fyp.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserNotAssignedDocsResponse {
    private String document_link;
    private String document_name;
    private String domain;
}
