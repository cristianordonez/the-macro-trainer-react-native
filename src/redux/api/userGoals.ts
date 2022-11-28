import { GlobalMetricsState } from '../../../types/types';

const url = 'http://192.168.1.8:8080/api';

export const userGoals = {
   calculate: async ({
      goal,
      activityLevel,
      gender,
      age,
      height,
      heightMetric,
      weight,
      weightMetric,
   }: GlobalMetricsState) => {
      let currentUrl = `${url}/goals/calculate`;
      currentUrl +=
         '?' +
         new URLSearchParams({
            goal,
            activityLevel: activityLevel + '',
            gender,
            age: age + '',
            height: height + '',
            weight: weight + '',
            heightMetric,
            weightMetric,
         });
      const fetchOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response;
   },
   get: async () => {
      let currentUrl = `${url}/goals/`;
      const fetchOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response;
   },
};
