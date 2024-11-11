//Task 4: Create the Main Application

import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import {Transaction} from "./transaction.js";

//display the total portfolio value
 console.log("Portfolio Value", calculatePortfolioValue());

//display the portfolio percentages

const allocation = getPortfolioAllocation();
console.log("Portfolio Allocation", allocation);

//transaction data
try {
    const transaction1 = new Transaction(1, "buy", 1);
    console.log("Transaction 1:", transaction1);

    const transaction2 = new Transaction(2, "sell", 1);
    console.log("Transaction 2:", transaction2);
} catch (error) {
    console.error("Transaciton Error");
}

console.log("Updated portfolio Value", calculatePortfolioValue());