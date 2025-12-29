// Sales data
let sales = [
  { month: 'Jan', revenue: 45000, orders: 234 },
  { month: 'Feb', revenue: 52000, orders: 267 },
  { month: 'Mar', revenue: 48000, orders: 245 },
];

// Charts
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const ordersCtx = document.getElementById('ordersChart').getContext('2d');

let revenueChart = new Chart(revenueCtx, {
  type: 'bar',
  data: { labels: sales.map(s=>s.month), datasets: [{ label: 'Revenue', data: sales.map(s=>s.revenue), backgroundColor: '#1e40af' }] },
  options: {}
});

let ordersChart = new Chart(ordersCtx, {
  type: 'line',
  data: { labels: sales.map(s=>s.month), datasets: [{ label: 'Orders', data: sales.map(s=>s.orders), borderColor: '#10b981', fill: false }] },
  options: {}
});

// Add Sale Function
function addSale() {
  const month = document.getElementById('month').value;
  const revenue = parseFloat(document.getElementById('revenue').value);
  const orders = parseInt(document.getElementById('orders').value);

  if(!month || !revenue || !orders) return alert('Please fill all fields');

  sales.push({ month, revenue, orders });

  // Update KPIs
  const totalRevenue = sales.reduce((sum,s)=>sum+s.revenue,0);
  const totalOrders = sales.reduce((sum,s)=>sum+s.orders,0);
  const avgOrder = (totalRevenue/totalOrders).toFixed(2);

  document.getElementById('totalRevenue').innerText = totalRevenue;
  document.getElementById('totalOrders').innerText = totalOrders;
  document.getElementById('avgOrder').innerText = avgOrder;

  // Update Charts
  revenueChart.data.labels = sales.map(s=>s.month);
  revenueChart.data.datasets[0].data = sales.map(s=>s.revenue);
  revenueChart.update();

  ordersChart.data.labels = sales.map(s=>s.month);
  ordersChart.data.datasets[0].data = sales.map(s=>s.orders);
  ordersChart.update();

  // Clear inputs
  document.getElementById('month').value='';
  document.getElementById('revenue').value='';
  document.getElementById('orders').value='';
    }
