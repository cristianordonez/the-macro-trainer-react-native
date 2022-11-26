import { ViewToken } from 'react-native';

type SharedUserState = {
   goal: 'weight_loss' | 'maintain' | 'gain_muscle' | '';
   activityLevel: 1 | 1.2 | 1.5 | 0;
   gender: 'male' | 'female' | 'non_binary' | '';
   age: number;
   heightMetric: 'ft' | 'cm';
   weight: number;
   weightMetric: 'lb' | 'kg';
};

type UserState = SharedUserState & {
   numFt: number;
   numInch: number;
   numCm: number;
};

type GlobalUserState = SharedUserState & {
   height: number;
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

type AuthenticatedTabsParamList = {
   Home: undefined;
   FoodLog: undefined;
   Exercise: undefined;
   Profile: undefined;
   Add: undefined;
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
   status?: 'idle' | 'loading' | 'succeeded' | 'failed';
};
type DailyNutritionSummary = {
   total_fat: number;
   total_calories: number;
   total_protein: number;
   total_carbohydrates: number;
};

type ChartValue = { date: Date; weight: number };

type AuthReducerState = {
   isAuthenticated: boolean;
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

type MacroMap = {
   total_fat: string;
   total_protein: string;
   total_carbohydrates: string;
};

export {
   WelcomeStackParamList,
   ChartValue,
   CardOptionType,
   AgeItemType,
   SignupForm,
   ViewableItems,
   RenderItemType,
   TextContentType,
   GlobalUserState,
   MainScreenCard,
   Goals,
   AuthReducerState,
   AuthenticatedTabsParamList,
   DailyNutritionSummary,
   MacroMap,
};
