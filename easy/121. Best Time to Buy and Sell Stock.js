var maxProfit = function (prices) {
  /**
   * simpan: maxProfit & lowestPrice
   * 
   */
  let profit = 0;
  let lowestPrice = Infinity;
  for (let price of prices){
    if (price < lowestPrice){
      lowestPrice = price
      continue;
    } else if (price - lowestPrice > profit){
      profit = price - lowestPrice
    }
  }
  return profit
};
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
