// ExpenseRepository.java - Interface to interact with the Expense table

package com.budgetly.SpringBoot.repository;

import com.budgetly.SpringBoot.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {
}
