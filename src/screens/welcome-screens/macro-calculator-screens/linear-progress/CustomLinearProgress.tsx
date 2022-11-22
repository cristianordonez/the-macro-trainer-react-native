import { LinearProgress, Text } from '@rneui/themed';
import { View } from 'react-native';
import { global } from '../../../../style/global.styles';
import { customProgressStyles } from './styles';

interface Props {
   index: number;
   progress: number;
}
export const CustomLinearProgress = ({ index, progress }: Props) => {
   return (
      <>
         <View style={[customProgressStyles.container, global.size]}>
            <Text style={global.textCenter}>{index}/6</Text>
            <LinearProgress
               value={progress}
               animation={false}
               variant='determinate'
               color='primary'
               style={customProgressStyles.progress}
            />
         </View>
      </>
   );
};
