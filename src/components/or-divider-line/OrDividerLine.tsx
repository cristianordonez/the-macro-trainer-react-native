import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { CustomText } from '../custom-text/CustomText';
import { makeOrDividerLineStyles } from './styles';

export const OrDividerLine = () => {
   const { theme } = useTheme();
   const styles = makeOrDividerLineStyles(theme.colors);
   return (
      <View style={global.rowCenter}>
         <View style={styles.dividerLine} />
         <View style={{ paddingHorizontal: 10 }}>
            <CustomText h3={true} humanText={'OR'} fontFamily='Lato_Bold' />
         </View>
         <View style={styles.dividerLine} />
      </View>
   );
};
