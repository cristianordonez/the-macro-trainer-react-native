import { ChartValue, GlobalUserState } from '../../types/types';

export const createChartData = (
   startingWeight: number,
   weightMetric: GlobalUserState['weightMetric'],
   goal: GlobalUserState['goal']
): ChartValue[] => {
   let weight;
   //first get correct weight value by converting to lbs
   if (weightMetric === 'kg') {
      weight = startingWeight * 2.2;
   } else {
      weight = startingWeight;
   }

   let today = new Date();
   let dateInOneMonth = new Date();
   let dateInThreeMonths = new Date();
   let dateInFourMonths = new Date();
   let result = [];
   let weightChange = 0;
   const dateArr = [today, dateInOneMonth, dateInThreeMonths, dateInFourMonths];

   for (let i = 0; i < dateArr.length; i++) {
      let updatedWeight;
      switch (goal) {
         case 'weight_loss':
            updatedWeight = weight - weightChange;
            break;
         case 'maintain':
            updatedWeight = weight;
            break;
         case 'gain_muscle':
            updatedWeight = weight + weightChange;
            break;
         default:
            updatedWeight = weight;
      }
      result.push({
         date: new Date(dateArr[i].setMonth(dateArr[i].getMonth() + i)),
         weight: updatedWeight,
      });
      weightChange += 4;
   }

   return result;
};
