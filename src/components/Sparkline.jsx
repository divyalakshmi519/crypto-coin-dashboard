import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";
import { memo } from "react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Sparkline = memo(({ data, positive, id, width = 100, height = 30 }) => {
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        data,
        borderColor: positive ? "green" : "red",
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: false,   // Use fixed width/height
    animation: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { line: { borderWidth: 2 } }
  };

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <Line key={id} data={chartData} options={options} width={width} height={height} />
    </div>
  );
});

export default Sparkline;
