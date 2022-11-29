const url = 'http://192.168.1.8:8080/api';

export const userMetrics = {
   get: async () => {
      let currentUrl = `${url}/metrics`;
      const fetchOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response;
   },
};
