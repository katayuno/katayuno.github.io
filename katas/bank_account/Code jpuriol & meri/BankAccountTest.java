package io.github.katayuno.BankAccount;

import static org.junit.Assert.assertEquals;
import java.util.Date;
import org.junit.Test;

public class BankAccountTest {
    private final static double ACCEPTED_ROUND_ERROR = 0.001;
    
    @Test
    public void checkDeposit() {
	double expectedDeposit = 10000.0;
	Date fromThisDay = new Date();
	
	BankAccount account = new BankAccount();
	account.makeDeposit(expectedDeposit);
	
	double actualDeposit = account.getDeposit(fromThisDay);
	
	assertEquals(expectedDeposit, actualDeposit, ACCEPTED_ROUND_ERROR);
    }
    
    @Test
    public void checkBalance() {
	double expectedBalance = 1500.00;
	
	BankAccount account = new BankAccount();
	
	double deposit1 = 1000.00;
	account.makeDeposit(deposit1);
	double deposit2 = 500.00;
	account.makeDeposit(deposit2);
	
	double actualBalance = account.getBalance();
	
	assertEquals(expectedBalance, actualBalance, ACCEPTED_ROUND_ERROR);
    }
    
    @Test
    public void checkWithdrawal() {
	double expectedBalance = 1300.00;
	
	BankAccount account = new BankAccount();
	
	double deposit1 = 1000.00;
	account.makeDeposit(deposit1);
	double withdrawal = 200.00;
	account.makeWithdrawal(withdrawal);
	double deposit2 = 500.00;
	account.makeDeposit(deposit2);
	
	double actualBalance = account.getBalance();
	
	assertEquals(expectedBalance, actualBalance, ACCEPTED_ROUND_ERROR);
    }
    
    @Test
    public void checkTransfer() {
	BankAccount accountTransfering = new BankAccount();
	BankAccount accountReceiving = new BankAccount();
	double amount = 500;
	accountTransfering.makeDeposit(amount);
	
	accountTransfering.makeTransfer(accountReceiving, amount);
	
	double expectedTransferingBalance = 0;
	double expectedReceivingBalance = 500;
	assertEquals(expectedTransferingBalance, accountTransfering.getBalance(), ACCEPTED_ROUND_ERROR);
	assertEquals(expectedReceivingBalance, accountReceiving.getBalance(), ACCEPTED_ROUND_ERROR);
    }
}
