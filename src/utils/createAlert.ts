import { Alert, AlertButton } from 'react-native';

interface AlertArgs {
   heading: string;
   message: string;
   btnOptions: AlertButton[];
}

export const createAlert = ({ heading, message, btnOptions }: AlertArgs) => {
   Alert.alert(heading, message, btnOptions, {
      cancelable: true,
   });
};
