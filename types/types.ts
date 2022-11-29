import { ViewToken } from 'react-native';

type SliceStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

type MetricsServerResponse = {
   height: number;
   weight: number;
   age: number;
   gender: 'male' | 'female' | 'non-binary';
   goal: 'weight_loss' | 'maintain' | 'gain_muscle' | '';
   activityLevel: 1 | 1.2 | 1.5 | 0;
};

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

type GlobalMetricsState = SharedUserState & {
   height: number;
   status: SliceStatus;
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
   email: string;
   password: string;
   confirmPassword: string;
};

type LoginForm = {
   email: string;
   password: string;
};

type Goals = {
   total_fat: number;
   total_protein: number;
   total_calories: number;
   total_carbohydrates: number;
   water: number;
   steps: number;
   calories_to_burn: number;
   status?: SliceStatus;
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
   status: SliceStatus;
};

type MacroMap = {
   total_fat: string;
   total_protein: string;
   total_carbohydrates: string;
};

type ServerResponseError = {
   message: string;
   status: number;
};

type FoodNutrition = {
   id: number | null;
   fdc_id: number | null;
   calories: number | string | null;
   calcium: number | string | null;
   cholesterol: number | string | null;
   dietary_fiber: number | string | null;
   iron: number | string | null;
   potassium: number | string | null;
   protein: number | string | null;
   saturated_fat: number | string | null;
   sodium: number | string | null;
   total_sugars: number | string | null;
   total_carbohydrates: number | string | null;
   total_fat: number | string | null;
   trans_fat: number | string | null;
   vitamin_d: number | string | null;
};

type FoodSearchResult = {
   data_type: string;
   serving_size: number | null;
   serving_size_unit: string | null;
   brand_owner: string | null;
   custom_food_brand_owner: string | null;
   description: string;
   fdc_id: string;
   meal_id: number;
   nutrition: FoodNutrition;
};

type FoodLogItem = {
   data_type: string;
   serving_size: number | string;
   serving_size_unit: string;
   date: string | Date;
   slot: 1 | 2 | 3 | 4;
   servings: number | string;
   brand_owner: string;
   description: string;
   fdc_id: number;
   meal_id: number;
   nutrition: FoodNutrition;
};

type GlobalFoodLogState = {
   currentDate: string | Date;
   itemsToday: FoodLogItem[] | [];
   nutritionSummaryToday: DailyNutritionSummary;
   itemsAlternateDate: FoodLogItem[] | [];
   nutritionSummaryAlternateDate: DailyNutritionSummary | {};
   searchResults: FoodSearchResult[] | [];
   status: SliceStatus;
};

type ServerFoodLogResponse = {
   foodLogItems: FoodLogItem[];
   nutritionSummary: DailyNutritionSummary;
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
   GlobalMetricsState,
   MainScreenCard,
   Goals,
   AuthReducerState,
   AuthenticatedTabsParamList,
   DailyNutritionSummary,
   MacroMap,
   LoginForm,
   ServerResponseError,
   MetricsServerResponse,
   FoodSearchResult,
   FoodLogItem,
   GlobalFoodLogState,
   ServerFoodLogResponse,
};
