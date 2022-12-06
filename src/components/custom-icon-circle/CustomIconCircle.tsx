import { Text, useTheme } from '@rneui/themed';

import { View } from 'react-native';
import BeginnerDumbbell from './custom-icon-components/BeginnerDumbbell';
import IntermediateDumbbell from './custom-icon-components/IntermediateDumbbell';
import NSuns from './custom-icon-components/NSunsCategory';

interface Props {
   title: string;
}

type Icons = {
   All: React.ReactNode;
   Beginner: React.ReactNode;
   Intermediate: React.ReactNode;
   'nSuns 531 Variants': React.ReactNode;
};

const IconsMap = {
   All: <NSuns />,
   Beginner: <BeginnerDumbbell />,
   Intermediate: <IntermediateDumbbell />,
   'nSuns 531 Variants': <NSuns />,
};

export const CustomIconCircle = ({ title }: Props) => {
   const { theme } = useTheme();
   return (
      <>
         <View
            style={{
               height: 80,
               width: 80,
               backgroundColor: theme.colors.background,
               borderRadius: 50,
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            {IconsMap[title as keyof Icons]}
         </View>
         <Text style={{ fontSize: 14 }}>{title}</Text>
      </>
   );
};
