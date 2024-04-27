package com.example.fyp.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String documentName;
    @Size(max = 15)
    private String documentTitle;

    private LocalDateTime submittedAt;

    private String documentLink;
    private Long size;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "document_reviewer",
            joinColumns = { @JoinColumn(name = "document_id") },
            inverseJoinColumns = { @JoinColumn(name = "reviewer_id") }
    )
    Set<User> reviewers = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "document_reviewingOrganizations",
            joinColumns = { @JoinColumn(name = "document_id") },
            inverseJoinColumns = { @JoinColumn(name = "organization_id") }
    )
    Set<Organization> reviewingOrganizations = new HashSet<>();

    private String domain;
    private String reviewStatus;//can be enum

    public Document(String documentName, String documentLink, Long size) {
        this.documentName = documentName;
        this.documentLink = documentLink;
        this.size = size;
    }
}