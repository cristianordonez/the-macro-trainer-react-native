import { Image } from '@rneui/themed';
import { loadingImageStyles } from './styles';

export const LoadingImage = () => {
   return (
      <Image
         style={loadingImageStyles.image}
         source={require('./dietitian.png')}
      />
   );
};
