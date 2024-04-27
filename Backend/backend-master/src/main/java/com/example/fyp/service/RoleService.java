package com.example.fyp.service;

import com.example.fyp.model.User;
import com.example.fyp.model.Role;
import com.example.fyp.repository.UserRepository;
import com.example.fyp.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
//@Transactional
public class RoleService {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private RoleRepository userRoleRepo;

    public Role saveRole (Role role){
        if(userRoleRepo.findByRoleName(role.getRoleName())!=null){
            throw new IllegalStateException("role already exists");
        }
        else{
            return userRoleRepo.save(role);
        }
    }
    public void addRoleToUser(String email,String roleName){

        User user = userRepo.getUserByEmail(email);
        if(user==null){
            throw new IllegalStateException("user not found");
        }
        else {
            Role role = userRoleRepo.findByRoleName(roleName);
            user.getRoles().add(role);
            userRepo.save(user);//or, uncomment the transactional annotation and remove this line
        }
    }
}
