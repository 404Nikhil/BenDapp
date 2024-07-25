import { ethers } from "ethers";
import identiFi from "./identiFi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0xe82a687C79AdB17D89335dc36e481ec9bE7D84c7",
      identiFi.abi,
      signer
    );

    return contractReader;
  }
};