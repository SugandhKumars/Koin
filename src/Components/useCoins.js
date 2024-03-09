import React, { useEffect, useState } from "react";

const useCoins = () => {
  const [coin, setCoin] = useState();
  useEffect(() => {
    getCoin();
  }, []);
  const getCoin = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const data = await response.json();
    setCoin(data?.coins);
  };
  return coin;
};

export default useCoins;
