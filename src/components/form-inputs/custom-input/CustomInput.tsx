import { Icon, Input, useTheme } from '@rneui/themed';
import { Control, Controller } from 'react-hook-form';
import { KeyboardTypeOptions } from 'react-native';
import { SignupForm, TextContentType } from '../../../../types/types';
import { inputStyles } from './styles';

interface Props {
   secureTextEntry: boolean;
   keyboardType: KeyboardTypeOptions | undefined;
   iconName: string;
   iconType: string;
   textContentType: TextContentType;
   label: 'Email' | 'Password' | 'Username' | 'Confirm Password';
   control: Control<SignupForm, unknown>;
   name: 'email' | 'password' | 'username' | 'confirmPassword';
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

   return (
      <Controller
         control={control}
         rules={{
            required: true,
         }}
         render={({ field: { onChange, onBlur, value } }) => (
            <Input
               containerStyle={inputStyles.input}
               onBlur={onBlur}
               onChangeText={onChange}
               value={value}
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
         )}
         name={name}
      />
   );
};
