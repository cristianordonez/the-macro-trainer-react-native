import { Icon, useTheme } from '@rneui/themed';
import { Pressable, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import {
   addToAmrapGoal,
   selectCurrentAmrapGoal,
   selectModalStatus,
   subtractFromAmrapGoal,
   toggleShowModal,
} from '../../redux/reducers/activeWorkoutReducer';
import { createFlexGap } from '../../utils/createFlexGap';
import { CustomAlertWithInputContainer } from '../custom-alert-with-input-container/CustomAlertWithInputContainer';
import { CustomText } from '../custom-text/CustomText';

export const CustomAlertAmrap = () => {
   const { theme } = useTheme();
   const showModal = useAppSelector(selectModalStatus);
   const { height, width } = createFlexGap(2, 5);
   const dispatch = useAppDispatch();
   let amrapGoal = useAppSelector((state) => selectCurrentAmrapGoal(state));

   const handlePress = () => {
      console.log('here in handlepress');
      dispatch(subtractFromAmrapGoal());
      // dispatch(toggleShowModal(false));
   };

   return (
      <CustomAlertWithInputContainer
         modalHeight={height}
         modalWidth={width}
         showModal={showModal}
         toggleShowModal={toggleShowModal}
      >
         <View style={{ flex: 1 }}>
            <CustomText humanText='AMRAP' />
            <CustomText humanText='Reps Completed:' />
         </View>
         <View
            style={{
               flex: 1,
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-between',
            }}
         >
            <Icon
               name='minus'
               type='feather'
               size={height / 5}
               color={theme.colors.divider}
               onPress={() => dispatch(subtractFromAmrapGoal())}
            />

            <CustomText
               fontFamily='Lato_Bold'
               humanText={`${amrapGoal}`}
               color={'primary'}
               h0={true}
            />

            <Icon
               name='plus'
               type='feather'
               size={height / 5}
               color={theme.colors.divider}
               onPress={() => dispatch(addToAmrapGoal())}
            />
         </View>
         <View
            style={{
               flex: 1,
               flexDirection: 'row',
               alignItems: 'center',
               justifyContent: 'space-evenly',
            }}
         >
            <Pressable
               children={({ pressed }) => (
                  <CustomText
                     humanText='RESET'
                     color={pressed ? 'button' : 'primary'}
                  />
               )}
            />
            <Pressable
               onPress={() => dispatch(toggleShowModal(false))}
               children={({ pressed }) => (
                  <CustomText
                     humanText='COMPLETE'
                     color={pressed ? 'button' : 'primary'}
                  />
               )}
            />
         </View>
      </CustomAlertWithInputContainer>
   );
};
