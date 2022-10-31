import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text } from '@rneui/themed';
import { View } from 'react-native';
import { WelcomeStackParamList } from '../../../../types/types';
import { CustomLinearProgress } from '../../../components/linear-progress/CustomLinearProgress';
import { SignupDescription } from '../../../components/signup-description/SignupDescription';
import { global } from '../../../style/global.styles';

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

export const Signup = ({ navigation }: Props) => {
   return (
      <View style={global.screenEnd}>
         <CustomLinearProgress index={0} progress={0} />
         <Text h4 style={global.textCenter}>
            First, let's calculate your daily calorie and macronutrient needs.
         </Text>
         <Text style={global.textCenter}>
            To get the most accurate calculations, we'll first need to collect
            some information from you.
         </Text>
         {cards.map((card) => (
            <SignupDescription
               key={card.id}
               logo={card.logo}
               title={card.title}
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
