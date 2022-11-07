import { Input, Text, useTheme } from '@rneui/themed';
import { KeyboardTypeOptions } from 'react-native';
import { makeNumberInputStyles } from './styles';

interface Props {
   placeholder: string;
   secureTextEntry: boolean;
   keyboardType: KeyboardTypeOptions | undefined;
   rightLabelVal: string;
}

export const CustomNumberInput = ({
   placeholder,
   secureTextEntry,
   keyboardType,
   rightLabelVal,
}: Props) => {
   const { theme } = useTheme();
   const heightInputStyles = makeNumberInputStyles(theme.colors);
   return (
      <Input
         placeholder={placeholder}
         containerStyle={heightInputStyles.container}
         secureTextEntry={secureTextEntry}
         defaultValue={'0'}
         returnKeyType='done'
         keyboardType={keyboardType}
         inputContainerStyle={heightInputStyles.container}
         keyboardAppearance='dark'
         textAlign='center'
         rightIcon={<Text>{rightLabelVal}</Text>}
      />
   );
};
