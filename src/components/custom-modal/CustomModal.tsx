import { useTheme } from '@rneui/themed';
import { Modal, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/reduxHooks';
import { selectModal, toggleModal } from '../../redux/reducers/modalReducer';
import { makeCustomModalStyles } from './makeCustomModalStyles';

interface Props {
   children: React.ReactNode;
}
export const CustomModal = ({ children }: Props) => {
   const { theme } = useTheme();
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectModal);

   const modalStyles = makeCustomModalStyles(theme.colors);
   return (
      <Modal
         visible={state.modalVisible}
         transparent={true}
         animated
         presentationStyle='overFullScreen'
         statusBarTranslucent={false}
         animationType='slide'
         onRequestClose={() => {
            dispatch(toggleModal(!state.modalVisible));
         }}
      >
         <View style={modalStyles.overlay}>{children}</View>
      </Modal>
   );
};
