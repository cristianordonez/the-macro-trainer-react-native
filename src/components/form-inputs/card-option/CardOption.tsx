import { Avatar, useTheme } from '@rneui/themed';
import { Dispatch, SetStateAction } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { CardOptionType } from '../../../../types/types';
import { global } from '../../../style/global.styles';
import { CustomText } from '../../custom-text/CustomText';
import { makeCardStyles } from './makeCardStyles';
interface Props extends CardOptionType {
   activeVal: CardOptionType['value'];
   setActiveVal: Dispatch<SetStateAction<CardOptionType['value']>>;
}

export const CardOption = ({
   logo,
   type,
   title,
   description,
   value,
   activeVal,
   setActiveVal,
}: Props) => {
   const { theme } = useTheme();
   const cardStyles = makeCardStyles(theme.colors);

   return (
      <TouchableHighlight
         style={activeVal === value ? cardStyles.active : cardStyles.inactive}
         onPress={() => setActiveVal(value)}
      >
         <View style={[cardStyles.container]}>
            <Avatar
               rounded
               icon={{ name: logo, type: type, color: theme.colors.white }}
               containerStyle={{ backgroundColor: theme.colors.secondary }}
            />
            <View style={global.cardTextContainer}>
               <View style={global.size}>
                  <CustomText
                     h2={true}
                     fontFamily='Lato_Bold'
                     textAlign='left'
                     humanText={title}
                  />
                  {description ? (
                     <CustomText
                        textAlign='left'
                        humanText={description}
                        h3={true}
                     />
                  ) : null}
               </View>
            </View>
         </View>
      </TouchableHighlight>
   );
};
