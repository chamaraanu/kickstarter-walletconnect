import { Chain } from "@rainbow-me/rainbowkit";

export const avalancheChain: Chain = {
    id: 5,
    name: "Goerli",
    network:"goerli Testnet",
    iconUrl: 'https://example.com/icon.svg',
    iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: "Ether",
      symbol: "ETH",
    },
    rpcUrls: {
      default: "https://eth-goerli.g.alchemy.com/v2/HlV6pIzIK1ZHKm_bIeznnMpYEiXzVomY",
    },
    blockExplorers: {
      default: { name: "SnowTrace", url: "https://snowtrace.io" },
      snowtrace: { name: "SnowTrace", url: "https://snowtrace.io" },
    },
    testnet: true,
};
  
export const fujiChain: Chain = {
    id: 43_113,
    name: "Fuji",
    network: "fuji",
    iconUrl: 'https://example.com/icon.svg',
    iconBackground: '#fff',
    nativeCurrency: {
        decimals: 18,
        symbol: "AVAX",
        name: "Avalanche"
    },
    rpcUrls: {
        default: "https://api.avax-test.network/ext/bc/C/rpc"
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io/' },
    },
    testnet:true
}

export const custom_chains = [avalancheChain, fujiChain];