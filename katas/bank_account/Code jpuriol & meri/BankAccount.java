package io.github.katayuno.BankAccount;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class BankAccount {
    private Movements movements;
    
    public BankAccount() {
	movements = new Movements();
    }

    public void makeDeposit(double amount) {
	double currentBalance = movements.getBalance();
	
	Movement deposit = new Movement(amount, currentBalance+amount);
	movements.add(deposit);
    }

    public double getDeposit(Date date) {
	List<Movement> movementsList = movements.getList();
	for(Movement movement : movementsList) {
	    Calendar calendarDeposit = Calendar.getInstance();
	    Calendar calendarDate = Calendar.getInstance();
	    calendarDeposit.setTime(movement.getDate());
	    calendarDate.setTime(date);
	    boolean sameDay = calendarDeposit.get(Calendar.YEAR) == calendarDate.get(Calendar.YEAR) &&
	            calendarDeposit.get(Calendar.DAY_OF_YEAR) == calendarDate.get(Calendar.DAY_OF_YEAR);
	    if(sameDay)
		return movement.getAmount();
	}
	
	return 0;
    }

    public double getBalance() {
	return movements.getBalance();
    }

    public void makeWithdrawal(double amount) {
	double currentBalance = movements.getBalance();
	
	Movement withdrawal = new Movement(-amount, currentBalance-amount);
	movements.add(withdrawal);
    }

    public void makeTransfer(BankAccount account2, double amount) {
	this.makeWithdrawal(amount);
	account2.makeDeposit(amount);
    }
}
