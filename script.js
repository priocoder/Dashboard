// Daily Sales Data for 30 Days
const dailySalesData = {
  labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Generate labels for 30 days
  datasets: [{
    label: "Daily Sales",
    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5000) + 1000), // Random sales data
    backgroundColor: "rgba(75, 192, 192, 0.2)",
    borderColor: "rgba(75, 192, 192, 1)",
    borderWidth: 2,
    fill: true,
  }],
};

// Chart Configuration
const config = {
  type: "bar",
  data: dailySalesData,
  options: {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales ($)",
        },
        beginAtZero: true,
      },
    },
  },
};

// Render Chart
const dailySalesChart = new Chart(document.getElementById("dailySalesChart"), config);

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  dailySalesChart.update(); // Update chart to reflect theme changes
});