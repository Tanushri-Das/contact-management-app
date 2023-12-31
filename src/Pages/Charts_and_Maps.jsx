
// Importing necessary libraries and components
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { MapContainer, TileLayer } from "react-leaflet";
import WorldMap from "../Components/WorldMap";

// Defining the Dashboard component
const Dashboard = () => {
  // State to hold data from API responses
  const [countriesData, setCountriesData] = useState([]);
  const [chartData, setChartData] = useState({});

  // Fetching COVID-19 countries data from API
  useEffect(() => {
    axios("https://disease.sh/v3/covid-19/countries").then((res) => {
      const data = res.data;
      setCountriesData(data);
    });
  }, []);

  // Fetching historical COVID-19 data for chart from API
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        const data = res.data;

        // Formatting data for chart
        const newChartData = {
          labels: Object.keys(data.cases),
          datasets: [
            {
              label: "Cases",
              data: Object.values(data.cases),
              fill: false,
              borderColor: "#f50057",
              tension: 0.2,
            },
          ],
        };

        setChartData(newChartData);
      });

    // Registering required Chart.js components
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  // JSX rendering starts here
  return (
    <div className="w-full pt-28 px-4 pb-8">
      {/* Title for the chart */}
      <h1 className="text-xl md:text-2xl xl:text-4xl font-bold mb-4 text-black">
        Corona Cases Chart
      </h1>
      <div className="border-2 border-red-100 w-11/12 m-auto 10 auto 10">
        {/* Displaying the Line chart */}
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-black mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>

      {/* Title for the world map */}
      <h1 className="text-xl md:text-2xl xl:text-4xl font-bold mb-6 mt-10 text-black">
        Corona Cases World Map
      </h1>
      <div className="border-2 border-blue-500 w-11/12 m-auto 5 auto 5">
        {/* Displaying the Leaflet MapContainer */}
        <MapContainer
          className="m-auto w-full border-blue-700"
          bounds={[
            [-60, -180],
            [85, 180],
          ]}
          zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />

          {/* Displaying the custom WorldMap component */}
          <WorldMap countriesData={countriesData} />
        </MapContainer>
      </div>
    </div>
  );
};

// Exporting the Dashboard component as default
export default Dashboard;

