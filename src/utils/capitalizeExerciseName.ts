export const capitalizeExerciseName = (name: string) => {
   const capitalizedWords = name
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
      .join(' ');
   return capitalizedWords;
};
