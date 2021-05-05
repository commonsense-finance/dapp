import React, { useEffect, useState } from "react";
import { useWeb3 } from "../../store/web3";
import { getIndexData } from "../../store/indexes";
import { Card, Table } from "@themesberg/react-bootstrap";

const TableRow = ({ symbol, balance, icon }) => {
  return (
    <tr>
      <td>
        <img src={icon} style={{ width: "1.65rem", height: "1.65rem" }}></img>
      </td>
      <td>{symbol}</td>
      <td>{balance.toFixed(8)}</td>
    </tr>
  );
};

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
      <div className="d-xl-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-2 mb-xl-0">
          <h4>TCST Index</h4>
          <p className="mb-0">Account: {account}</p>
        </div>
      </div>
      <Card border="light" className="shadow-sm mb-4">
        <Card.Body className="pb-0">
          <Table
            responsive
            className="table-centered table-nowrap rounded mb-0"
          >
            <thead className="thead-light">
              <tr>
                <th className="border-0">-</th>
                <th className="border-0">Symbol</th>
                <th className="border-0">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {indexData.map((token, index) => (
                <TableRow
                  key={`page-index-${token.symbol}`}
                  {...token}
                  index={index + 1}
                />
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};
