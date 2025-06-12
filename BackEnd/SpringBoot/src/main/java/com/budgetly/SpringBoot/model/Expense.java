// Expense.java - Data model that maps to the Expense table in MySQL

package com.budgetly.SpringBoot.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
public class Expense {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String category;

  private BigDecimal amount;

  private LocalDateTime date;

  private String description;

  @Enumerated(EnumType.STRING)
  private TransactionType type;

  public Expense() {}

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public BigDecimal getAmount() {
    return amount;
  }

  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }

  public LocalDateTime getDate() {
    return date;
  }

  public void setDate(LocalDateTime date) {
    this.date = date;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public TransactionType getType() {
    return type;
  }

  public void setType(TransactionType type) {
    this.type = type;
  }
}
