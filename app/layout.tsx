"use client";
import { defineChain } from "viem";
import { Outfit } from "next/font/google";
import "./globals.css";

import { PrivyProvider } from "@privy-io/react-auth";
const font = Outfit({ subsets: ["latin"] });


const zkEVMCardonaTestnet = defineChain({
  id: 2442,
  name: "zkEVMCardonaTestnet",
  network: "zkEVMCardonaTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "zkEVMCardonaTestnet",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public"],
    },
  } as any,
  blockExplorers: {
    default: { name: "Explorer", url: "https://cardona-zkevm.polygonscan.com" },
  },
}) as any;
const BitTorrent = defineChain({
  id: 1029,
  name: "BitTorrent Chain Donau",
  network: "BitTorrent Chain Donau",
  nativeCurrency: {
    decimals: 18,
    name: "BitTorrent Chain Donau",
    symbol: "BTTC",
  },
  rpcUrls: {
    default: {
      http: ["https://pre-rpc.bt.io/"],
    },
  } as any,
  blockExplorers: {
    default: { name: "Explorer", url: "https://testscan.bt.io" },
  },
}) as any;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId="clz0yrhfy02x6sxoqij9i0n85"
          config={{
            appearance: {
              theme: "dark",
              accentColor: "#676FFF",
              logo: "https://your-logo-url",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: zkEVMCardonaTestnet,
            supportedChains: [zkEVMCardonaTestnet, BitTorrent],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}