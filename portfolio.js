//Task 2: Create the Portfolio Module

import { assets } from "./asset.js";

//fucntion to calculate the total portfolio value

export function calculatePortfolioValue() {
    return assets.reduce((total, assset) => {
        return total + asset.price * asset.quantity;
    }, 0);
}

//function to calculate protfolio allcation as percentages

export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => {
        const allocation = (asset.price * asset.quantity) / totalValue * 100;
        return {
            id: asset.id,
            name: asset.name,
            type: asset.type,
            allocation: allocation.toFixed(2) + "%"
        };
    })
}