import { AntDesign } from '@expo/vector-icons';
import { Input, useTheme } from '@rneui/themed';

export const PasswordInput = () => {
   const { theme } = useTheme();
   return (
      <Input
         placeholder='Enter password'
         leftIcon={
            <AntDesign name='key' size={20} color={theme.colors.black} />
         }
         label='Password'
      />
   );
};
