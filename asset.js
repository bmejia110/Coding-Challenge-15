//Task 1: Create the Asset Module

export const assets = [
    {id: 1, name: "AAPL", type: stock, price: 226, quantity: 10 },
    {id: 2, name: "TSLA", type: stock, price: 321, quantity: 5 },
    {id: 3, name: "NVDA", type: stock, price: 147, quantity: 10 },
    {id: 4, name: "NFLX", type: stock, price: 795, quantity: 6 }

];

//function to get asset details

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}