package com.todo.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String createdDate;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Todo> todos;

    // Getters and Setters
}
%