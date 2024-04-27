package com.example.fyp.repository;

import com.example.fyp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface UserRepository extends JpaRepository<User,Long > {
    Optional<User> findByEmail(String email);
    @Query(value = "select * from user where email = ?1",nativeQuery = true)
    User getUserByEmail(String email);
    @Transactional
    @Modifying
    @Query(value = "UPDATE user u SET u.enabled = TRUE WHERE u.email = ?1",nativeQuery = true)
    int enableUser(String email);
}
