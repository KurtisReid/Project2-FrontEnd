package dev.reid.services;

import dev.reid.entities.Grade;
import dev.reid.entities.Student;
import dev.reid.repos.GradeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class GradeServiceImpl implements GradeService{

    @Autowired
    GradeRepo gradeRepo;

    @Override
    public Grade createGrade(Grade grade) {
        //System.out.println(grade);
        return this.gradeRepo.save(grade);
    }

    @Override
    public List<Grade> getGradesByStudentId(int id) {
        List <Grade> list = this.gradeRepo.findGradesByStudentId(id);
        return list;

    }

    @Override
    public boolean deleteGradeById(int id) {
        if(this.gradeRepo.existsById(id)){
            this.gradeRepo.deleteById(id);
            return true;
        }else {
            return false;
        }
    }
}
