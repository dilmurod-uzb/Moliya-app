export function renderLineChart(ctx, labels, rev, exp) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: 'Revenue', data: rev, borderColor: '#1F75FE', tension: 0.4 },
        { label: 'Expenses', data: exp, borderColor: '#EF4444', tension: 0.4 },
      ],
    },
    options: { responsive: true, plugins: { legend: { position: 'bottom' } } },
  });
}

export function renderDonutChart(ctx, categories) {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(categories),
      datasets: [
        {
          data: Object.values(categories),
          backgroundColor: ['#1F75FE', '#10B981', '#F59E0B', '#EF4444'],
        },
      ],
    },
    options: { cutout: '60%' },
  });
}
