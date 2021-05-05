import React, { useState, useEffect, Fragment } from "react";
import { useWeb3 } from "../store/web3";
import { getIndexData } from "../store/indexes";

export default () => {
  const [indexData, setIndexData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState("TCST");
  const account = "0x3198893da148cf45258121d990d1697ae0d77fcc";
  const web3 = useWeb3();
  async function handleIndex(indexName) {
    const data = await getIndexData({
      index: indexName,
      account,
      web3,
    });
    setIndexData(data);
  }
  useEffect(() => {
    handleIndex(currentIndex);
  }, []);
  return (
    <>
      <div className="p-4 mb-2 text-white border border-white rounded-md font-white dark:bg-gray">
        Account: {account}
      </div>
      <div className="grid w-full grid-cols-3 gap-2 p-4 border rounded-md dark:bg-gray dark:text-white font-secondary dark:border-white">
        <div className="font-bold">Icon</div>
        <div className="font-bold">Symbol</div>
        <div className="font-bold">Balance</div>
        <hr className="col-span-3" />
        {indexData.map((index) => (
          <Fragment key={index.icon}>
            <div className="my-1">
              <img src={index.icon} />
            </div>
            <div className="my-1">
              <h4>{index.symbol}</h4>
            </div>
            <div className="my-1">
              <h4>{index.balance.toFixed(8)}</h4>
            </div>
            <hr className="col-span-3" />
          </Fragment>
        ))}
      </div>
    </>
  );
};
