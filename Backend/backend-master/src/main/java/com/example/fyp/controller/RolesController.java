package com.example.fyp.controller;

import com.example.fyp.model.Role;
import com.example.fyp.request.RoleAndUserRequest;
import com.example.fyp.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/roles")
public class RolesController {
    @Autowired
    private RoleService roleService;

    @PostMapping("/addNew")
    public String addNewRole(@RequestBody Role role) {
        try {
            roleService.saveRole(role);
            return "New role added to system successfully";
        } catch (IllegalStateException e) {
            throw new IllegalStateException("Role cannot be added");
        }
    }
    @PostMapping("/assignToUser")
    public String assignRoleToUser (@RequestBody RoleAndUserRequest request) {
        try{
            roleService.addRoleToUser(request.getEmail(),request.getRoleName());
            return "successfully assigned new role to user";
        } catch (IllegalStateException e){
            throw new IllegalStateException("Role cannot be assigned");
        }
    }

}


