import { Icon, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { Pressable, View } from 'react-native';
import { CustomModal } from '../../../components/custom-modal/CustomModal';
import {
   useAppDispatch,
   useAppSelector,
} from '../../../redux/hooks/reduxHooks';
import { selectModal, toggleModal } from '../../../redux/reducers/modalReducer';
import { global } from '../../../style/global.styles';
import { makeAddBtnModalStyles } from './makeAddBtnModalStyles';

export function AddBtnModal() {
   const { theme } = useTheme();
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectModal);
   const addBtnModalStyles = makeAddBtnModalStyles(theme.colors);

   const addModalOptions = [
      { title: 'Weight', iconName: 'weight', iconType: 'font-awesome-5' },
      { title: 'Food', iconName: 'food-apple', iconType: 'material-community' },
      { title: 'Water', iconName: 'cup-water', iconType: 'material-community' },
      { title: 'Exercise', iconName: 'running', iconType: 'font-awesome-5' },
   ];

   return (
      <>
         <View style={addBtnModalStyles.container}>
            <Icon
               name='add-circle'
               size={60}
               color={theme.colors.primary}
               onPress={() => dispatch(toggleModal(!state.modalVisible))}
            />
            <CustomModal
               children={
                  <View style={[addBtnModalStyles.modalContents]}>
                     <View style={addBtnModalStyles.headerRow}>
                        <Text style={global.textBold}>Food and Exercise</Text>
                        <Icon
                           style={addBtnModalStyles.iconStyle}
                           name='x'
                           type='feather'
                           size={25}
                           color={theme.colors.black}
                           onPress={() =>
                              dispatch(toggleModal(!state.modalVisible))
                           }
                        />
                     </View>
                     {addModalOptions.map((option) => (
                        <Pressable
                           style={({ pressed }) => [
                              pressed
                                 ? addBtnModalStyles.modalRowPressed
                                 : addBtnModalStyles.modalRowNotPressed,
                           ]}
                        >
                           <View
                              style={addBtnModalStyles.modalRow}
                              key={option.title}
                           >
                              <Icon
                                 style={addBtnModalStyles.iconStyle}
                                 name={option.iconName}
                                 type={option.iconType}
                                 size={20}
                                 color={theme.colors.black}
                              />
                              <Text>{option.title}</Text>
                           </View>
                        </Pressable>
                     ))}
                  </View>
               }
            />
         </View>
      </>
   );
}
