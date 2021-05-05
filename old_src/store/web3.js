import React, { useState, useEffect, useContext, createContext } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import Preloader from "../components/Preloader";

const Web3Context = createContext();

export function useWeb3() {
  return useContext(Web3Context);
}

async function initializeWeb3(setWeb3) {

  const ethereum = await detectEthereumProvider();
  // ethereum.enable();
  // console.log(ethereum)
  if (ethereum) {
    try {
      const web3 = new Web3(ethereum);
      setWeb3(web3);
    } catch (err) {
      alert(err);
    }
    ethereum.on("chainChanged", (chain) => {
      console.log("Change!", chain);
      window.location.reload();
    });
  } else {
    alert("Please install MetaMask");
  }
}

export function Web3Provider({ children }) {
  const [provider, setWeb3] = useState(null);
  useEffect(() => {
    console.log('Render')
    initializeWeb3(setWeb3);
  }, []);
  return (
    <Web3Context.Provider value={provider}>
      {!provider ? <Preloader /> : children}
    </Web3Context.Provider>
  );
}
