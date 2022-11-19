package com.example.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

import static java.util.Calendar.MARCH;

@RestController
@RequestMapping(path="api/v1/student")
public class StudentController {

    @GetMapping
    public List<Student> getStudents()
    {
        Student adam = new Student(
                1L,
                "Adam",
                "adam@wp.pl",
                LocalDate.of(2000, MARCH, 5),
                22
        );

        Student jan = new Student(
                1L,
                "jan",
                "jan@wp.pl",
                LocalDate.of(2000, MARCH, 5),
                22
        );

        return List.of(adam,jan);
    }
}
