import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import App from './screens/App';
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
