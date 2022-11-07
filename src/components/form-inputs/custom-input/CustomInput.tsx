import { Icon, Input, useTheme } from '@rneui/themed';
import { KeyboardTypeOptions } from 'react-native';
import { inputStyles } from './styles';

interface Props {
   placeholder: string;
   secureTextEntry: boolean;
   keyboardType: KeyboardTypeOptions | undefined;
   iconName: string;
   iconType: string;
   label: 'Email' | 'Password';
}

export const CustomInput = ({
   placeholder,
   secureTextEntry,
   keyboardType,
   iconName,
   iconType,
   label,
}: Props) => {
   const { theme } = useTheme();

   const textContentType = label === 'Email' ? 'emailAddress' : 'password';
   return (
      <Input
         placeholder={placeholder}
         containerStyle={inputStyles.input}
         textContentType={textContentType}
         secureTextEntry={secureTextEntry}
         keyboardType={keyboardType}
         keyboardAppearance='dark'
         returnKeyType='done'
         inputContainerStyle={inputStyles.input}
         leftIcon={
            <Icon
               name={iconName}
               type={iconType}
               size={20}
               color={theme.colors.black}
            />
         }
         label={label}
      />
   );
};
