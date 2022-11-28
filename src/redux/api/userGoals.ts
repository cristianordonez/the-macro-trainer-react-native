import { GlobalMetricsState } from '../../../types/types';

export const userGoals = {
   getGoals: async ({
      goal,
      activityLevel,
      gender,
      age,
      height,
      heightMetric,
      weight,
      weightMetric,
   }: GlobalMetricsState) => {
      let url = 'http://192.168.1.8:8080/api/goals/calculate';
      url +=
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
      const response = await fetch(url, fetchOptions);
      return response.json();
   },
};
