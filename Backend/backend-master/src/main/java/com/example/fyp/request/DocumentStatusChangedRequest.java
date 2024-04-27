package com.example.fyp.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DocumentStatusChangedRequest {
    private Long docId;
    private String columnId;
}
