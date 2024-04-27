package com.example.fyp.request;

import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class addEditorsRequest {
    Long orgId;
    Set<Long> editorIds;
}
