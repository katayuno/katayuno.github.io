package io.github.katayuno.BankAccount;

import java.util.Date;

public class Movement {
    private final Date date;
    private final double amount;
    private final double currentBalance;
    
    public Movement(double amount, double currentBalance) {
	this.date = new Date();
	this.amount = amount;
	this.currentBalance = currentBalance;
    }

    public Date getDate() {
	return date;
    }
    
    public double getAmount() {
	return amount;
    }

    public double getCurrentBalance() {
	return currentBalance;
    }
}
