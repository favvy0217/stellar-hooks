/**
 * @file context.tsx
 * @description React Context and Provider for Stellar configuration.
 * @package stellar-hooks
 * @license MIT
 */

import React, { createContext, useContext, useMemo } from "react";
import type { StellarContextValue, StellarProviderProps } from "./types";
import { NETWORK_CONFIGS } from "./types";

const StellarContext = createContext<StellarContextValue | null>(null);

/**
 * Wrap your app (or the portion that needs Stellar) with this provider.
 *
 * @example
 * ```tsx
 * <StellarProvider network="testnet">
 *   <App />
 * </StellarProvider>
 * ```
 */
export function StellarProvider({
  network = "testnet",
  customConfig,
  children,
}: StellarProviderProps) {
  const config = useMemo(() => {
    if (network === "custom") {
      if (!customConfig) {
        throw new Error(
          '[stellar-hooks] network="custom" requires a customConfig prop.'
        );
      }
      return customConfig;
    }
    return NETWORK_CONFIGS[network];
  }, [network, customConfig]);

  const value = useMemo<StellarContextValue>(
    () => ({ config, network }),
    [config, network]
  );

  return (
    <StellarContext.Provider value={value}>{children}</StellarContext.Provider>
  );
}

/**
 * Internal hook — consume the Stellar context inside other hooks.
 */
export function useStellarContext(): StellarContextValue {
  const ctx = useContext(StellarContext);
  if (!ctx) {
    throw new Error(
      "[stellar-hooks] useStellarContext must be used inside <StellarProvider>."
    );
  }
  return ctx;
}
