import { ViewToken } from 'react-native';

type UserState = {
   goal: 'weight_loss' | 'maintain' | 'weight_gain' | '';
   activityLevel: 1 | 1.2 | 1.5;
   gender: 'male' | 'female' | 'non_binary' | '';
   age: number;
   numFt: number;
   numInch: number;
   numCm: number;
   heightMetric: 'ft' | 'cm';
   weight: number;
   weightMetric: 'lb' | 'kg';
};

type GlobalUserState = {
   goal: 'weight_loss' | 'maintain' | 'weight_gain' | '';
   activityLevel: 1 | 1.2 | 1.5;
   gender: 'male' | 'female' | 'non_binary' | '';
   age: number;
   height: number;
   heightMetric: 'ft' | 'cm';
   weight: number;
   weightMetric: 'lb' | 'kg';
   isLoggedIn: boolean;
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
   CalculatedGoals: undefined;
   CompleteRegistration: undefined;
};

type MainScreenCard = {
   logo: string;
   type: string;
   description: string | null;
   title: string;
   id: number;
};

type CardOptionType = MainScreenCard & {
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

type SignupForm = {
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
};

type Goals = {
   total_fat: number;
   total_protein: number;
   total_calories: number;
   total_carbohydrates: number;
};

export {
   WelcomeStackParamList,
   CardOptionType,
   AgeItemType,
   SignupForm,
   ViewableItems,
   RenderItemType,
   TextContentType,
   GlobalUserState,
   MainScreenCard,
   Goals,
};
