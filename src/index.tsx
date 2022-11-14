import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux';
import App from './screens/App';
import { store } from './store';
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
