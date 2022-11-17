import { Avatar, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { MainScreenCard } from '../../../../../types/types';
import { global } from '../../../../style/global.styles';

export const SignupDescription = ({
   logo,
   title,
   description,
   type,
   id,
}: MainScreenCard) => {
   const { theme } = useTheme();
   return (
      <View style={[global.cardRow, global.size]}>
         <Avatar
            rounded
            icon={{ name: logo, type: type, color: theme.colors.white }}
            containerStyle={{ backgroundColor: theme.colors.secondary }}
         />
         <View style={global.cardTextContainer}>
            <Text style={[global.textBold]}>{title}</Text>
            <Text>{description}</Text>
         </View>
      </View>
   );
};
