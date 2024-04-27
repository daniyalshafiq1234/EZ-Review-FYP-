package com.example.fyp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "organization_id")
    private Long Id;
    @Column(unique = true)
    private String organizationName;
    private String address;
    private Boolean enabled = false;



    @OneToOne
    @JoinColumn(name = "founder_id")
    private User founder;
    @OneToMany
    @JoinTable(inverseJoinColumns=@JoinColumn(name="admin_id"))
    private Set<User> admins;
    @OneToMany
    @JoinTable(inverseJoinColumns=@JoinColumn(name="editor_id"))
    private Set<User> editors;
    @OneToMany
    @JoinTable(inverseJoinColumns=@JoinColumn(name="reviewer_id"))
    private Set<User> reviewers;

}
