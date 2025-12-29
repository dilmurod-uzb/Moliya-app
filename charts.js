import { mockDatabase, COLORS } from './data.js';

// Bu yerda siz yuborgan koddagi barcha murakkab grafiklar (Bar, Area, Gauge) bo'ladi
export function initializeCharts() {
    const ctxArea = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctxArea, {
        type: 'line',
        data: {
            labels: mockDatabase.sales.map(s => s.month),
            datasets: [{
                label: 'Revenue',
                data: mockDatabase.sales.map(s => s.revenue),
                borderColor: COLORS.primary,
                backgroundColor: 'rgba(30, 64, 175, 0.2)',
                fill: true,
                tension: 0.4
            }]
        }
    });

    // Production Bar Chart
    const ctxBar = document.getElementById('productionChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: mockDatabase.production.map(p => p.product),
            datasets: [
                { label: 'Planned', data: mockDatabase.production.map(p => p.planned), backgroundColor: '#94a3b8' },
                { label: 'Completed', data: mockDatabase.production.map(p => p.completed), backgroundColor: COLORS.success },
                { label: 'Rejected', data: mockDatabase.production.map(p => p.rejected), backgroundColor: COLORS.danger }
            ]
        }
    });
}

