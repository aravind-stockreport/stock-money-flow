const ctx = document.getElementById("moneyChart").getContext("2d");

const data = {
  labels: ["Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"],
  datasets: [
    {
      label: "FII (in ₹ Cr)",
      data: [1200, 950, -300, 200, 1100],
      backgroundColor: "#3b82f6",
    },
    {
      label: "DII (in ₹ Cr)",
      data: [-500, 300, 800, -100, 400],
      backgroundColor: "#f59e0b",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "FII/DII Net Investment Flow",
      },
    },
  },
};

new Chart(ctx, config);
