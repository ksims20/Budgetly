// REST API controller for managing expenses

package com.budgetly.SpringBoot.controller;

import com.budgetly.SpringBoot.model.Expense;
import com.budgetly.SpringBoot.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

  @Autowired
  private ExpenseRepository expenseRepository;

  @GetMapping
  public List<Expense> getAllExpenses() {
    return expenseRepository.findAll();
  }

  @PostMapping
  public Expense createExpense(@RequestBody Expense expense) {
    return expenseRepository.save(expense);
  }
}
