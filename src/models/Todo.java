package com.todo.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;
    private boolean status;
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    // Getters and Setters
}
