export enum ChainId {
  MAINNET = 10000,
}

export const SUPPORTED_CHAINS = [
  ChainId.MAINNET,
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'BCH',
}
