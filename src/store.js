import React, { useState, useEffect, useContext, createContext } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

const EthereumContext = createContext();

export function useEthereum() {
  return useContext(EthereumContext);
}

async function initializeEthereum(setProvider) {
  const ethereum = await detectEthereumProvider();
  if (ethereum) {
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setProvider([ethereum, accounts]);
    } catch (err) {
      console.log(err);
      alert(err);
    }
    ethereum.on("chainChanged", () => {
      console.log('Change!');
      window.location.reload();
    });
  } else {
    alert("Please install MetaMask");
  }
}

export function EthereumProvider({ children }) {
  const [provider, setProvider] = useState([{}, []]);
  useEffect(() => {
    initializeEthereum(setProvider);
  }, []);
  return (
    <EthereumContext.Provider value={provider}>
      {children}
    </EthereumContext.Provider>
  );
}
