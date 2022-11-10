import { Icon, Input, useTheme } from '@rneui/themed';
import { KeyboardTypeOptions } from 'react-native';
import { TextContentType } from '../../../../types/types';
import { inputStyles } from './styles';

interface Props {
   placeholder: string;
   secureTextEntry: boolean;
   keyboardType: KeyboardTypeOptions | undefined;
   iconName: string;
   iconType: string;
   textContentType: TextContentType;
   label: 'Email' | 'Password' | 'Username' | 'Confirm Password';
}

export const CustomInput = ({
   placeholder,
   secureTextEntry,
   keyboardType,
   textContentType,
   iconName,
   iconType,
   label,
}: Props) => {
   const { theme } = useTheme();

   return (
      <Input
         placeholder={placeholder}
         containerStyle={inputStyles.input}
         secureTextEntry={secureTextEntry}
         keyboardType={keyboardType}
         keyboardAppearance='dark'
         textContentType={textContentType}
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
