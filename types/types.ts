import { ViewToken } from 'react-native';

type WelcomeStackParamList = {
   Main: undefined;
   Login: undefined;
   Signup: undefined;
   Goals: undefined;
   ActivityLevel: undefined;
   Gender: undefined;
   Age: undefined;
   Height: undefined;
   Weight: undefined;
   CompleteRegistration: undefined;
};

type CardOptionType = {
   logo: string;
   type: string;
   description: string | null;
   title: string;
   id: number;
};

type AgeItemType = {
   id: string;
   value: string;
};

type ViewableItems = {
   viewableItems: ViewToken[];
};

type RenderItemType = {
   item: AgeItemType;
};

export {
   WelcomeStackParamList,
   CardOptionType,
   AgeItemType,
   ViewableItems,
   RenderItemType,
};
