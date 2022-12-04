import { Icon, Input, useTheme } from '@rneui/themed';
import { Control, useController } from 'react-hook-form';
import { KeyboardTypeOptions } from 'react-native';
import {
   LoginForm,
   SignupForm,
   TextContentType,
} from '../../../../types/types';
import { inputStyles } from './styles';

interface Props {
   secureTextEntry: boolean;
   keyboardType: KeyboardTypeOptions | undefined;
   iconName: string;
   iconType: string;
   textContentType: TextContentType;
   label: 'Email' | 'Password' | 'Username' | 'Confirm Password';
   control: Control<SignupForm | LoginForm, unknown>;
   name: 'email' | 'password' | 'confirmPassword';
}

export const CustomInput = ({
   secureTextEntry,
   keyboardType,
   textContentType,
   iconName,
   iconType,
   label,
   control,
   name,
}: Props) => {
   const { theme } = useTheme();

   const {
      field,
      fieldState: { invalid, isTouched, isDirty },
      formState: { touchedFields, dirtyFields },
   } = useController({
      name,
      control,
      rules: { required: true },
   });

   return (
      <Input
         containerStyle={inputStyles.input}
         onBlur={field.onBlur}
         onChangeText={field.onChange}
         value={field.value}
         placeholder={label}
         secureTextEntry={secureTextEntry}
         keyboardAppearance='dark'
         keyboardType={keyboardType}
         inputContainerStyle={inputStyles.input}
         textContentType={textContentType}
         returnKeyType='done'
         leftIcon={
            <Icon
               name={iconName}
               type={iconType}
               size={20}
               color={theme.colors.black}
            />
         }
      />
   );
};
