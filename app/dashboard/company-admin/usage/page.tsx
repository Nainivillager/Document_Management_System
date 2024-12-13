"use client"
import Graph from "@/components/graph/graph";

// pages/index.tsx

const Home = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May','April','May','June','July','August','September','November','December'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    };

    return (
        <div className=" w-[90%] h-[10%]">
            <h1>Sales Graph</h1>
            <Graph data={data} options={options} />
        </div>
    );
};

export default Home;
