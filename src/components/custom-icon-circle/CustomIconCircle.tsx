import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { CustomText } from '../custom-text/CustomText';
import AllDumbbell from './custom-icon-components/AllDumbbell';
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
   'Wendler 531 Variants': React.ReactNode;
   'StrongLifts 5x5': React.ReactNode;
   'nSuns 531 LP 4 day variation': React.ReactNode;
};

const IconsMap = {
   All: <AllDumbbell />,
   Beginner: <BeginnerDumbbell />,
   Intermediate: <IntermediateDumbbell />,
   'Wendler 531 Variants': <NSuns />,
   'nSuns 531 Variants': <NSuns />,
   'StrongLifts 5x5': <BeginnerDumbbell />,
   'nSuns 531 LP 4 day variation': <NSuns />,
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
         <CustomText humanText={title} h4={true} />
      </>
   );
};
