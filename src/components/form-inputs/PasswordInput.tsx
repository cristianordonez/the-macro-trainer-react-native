import { AntDesign } from '@expo/vector-icons';
import { Input, useTheme } from '@rneui/themed';
import { inputStyles } from './styles';

export const PasswordInput = () => {
   const { theme } = useTheme();
   return (
      <Input
         placeholder='Password'
         containerStyle={inputStyles.input}
         inputContainerStyle={inputStyles.input}
         leftIcon={
            <AntDesign name='key' size={20} color={theme.colors.black} />
         }
         label='Password'
      />
   );
};
