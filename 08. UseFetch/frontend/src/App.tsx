import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [search, set_search] = useState("")
  const { isLoading, data, error } = useFetch(`http://localhost:5002/api/v1/products?search=${search}`);

  return (
    <>
      <h1>useFetch</h1>
      <input type="search" onChange={(e: any) => set_search(e.target.value)} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {data.products && <h2>Products: {data.products.length}</h2>}
    </>
  );
};

export default App;

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ products: [] });
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { withCredentials: true, signal: controller.signal });
        setData(response.data);
      } catch (err: any) {
        if (axios.isCancel(error)) return console.log("request cancelled")
        console.error(err);
        setError(err.response?.data?.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
};