import { Avatar, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { CardOptionType } from '../../../types/types';
import { global } from '../../style/global.styles';

export const SignupDescription = ({
   logo,
   title,
   description,
   type,
   id,
}: CardOptionType) => {
   const { theme } = useTheme();
   return (
      <View style={[global.cardRow, global.size]}>
         <Avatar
            rounded
            icon={{ name: logo, type: type }}
            containerStyle={{ backgroundColor: theme.colors.secondary }}
         />
         <View style={global.cardText}>
            <Text style={global.textBold}>{title}</Text>
            <Text>{description}</Text>
         </View>
      </View>
   );
};
