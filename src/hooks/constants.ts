export const ONE_MINUTE_IN_MS = 60 * 1000;

export const DEFAULT_QUERY_OPTIONS = {
    refetchOnWindowFocus: false,
    staleTime: ONE_MINUTE_IN_MS,
    retry: 3,
} as const;