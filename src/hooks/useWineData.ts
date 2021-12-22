import useSWR from 'swr';
import { fetcher } from "../utils/fetcher";
import { WINE_API_ENDPOINT } from '../constants'

export const useWindeData = (path: string) => {
    return useSWR(`${WINE_API_ENDPOINT}${path}`, fetcher);
}

// const { data, error } = useSWR('https://api.sampleapis.com/wines/port', fetcher);