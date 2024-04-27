package com.example.fyp.repository;

import com.example.fyp.model.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Set;

@Repository
public interface OrganizationRepository extends JpaRepository<Organization,Long> {
    @Transactional
    @Modifying
    @Query(value = "insert into organization (organization_name, address, founder_id, enabled) values (?1,?2,?3,?4)",nativeQuery = true)
    void registerOrg(String name, String address, Long userid,Boolean enabled);

    @Query(value = "select organization.id from organization inner join user on organization.id = user.user_id and user.user_id = ?1",nativeQuery = true)
    Set<Long> getUserOrganizationsIds(Long userid);

    @Transactional
    @Modifying
    @Query(value = "insert into organization_editors values (?1,?2)",nativeQuery = true)
    void addEditorToOrg(Long orgId, Long editorId);

    @Query(value = "select id from organization",nativeQuery = true)
    Set<Long> getAllOrgsIds();

    @Transactional
    @Modifying
    @Query(value = "insert into organization_admins values (?1,?2)",nativeQuery = true)
    void addAdminToOrg(Long orgId, Long adminid);

    @Query(value = "select organization_id from organization where organization_name = ?1",nativeQuery = true)
    Long getOrgIdByItsName(String organizationName);

    @Query(value = "select organization_name from organization",nativeQuery = true)
    ArrayList<String> getAllOrgsName();
}
