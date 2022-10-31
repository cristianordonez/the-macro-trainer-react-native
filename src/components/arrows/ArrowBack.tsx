import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { arrowStyles } from './styles';

export const ArrowBack = ({ navigation }) => {
   const { theme } = useTheme();
   return (
      <View style={arrowStyles.arrowBack}>
         <SimpleLineIcons
            style={{ color: theme.colors.black }}
            onPress={() => navigation.goBack()}
            name='arrow-left'
            size={20}
         />
      </View>
   );
};
