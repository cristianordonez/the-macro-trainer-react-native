import { Avatar, Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { descriptionStyles } from './styles';

interface Props {
   logo: string;
   title: string;
   description: string;
   type: string;
}
export const SignupDescription = ({
   logo,
   title,
   description,
   type,
}: Props) => {
   const { theme } = useTheme();
   return (
      <View style={[descriptionStyles.container, global.size]}>
         <Avatar
            rounded
            icon={{ name: logo, type: type }}
            containerStyle={{ backgroundColor: theme.colors.secondary }}
         />
         <View style={descriptionStyles.textContainer}>
            <Text style={descriptionStyles.textStyle}>{title}</Text>
            <Text>{description}</Text>
         </View>
      </View>
   );
};
