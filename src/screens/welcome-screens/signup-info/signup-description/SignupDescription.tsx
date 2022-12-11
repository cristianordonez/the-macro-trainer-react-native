import { Avatar, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { MainScreenCard } from '../../../../../types/types';
import { CustomText } from '../../../../components/custom-text/CustomText';
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
            <CustomText
               textAlign='left'
               h2={true}
               fontFamily='Lato_Bold'
               humanText={title}
            />
            <CustomText
               h3={true}
               textAlign='left'
               humanText={description || ''}
            />
         </View>
      </View>
   );
};
