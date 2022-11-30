import {
   GlobalMetricsState,
   Goals,
   LoginForm,
   LoginFormData,
   SignupForm,
} from '../../../types/types';

const url = 'http://192.168.1.8:8080/api';

export const apiHandlers = {
   get: async (urlPath: string) => {
      const currentUrl = `${url}${urlPath}`;
      const fetchOptions = {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response;
   },
   post: async (
      urlPath: string,
      body: LoginForm | SignupForm | LoginFormData | GlobalMetricsState | Goals
   ) => {
      const currentUrl = `${url}${urlPath}`;
      const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(body),
      };
      const response = await fetch(currentUrl, requestOptions);
      return response;
   },
   logout: async () => {
      const currentUrl = `${url}/logout`;
      const fetchOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(currentUrl, fetchOptions);
      return response.status;
   },
};
