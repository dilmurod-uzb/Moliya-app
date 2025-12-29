// Boshlang'ich ma'lumotlar
let incomeData = [45000, 52000, 48000, 61000, 55000, 67000];
const months = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun'];

// 1. Asosiy Daromad Grafigi
const ctx = document.getElementById('mainChart').getContext('2d');
const mainChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Daromad ($)',
            data: incomeData,
            borderColor: '#1e40af',
            backgroundColor: 'rgba(147, 197, 253, 0.5)',
            fill: true,
            tension: 0.4
        }]
    },
    options: { responsive: true }
});

// 2. Ma'lumot qo'shish funksiyasi
function addData() {
    const amount = document.getElementById('inputAmount').value;
    if (amount) {
        incomeData.push(Number(amount));
        months.push('Yangi');
        mainChart.update(); // Grafikni darrov yangilaydi
        
        // Umumiy summani yangilash
        let currentTotal = Number(document.getElementById('totalIncome').innerText.replace('$', '').replace(',', ''));
        document.getElementById('totalIncome').innerText = '$' + (currentTotal + Number(amount)).toLocaleString();
        
        document.getElementById('inputAmount').value = ''; // Inputni tozalash
    }
}
