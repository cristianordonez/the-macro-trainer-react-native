import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Program, SelectProgramsStack } from '../../../../../../types/types';
import { CustomIconCircle } from '../../../../../components/custom-icon-circle/CustomIconCircle';
import { CustomScreenContainerItem } from '../../../../../components/custom-screen-container-item/CustomScreenContainerItem';
import { useAppSelector } from '../../../../../redux/hooks/reduxHooks';
import { selectAllProgramCategories } from '../../../../../redux/reducers/weightLiftingReducer';
import { global } from '../../../../../style/global.styles';

type Props = NativeStackScreenProps<SelectProgramsStack, 'Categories'>;

export const Categories = ({ navigation }: Props) => {
   const programCategories = useAppSelector(selectAllProgramCategories);
   const categories = ['All', ...programCategories];

   const handleNavigate = (index: number) => {
      const currentCategory = categories[index] as Program['category'];
      navigation.navigate('Programs', {
         category: currentCategory,
      });
   };

   return (
      <View style={global.screenEven}>
         <View style={global.customScreenContainer}>
            {categories.map((category, index) => (
               <CustomScreenContainerItem
                  itemsPerRow={2}
                  gap={10}
                  index={index}
                  key={category}
                  handlePress={handleNavigate}
               >
                  <CustomIconCircle title={category} />
               </CustomScreenContainerItem>
            ))}
         </View>
      </View>
   );
};
