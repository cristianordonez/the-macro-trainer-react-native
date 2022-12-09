export const calculate1RepMax = (
   reps: number,
   weight: number,
   weightMetric: 'lb' | 'kg'
) => {
   const weightInKg = weightMetric === 'lb' ? weight / 2.2 : weight;
   console.log('weightInKg: ', weightInKg);
   if (weightInKg > 455) return weight;
   const result = weightInKg / (1.0278 - 0.0278 * reps);
   return weightMetric === 'kg' ? Math.round(result) : Math.round(result * 2.2);
};
