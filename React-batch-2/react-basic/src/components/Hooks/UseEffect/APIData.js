import React, { useEffect, useState } from "react";

function APIData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h1>Data from API</h1>
      <h3>{data.products[0].title}</h3>
    </>
  );
}

export default APIData;
