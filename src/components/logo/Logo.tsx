import { Image } from 'react-native';
import { logoStyles } from './styles';

export const Logo = () => {
   return <Image style={logoStyles.logo} source={require('./logo.png')} />;
};
