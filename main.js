import { financeData } from './data.js';
import { calculateMetrics } from './logic.js';
import { renderLineChart, renderDonutChart } from './charts.js';

// Navigation behavior
document.querySelectorAll('.nav-item').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.page-section').forEach((s) => s.classList.add('hidden'));
    document.getElementById(btn.dataset.section).classList.remove('hidden');
    document.querySelectorAll('.nav-item').forEach((n) => n.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Metrics + Charts
const kpiDiv = document.getElementById('kpi-cards');
const summary = calculateMetrics(financeData);

kpiDiv.innerHTML = `
  <div class="card"><h4>Total Revenue</h4><p class="text-xl font-bold">$${summary.totalRevenue}</p></div>
  <div class="card"><h4>Total Expenses</h4><p class="text-xl font-bold">$${summary.totalExpenses}</p></div>
  <div class="card"><h4>Net Profit</h4><p class="text-xl font-bold">$${summary.netProfit}</p></div>
  <div class="card"><h4>Gross Margin</h4><p class="text-xl font-bold">${summary.grossMargin}%</p></div>
  <div class="card"><h4>Cash Balance</h4><p class="text-xl font-bold">$12,000</p></div>
`;

// Render charts
renderLineChart(
  document.getElementById('lineChart'),
  financeData.months,
  financeData.revenue,
  financeData.expenses
);
renderDonutChart(document.getElementById('donutChart'), financeData.expenseCategories);
