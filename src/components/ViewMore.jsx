import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinsTable from "./CoinsTable";
import { fetchCategoryCoins } from "../utils/api";

const ViewMore = () => {
  const { category } = useParams();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      setCoins(await fetchCategoryCoins(category, 100)); // fetch full list
    };
    getCoins();
  }, [category]);

  return (
    <div className="container">
      <h2>{category.toUpperCase()} - Full List</h2>
      <CoinsTable coins={coins} />
    </div>
  );
};

export default ViewMore;
