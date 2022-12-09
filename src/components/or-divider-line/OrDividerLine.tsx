import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../style/global.styles';
import { makeOrDividerLineStyles } from './styles';

export const OrDividerLine = () => {
   const { theme } = useTheme();
   const styles = makeOrDividerLineStyles(theme.colors);
   return (
      <View style={global.rowCenter}>
         <View style={styles.dividerLine} />
         <View>
            <Text style={styles.formText}>OR</Text>
         </View>
         <View style={styles.dividerLine} />
      </View>
   );
};
