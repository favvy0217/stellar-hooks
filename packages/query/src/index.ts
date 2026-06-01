// Hooks
/**
 * @file index.ts
 * @description Entry point for the @stellar-hooks/query package.
 * @package @stellar-hooks/query
 * @license MIT
 */

export { useFreighterQuery } from "./hooks/useFreighterQuery";
export { useStellarAccountQuery } from "./hooks/useStellarAccountQuery";
export { useStellarBalanceQuery } from "./hooks/useStellarBalanceQuery";

// Types
export type { UseFreighterQueryOptions } from "./types";
export type { UseStellarAccountQueryOptions } from "./types";
export type { UseStellarBalanceQueryOptions } from "./types";
export type { UseStellarBalanceQueryReturn } from "./hooks/useStellarBalanceQuery";
