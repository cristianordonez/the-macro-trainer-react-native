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
   title: string;
};
export { WelcomeStackParamList, CardOptionType, AgeItemType };
