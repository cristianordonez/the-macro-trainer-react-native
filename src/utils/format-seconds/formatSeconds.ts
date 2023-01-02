export const formatSeconds = (seconds: number): string => {
   if (seconds > 359999) {
      return '99:59:59';
   }
   const hours = Math.floor(seconds / 3600);
   const minutes = Math.floor((seconds - 3600 * hours) / 60);
   const customSeconds = seconds % 60;

   return `${getFormattedTime(hours)}:${getFormattedTime(
      minutes
   )}:${getFormattedTime(customSeconds)}`;
};

const getFormattedTime = (value: number): string => {
   return value < 10 ? `0${value}` : `${value}`;
};
