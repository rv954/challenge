export interface CachingFetch {
    error: Error | null;
    data: unknown;
    isLoading: boolean;
};

export type UseCachingFetch = (url: string) => CachingFetch;


export type CacheEntry = {
    data: unknown;
    timestamp: number;
};
