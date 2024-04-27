package com.example.fyp.controller;

import com.example.fyp.request.RegOrg;
import com.example.fyp.request.addAdminsRequest;
import com.example.fyp.request.addEditorsRequest;
import com.example.fyp.service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Set;

@RestController
@RequestMapping("/organization")
public class OrganizationController {

    @Autowired
    OrganizationService organizationService;

    @GetMapping("/allOrgsNames")
    ArrayList<String> getAllOrgsName(){
        return organizationService.getAllOrgsName();
    }

    @PostMapping("/register")
    ResponseEntity<String> registerOrganization(@RequestBody RegOrg regRequest,@AuthenticationPrincipal String userId){
        Long UserId = Long.parseLong(userId);
        organizationService.registerOrganization(regRequest,UserId);
        return ResponseEntity.status(HttpStatus.OK)
                .body("Ok");
    }
    @PostMapping("/addAdmins")
    ResponseEntity<String> addAdmins(@RequestBody addAdminsRequest request, @AuthenticationPrincipal String userid){
        Long UserId = Long.valueOf(userid);
        //Other checks such as organization exists is auto handled
        Set<Long> orgs = organizationService.getUserOrganizationsIds(UserId);
        if(!orgs.contains(request.getOrgId())){
            throw new IllegalStateException("you are not the founder of this organization");//Handle this exception sahi tarah
        }
        else{
            //we can check if editorIds are not in blacklist
            organizationService.addAdmins(request.getOrgId(),UserId,request.getAdminIds());
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body("Admin added");
    }
    @PostMapping("/addEditors")
    ResponseEntity<String> addEditors(@RequestBody addEditorsRequest request, @AuthenticationPrincipal String userid){
        Long UserId = Long.valueOf(userid);
        //Other checks such as organization exists is auto handled
        Set<Long> orgs = organizationService.getUserOrganizationsIds(UserId);
        if(!orgs.contains(request.getOrgId())){
            throw new IllegalStateException("you are not the founder of this organization");//Handle this exception sahi tarah
        }
        else{
            //we can check if editorIds are not in blacklist
            organizationService.addEditors(request.getOrgId(),UserId,request.getEditorIds());
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body("Editor added");
    }

}
