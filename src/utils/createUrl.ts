import { GlobalMetricsState } from '../../types/types';

type Date = { date: string };

export const createUrl = (url: string, params: GlobalMetricsState | Date) => {
   let currentUrl = url + '?';
   let test = new URLSearchParams();
   Object.entries(params).forEach(([key, val]) => test.append(key, val + ''));
   return currentUrl + test;
};
