import { AntDesign } from '@expo/vector-icons';
import { Input, useTheme } from '@rneui/themed';

export const EmailInput = () => {
   const { theme } = useTheme();
   return (
      <Input
         placeholder='Enter email'
         leftIcon={
            <AntDesign name='user' size={20} color={theme.colors.black} />
         }
         label='Email'
      />
   );
};
