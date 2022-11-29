const url = 'http://192.168.1.8:8080/api';

export const foodLog = {
   get: async (date: string) => {
      let currentUrl = `${url}/foodLog/day`;
      currentUrl +=
         '?' +
         new URLSearchParams({
            date,
         });
      const fetchOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response;
   },
};
