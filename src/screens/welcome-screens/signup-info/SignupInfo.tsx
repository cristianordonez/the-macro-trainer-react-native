import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { CustomText } from '../../../components/custom-text/CustomText';
import { global } from '../../../style/global.styles';
import { CustomLinearProgress } from '../macro-calculator-screens/linear-progress/CustomLinearProgress';
import { SignupDescription } from './signup-description/SignupDescription';

type Props = NativeStackScreenProps<WelcomeStackParamList, 'Signup'>;

const cards = [
   {
      id: 1,
      logo: 'target',
      type: 'feather',
      title: 'Your goals',
      description: 'What nutrition goals do you want to reach',
   },
   {
      id: 2,
      logo: 'running',
      type: 'font-awesome-5',
      title: 'Your activity level',
      description: 'How often/how intensely do you exercise',
   },
   {
      id: 3,
      logo: 'ruler',
      type: 'font-awesome-5',
      title: 'Your measurements',
      description: 'What is your height, weight, age and gender',
   },
];

export const SignupInfo = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={0} progress={0} />
         <CustomText
            h2={true}
            textAlign='center'
            humanText={`First, let's calculate your daily calorie and macronutrient needs.`}
         />
         <CustomText
            h2={true}
            textAlign='center'
            humanText="To get the most accurate calculations, we'll first need to collect
            some information from you."
         />
         {cards.map((card) => (
            <SignupDescription
               key={card.id}
               logo={card.logo}
               title={card.title}
               id={card.id}
               description={card.description}
               type={card.type}
            />
         ))}
         <Button
            onPress={() => navigation.navigate('Goals')}
            title={`Let's begin!`}
            size='lg'
         />
      </View>
   );
};
