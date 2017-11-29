package io.github.katayuno.BankAccount;

import java.util.ArrayList;
import java.util.List;

public class Movements {
    private List<Movement> movements;
    
    public Movements() {
	movements = new ArrayList<>();
    }

    public double getBalance() {
	if(movements.size() == 0)
	    return 0;
	return movements.get(movements.size() - 1).getCurrentBalance();
    }

    public void add(Movement movement) {
	movements.add(movement);
    }
    
    public final List<Movement> getList() {
	return movements;
    }
    
    
}
