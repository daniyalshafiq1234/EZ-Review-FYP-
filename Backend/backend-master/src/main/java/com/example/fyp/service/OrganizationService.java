package com.example.fyp.service;

import com.example.fyp.model.Organization;
import com.example.fyp.repository.OrganizationRepository;
import com.example.fyp.request.RegOrg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Set;


@Service
public class OrganizationService {

    @Autowired
    OrganizationRepository organizationRepo;

    public void registerOrganization(RegOrg regRequest, Long userid ) {
        String name = regRequest.getOrganizationName().toLowerCase();
        String address = regRequest.getAddress().toLowerCase();
        organizationRepo.registerOrg(name,address,userid,false);
    }
    public Set<Long> getUserOrganizationsIds(Long userid){
        return organizationRepo.getUserOrganizationsIds(userid);
    }

    public void addEditors(Long orgId,Long userid, Set<Long> editorIds) {
        //Remove founder id from editor id
        editorIds.removeAll(Collections.singletonList(userid));

        for(Long id : editorIds){
            organizationRepo.addEditorToOrg(orgId,id);
        }
    }

    public Set<Long> getAllOrgsIds() {
            return organizationRepo.getAllOrgsIds();
    }

    public void addAdmins(Long orgId, Long userId, Set<Long> adminsIds) {
        adminsIds.removeAll(Collections.singletonList(userId));

        for(Long id : adminsIds){
            organizationRepo.addAdminToOrg(orgId,id);
        }
    }

    public ArrayList<String> getAllOrgsName() {
        return organizationRepo.getAllOrgsName();
    }
}
