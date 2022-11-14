import { Alert } from 'react-native';

interface AlertArgs {
   heading: string;
   body: string;
}

export const createAlert = ({ heading, body }: AlertArgs) => {
   Alert.alert(heading, body, [{ text: 'Okay' }], {
      cancelable: true,
   });
};
