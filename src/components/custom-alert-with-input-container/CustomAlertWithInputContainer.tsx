import { AnyAction } from '@reduxjs/toolkit';
import { useTheme } from '@rneui/themed';
import { Alert, Modal, View } from 'react-native';
import { useAppDispatch } from '../../redux/hooks/reduxHooks';
import { global } from '../../style/global.styles';

interface Props {
   showModal: boolean;
   toggleShowModal: (show: boolean) => AnyAction;
   children: React.ReactNode;
   modalHeight: number;
   modalWidth: number;
}
export const CustomAlertWithInputContainer = ({
   showModal,
   toggleShowModal,
   children,
   modalHeight,
   modalWidth,
}: Props) => {
   const { theme } = useTheme();
   const dispatch = useAppDispatch();

   return (
      <Modal
         animationType='slide'
         transparent={true}
         visible={showModal}
         onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            dispatch(toggleShowModal(false));
         }}
      >
         <View
            style={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <View
               style={[
                  {
                     height: modalHeight + 15,
                     width: modalWidth + 15,
                     backgroundColor: theme.colors.background,
                     padding: 10,
                  },
                  global.containerBorder,
               ]}
            >
               {children}
            </View>
         </View>
      </Modal>
   );
};
