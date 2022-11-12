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
   currentFtVal: null | number;
   setCurrentFtVal: Dispatch<SetStateAction<null | number>>;
   currentInchVal: null | number;
   setCurrentInchVal: Dispatch<SetStateAction<null | number>>;
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
   currentFtVal,
   setCurrentFtVal,
   currentInchVal,
   setCurrentInchVal,
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
            value={currentFtVal}
            items={ftItems}
            setOpen={setOpenFt}
            containerStyle={dropDownGroupStyles.pickerContainer}
            setValue={setCurrentFtVal}
            setItems={setFtItems}
         />
         <DropDownPicker
            open={openInch}
            placeholder='in'
            dropDownContainerStyle={{ height: '100%', width: '100%' }}
            textStyle={dropDownGroupStyles.text}
            onOpen={onInchOpen}
            theme={'DARK'}
            value={currentInchVal}
            items={inchItems}
            containerStyle={dropDownGroupStyles.pickerContainer}
            setOpen={setOpenInch}
            setValue={setCurrentInchVal}
            setItems={setInchItems}
         />
      </>
   );
};
