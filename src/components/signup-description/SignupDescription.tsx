import { Icon, Text } from '@rneui/themed';
import { View } from 'react-native';

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
   return (
      <View>
         <Icon name={logo} type={type} />
         <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
         </View>
      </View>
   );
};
