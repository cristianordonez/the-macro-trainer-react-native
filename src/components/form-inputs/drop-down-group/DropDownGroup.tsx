import React, { Dispatch, SetStateAction, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { dropDownGroupStyles } from './styles';

type DropDownItem = {
   label: string;
   value: number;
};

interface Props {
   openFt: boolean;
   setOpenFt: Dispatch<SetStateAction<boolean>>;
   openInch: boolean;
   setOpenInch: Dispatch<SetStateAction<boolean>>;
   ftItems: [] | DropDownItem[];
   setFtItems: Dispatch<SetStateAction<[] | DropDownItem[]>>;
   inchItems: [] | DropDownItem[];
   setInchItems: Dispatch<SetStateAction<[] | DropDownItem[]>>;
   onFtOpen: () => void;
   onInchOpen: () => void;
   currentFtValue: null | number;
   setCurrentFtValue: Dispatch<SetStateAction<null | number>>;
   currentInchValue: null | number;
   setCurrentInchValue: Dispatch<SetStateAction<null | number>>;
}
export const DropDownGroup = ({
   openFt,
   setOpenFt,
   openInch,
   setOpenInch,
   ftItems,
   setFtItems,
   inchItems,
   setInchItems,
   onFtOpen,
   onInchOpen,
   currentFtValue,
   setCurrentFtValue,
   currentInchValue,
   setCurrentInchValue,
}: Props) => {
   useEffect(() => {
      let feetItems = [] as unknown as DropDownItem[];
      let inchItems = [] as unknown as DropDownItem[];
      for (let i = 3; i < 8; i++) {
         feetItems.push({ label: `${i} ft`, value: i });
      }
      for (let i = 0; i < 12; i++) {
         inchItems.push({
            label: `${i} in`,
            value: i,
         });
      }
      setFtItems(feetItems);
      setInchItems(inchItems);
   }, []);

   return (
      <>
         <DropDownPicker
            open={openFt}
            theme={'DARK'}
            dropDownContainerStyle={{ height: '100%', width: '100%' }}
            dropDownDirection='AUTO'
            onOpen={onFtOpen}
            placeholder='ft'
            textStyle={dropDownGroupStyles.text}
            value={currentFtValue}
            items={ftItems}
            setOpen={setOpenFt}
            containerStyle={dropDownGroupStyles.pickerContainer}
            setValue={setCurrentFtValue}
            setItems={setFtItems}
         />
         <DropDownPicker
            open={openInch}
            placeholder='in'
            dropDownContainerStyle={{ height: '100%', width: '100%' }}
            textStyle={dropDownGroupStyles.text}
            onOpen={onInchOpen}
            theme={'DARK'}
            value={currentInchValue}
            items={inchItems}
            containerStyle={dropDownGroupStyles.pickerContainer}
            setOpen={setOpenInch}
            setValue={setCurrentInchValue}
            setItems={setInchItems}
         />
      </>
   );
};
