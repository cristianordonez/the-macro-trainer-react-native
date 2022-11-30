import { MacroMap } from '../../types/types';

const map: MacroMap = {
   total_fat: 'Fat',
   total_protein: 'Protein',
   total_carbohydrates: 'Carbs',
};

export const convertMacroKey = (key: keyof MacroMap) => {
   return map[key];
};
