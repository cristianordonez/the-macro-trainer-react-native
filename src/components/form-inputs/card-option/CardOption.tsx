import { Avatar, Text, useTheme } from '@rneui/themed';
import { Dispatch, SetStateAction } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { CardOptionType } from '../../../../types/types';
import { global } from '../../../style/global.styles';
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
               icon={{ name: logo, type: type }}
               containerStyle={{ backgroundColor: theme.colors.secondary }}
            />
            <View style={global.cardTextContainer}>
               <View style={global.size}>
                  <Text style={global.textBold}>{title}</Text>
                  {description ? <Text>{description}</Text> : null}
               </View>
            </View>
         </View>
      </TouchableHighlight>
   );
};
