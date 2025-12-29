export const mockDatabase = {
  sales: [
    { month: 'Jan', revenue: 45000, target: 50000 },
    { month: 'Feb', revenue: 52000, target: 50000 },
    { month: 'Mar', revenue: 48000, target: 55000 },
    { month: 'Apr', revenue: 61000, target: 55000 },
    { month: 'May', revenue: 55000, target: 60000 },
    { month: 'Jun', revenue: 67000, target: 60000 }
  ],
  financials: {
    grossProfit: 68,
    operatingRatio: 75,
    netProfit: 22
  },
  production: [
    { product: 'Prod A', planned: 1200, completed: 1150, rejected: 50 },
    { product: 'Prod B', planned: 800, completed: 780, rejected: 20 },
    { product: 'Prod C', planned: 1500, completed: 1420, rejected: 80 }
  ]
};

export const COLORS = {
  primary: '#1e40af',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444'
};
