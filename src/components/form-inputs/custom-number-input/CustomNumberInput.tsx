import { Input, Text, useTheme } from '@rneui/themed';
import React, { Dispatch, SetStateAction } from 'react';
import { KeyboardTypeOptions } from 'react-native';
import { makeNumberInputStyles } from './styles';

interface Props {
   placeholder: string;
   secureTextEntry: boolean;
   keyboardType: KeyboardTypeOptions | undefined;
   rightLabelVal: string;
   value: string;
   setVal: Dispatch<SetStateAction<string>>;
   height: string;
   width: string;
}

export const CustomNumberInput = ({
   placeholder,
   secureTextEntry,
   keyboardType,
   rightLabelVal,
   value,
   setVal,
   height,
   width,
}: Props) => {
   const { theme } = useTheme();
   const heightInputStyles = makeNumberInputStyles(theme.colors);

   return (
      <Input
         placeholder={placeholder}
         containerStyle={[heightInputStyles.container, { height, width }]}
         secureTextEntry={secureTextEntry}
         defaultValue={value}
         onChangeText={(newInput) => setVal(newInput)}
         returnKeyType='done'
         keyboardType={keyboardType}
         inputContainerStyle={heightInputStyles.container}
         keyboardAppearance='dark'
         textAlign='center'
         rightIcon={<Text>{rightLabelVal}</Text>}
      />
   );
};
