import { Image } from '@rneui/themed';
import { View } from 'react-native';
import { loadingImageStyles } from './styles';

export const LoadingImage = () => {
   return (
      <View style={loadingImageStyles.imageContainer}>
         <Image
            style={loadingImageStyles.image}
            source={require('./dietitian.png')}
         />
      </View>
   );
};
