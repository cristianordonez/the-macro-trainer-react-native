import { Input, useTheme } from '@rneui/themed';
import React, { Dispatch, SetStateAction } from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { CustomText } from '../../custom-text/CustomText';
import { makeNumberInputStyles } from './styles';

interface Props {
   placeholder: string;
   secureTextEntry: boolean;
   keyboardType: KeyboardTypeOptions | undefined;
   rightLabelVal: string;
   value: string;
   setVal: Dispatch<SetStateAction<string>>;
}

export const CustomNumberInput = ({
   placeholder,
   secureTextEntry,
   keyboardType,
   rightLabelVal,
   value,
   setVal,
}: Props) => {
   const { theme } = useTheme();
   const heightInputStyles = makeNumberInputStyles(theme.colors);

   return (
      <Input
         placeholder={placeholder}
         containerStyle={[heightInputStyles.container]}
         secureTextEntry={secureTextEntry}
         defaultValue={value}
         onChangeText={(newInput) => setVal(newInput)}
         returnKeyType='done'
         keyboardType={keyboardType}
         inputContainerStyle={heightInputStyles.container}
         inputStyle={[{ paddingLeft: '20%' }]}
         textAlign={'left'}
         keyboardAppearance='dark'
         rightIcon={
            <CustomText h3={true} textAlign='left' humanText={rightLabelVal} />
         }
      />
   );
};
