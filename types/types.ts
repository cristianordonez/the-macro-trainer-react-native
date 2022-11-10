import { ViewToken } from 'react-native';

type UserState = {
   goal: 'weight_loss' | 'maintain' | 'weight_gain' | '';
   activityLevel: 'sedentary' | 'moderatelyActive' | 'active' | '';
   gender: 'male' | 'female' | 'non_binary' | '';
   age: number;
   numFt: number;
   numInch: number;
   numCm: number;
   heightMetric: 'ft' | 'cm';
   weight: number;
   weightMetric: 'lb' | 'kg';
};

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
   value: UserState['goal'] | UserState['activityLevel'] | UserState['gender'];
};

type AgeItemType = {
   index: string;
   value: string;
};

type ViewableItems = {
   viewableItems: ViewToken[];
};

type RenderItemType = {
   item: AgeItemType;
};

type TextContentType =
   | 'none'
   | 'URL'
   | 'addressCity'
   | 'addressCityAndState'
   | 'addressState'
   | 'countryName'
   | 'creditCardNumber'
   | 'emailAddress'
   | 'familyName'
   | 'fullStreetAddress'
   | 'givenName'
   | 'jobTitle'
   | 'location'
   | 'middleName'
   | 'name'
   | 'namePrefix'
   | 'nameSuffix'
   | 'nickname'
   | 'organizationName'
   | 'postalCode'
   | 'streetAddressLine1'
   | 'streetAddressLine2'
   | 'sublocality'
   | 'telephoneNumber'
   | 'username'
   | 'password'
   | 'newPassword'
   | 'oneTimeCode';

export {
   WelcomeStackParamList,
   CardOptionType,
   AgeItemType,
   ViewableItems,
   RenderItemType,
   TextContentType,
};
