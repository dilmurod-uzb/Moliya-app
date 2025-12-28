export function calculateMetrics({ revenue, expenses }) {
  const totalRevenue = sum(revenue);
  const totalExpenses = sum(expenses);
  const netProfit = totalRevenue - totalExpenses;
  const grossMargin = ((netProfit / totalRevenue) * 100).toFixed(1);
  return { totalRevenue, totalExpenses, netProfit, grossMargin };
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
