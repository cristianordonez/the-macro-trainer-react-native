import { Avatar, Text, useTheme } from '@rneui/themed';
import { Dispatch, SetStateAction } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { CardOptionType } from '../../../../types/types';
import { global } from '../../../style/global.styles';
import { makeCardStyles } from './makeCardStyles';

interface Props extends CardOptionType {
   activeId: number | null;
   setActiveId: Dispatch<SetStateAction<number | null>>;
}

export const CardOption = ({
   logo,
   type,
   title,
   description,
   id,
   activeId,
   setActiveId,
}: Props) => {
   const { theme } = useTheme();
   const cardStyles = makeCardStyles(theme.colors);
   return (
      <TouchableHighlight
         style={activeId === id ? cardStyles.active : cardStyles.inactive}
         onPress={() => setActiveId(id)}
      >
         <View style={[cardStyles.container]}>
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
      </TouchableHighlight>
   );
};
