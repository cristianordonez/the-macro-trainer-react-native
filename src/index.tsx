import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { customTheme } from './style/customTheme';

export default function Main() {
   return (
      <Provider store={store}>
         <ThemeProvider theme={customTheme}>
            <App />
         </ThemeProvider>
      </Provider>
   );
}
