// script.js
const ctx = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Energy Usage (kWh)',
      data: [12, 15, 10, 8, 18, 20, 16],
      borderColor: '#0ff',
      backgroundColor: 'rgba(0, 255, 255, 0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#fff' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#fff' }
      },
      y: {
        ticks: { color: '#fff' }
      }
    }
  }
});
