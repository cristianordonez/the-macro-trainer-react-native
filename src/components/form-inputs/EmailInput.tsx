import { AntDesign } from '@expo/vector-icons';
import { Input, useTheme } from '@rneui/themed';
import { inputStyles } from './styles';

export const EmailInput = () => {
   const { theme } = useTheme();
   return (
      <Input
         placeholder='email@address.com'
         containerStyle={inputStyles.input}
         inputContainerStyle={inputStyles.input}
         leftIcon={
            <AntDesign name='mail' size={20} color={theme.colors.black} />
         }
         label='Email'
      />
   );
};
