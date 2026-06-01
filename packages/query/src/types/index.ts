/**
 * @file index.ts
 * @description Type definitions for the @stellar-hooks/query package.
 * @package @stellar-hooks/query
 * @license MIT
 */

import type { UseMutationOptions, UseQueryOptions } from "react-query";
import type { StellarAccountData, SignTransactionOptions } from "stellar-hooks";

/**
 * Options for useFreighterQuery
 */
export interface UseFreighterQueryOptions extends Omit<UseMutationOptions, "mutationFn"> {
  enabled?: boolean;
}

/**
 * Options for useStellarAccountQuery
 */
export interface UseStellarAccountQueryOptions extends Omit<UseQueryOptions<StellarAccountData | null>, "queryKey" | "queryFn"> {
  enabled?: boolean;
  refetchInterval?: number;
}

/**
 * Options for useStellarBalanceQuery
 */
export interface UseStellarBalanceQueryOptions extends Omit<UseQueryOptions, "queryKey" | "queryFn"> {
  enabled?: boolean;
  refetchInterval?: number;
}
