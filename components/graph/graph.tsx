// components/Graph.tsx
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define the props type for flexibility
interface GraphProps {
    data: ChartData<'bar'>;
    options?: ChartOptions<'bar'>;
}

const Graph: FC<GraphProps> = ({ data, options }) => {
    return <Bar data={data} options={options} />;
};

export default Graph;
