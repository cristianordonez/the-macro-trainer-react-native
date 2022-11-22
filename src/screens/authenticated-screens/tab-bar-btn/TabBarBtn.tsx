import { Icon, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { Modal, Pressable, View } from 'react-native';
import { makeTabBarBtnStyles } from './makeTabBarBtnStyles';

export function TabBarBtn() {
   const { theme } = useTheme();
   const [modalVisible, setModalVisible] = useState<boolean>(false);
   const tabBarBtnStyles = makeTabBarBtnStyles(theme.colors);

   return (
      <>
         <View style={tabBarBtnStyles.container}>
            <Icon
               name='add-circle'
               size={60}
               color={theme.colors.primary}
               onPress={() => setModalVisible(!modalVisible)}
            />
         </View>
         <Modal
            visible={modalVisible}
            transparent={true}
            presentationStyle='overFullScreen'
            statusBarTranslucent={false}
         >
            <View style={tabBarBtnStyles.modalContainer}>
               <View style={tabBarBtnStyles.modalContents}>
                  <Pressable
                     style={[tabBarBtnStyles.button]}
                     onPress={() => setModalVisible(!modalVisible)}
                  >
                     <Text style={tabBarBtnStyles.textStyle}>Hide Modal</Text>
                  </Pressable>
               </View>
            </View>
         </Modal>
      </>
   );
}
