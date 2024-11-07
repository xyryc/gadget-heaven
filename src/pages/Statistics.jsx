import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const products = useLoaderData();

  const chartData = products.map((product) => ({
    productTitle: product.product_title,
    price: product.price,
    rating: product.rating,
    availability: product.availability ? 1 : 0,
  }));

  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="productTitle" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            dataKey="price"
            fill="#8884d8"
            stroke="#8884d8"
            name="Price ($)"
          />

          <Bar dataKey="rating" barSize={20} fill="#413ea0" name="Rating" />

          <Line type="monotone" dataKey="price" stroke="#ff7300" name="Price" />

          <Scatter
            dataKey="availability"
            fill="red"
            name="Availability (1=Yes, 0=No)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
