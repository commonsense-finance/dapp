import TCST from "../indexes/TCST.json";
import ERC20 from "../contracts/ERC20.json";

const indexes = {
  TCST,
};

export async function getIndexData({ index, web3, account }) {
  const tokens = indexes[index];
  const promises = tokens.map(async (token) => {
    if (token.contract !== 'SELF') {
        const tokenInstance = new web3.eth.Contract(ERC20.abi, token.contract);
        const a = await tokenInstance.methods.balanceOf()
        console.log(a);
        return tokenInstance.methods.balanceOf(account).call();
    }
    return web3.eth.getBalance(account);
  });
  try {
    const tokensBalances = await Promise.all(promises);
    return tokens.map((token, index) => ({
      ...token,
      balance: tokensBalances[index] / 10 ** token.decimals,
    }));
  } catch (err) {
    alert(err);
    return tokens;
  }
}
