import { ThemeProvider } from '@rneui/themed';
import App from './App';
import { customTheme } from './style/customTheme';

export default function Main() {
   return (
      <ThemeProvider theme={customTheme}>
         <App />
      </ThemeProvider>
   );
}
