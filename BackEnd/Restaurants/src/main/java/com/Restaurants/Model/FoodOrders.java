package com.Restaurants.Model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class FoodOrders {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderId;
    private String restoName;
    private String username;   
    private boolean orderStatus;
    private long total;
    

    @OneToMany(mappedBy = "foodOrder", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<FoodItem> foodItems = new ArrayList<>();

}
