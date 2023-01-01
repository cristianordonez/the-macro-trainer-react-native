import { ViewToken } from 'react-native';

type SliceStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

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

type DrawerStack = {
   BottomTabScreen: undefined;
};

type ChangeProgramsStackType = {
   Categories: undefined;
   Programs: { category: Category['category_name'] };
   ProgramDescription: {
      programName: Program['name'];
   };
   EnterWeights: {
      programName: Program['name'];
   };
};

type CurrentWorkoutStackType = {
   Overview: undefined;
   ActiveWorkout: undefined;
};

type BottomTabsParamList = {
   Home: undefined;
   FoodLog: undefined;
   WeightLifting: undefined;
   Cardio: undefined;
   Add: undefined;
   HeaderAvatar: undefined;
};

type WeightLiftingStackType = {
   ChangeProgramsStack: undefined;
   CurrentWorkoutsStack: undefined;
};

type CurrentWorkoutsStack = {
   WorkoutsOverview: undefined;
   ActiveWorkout: undefined;
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
   date: string;
   slot: 1 | 2 | 3 | 4;
   servings: number | string;
   brand_owner: string;
   description: string;
   fdc_id: number;
   meal_id: number;
   nutrition: FoodNutrition;
};

type GlobalFoodLogState = {
   currentDate: string;
   itemsToday: FoodLogItem[] | [];
   nutritionSummaryToday: DailyNutritionSummary;
   itemsAlternateDate: FoodLogItem[] | [];
   nutritionSummaryAlternateDate: DailyNutritionSummary | {};
   searchResults: FoodSearchResult[] | [];
   status: SliceStatus;
};

type Set = {
   amrap: boolean;
   percentage_rm: number;
   reps_target: number;
   set_number: number;
   id: number;
};

type SharedExerciseData = {
   id: number;
   name: string;
   gif_url: string;
};

type ExerciseData = SharedExerciseData & {
   body_part: string;
   equipment: string;
};

type ExerciseForWorkout = SharedExerciseData & {
   sets: Set[];
};

type Workout = {
   day: number;
   week: number;
   id: number;
   exercises: ExerciseForWorkout[];
};

type Progression = {
   id: number;
   description: string;
   min_rep: number;
   max_rep: number;
   weight_to_add: number;
};

type Program = {
   program_id: number;
   is_default: boolean;
   name: 'StrongLifts 5x5' | 'nSuns 531 LP 4 Day Variation' | 'Wendler 531';
   body: string;
   progression: Progression[];
   workouts: Workout[];
};

type Category = {
   category_name:
      | 'nSuns 531 Variants'
      | 'Beginner'
      | 'Intermediate'
      | 'Wendler 531 Variants'
      | 'All';
   category_id: number;
   programs: Program[];
};

type ExerciseByMuscle = {
   muscle: string;
   id: number;
   exercises: ExerciseData[];
};

type WeightLiftingState = {
   user: {
      hasSelectedProgram: boolean;
      selectedProgramId: number | null;
   };
   data: {
      muscles: ExerciseByMuscle[];
      categories: Category[];
   };
};

type ExerciseRepMax = {
   exercise_id?: number;
   name: string;
   max: number;
   reps?: number;
   weight: number;
   weightMetric?: number;
   isError?: boolean;
};

type GlobalWeightLiftingState = WeightLiftingState & {
   status: SliceStatus;
   activeProgramId: null | number;
   activeCategory: Category['category_name'] | '';
   exerciseRepMaxes: ExerciseRepMax[];
};

type WeightliftingPostData = {
   activeProgramId: GlobalWeightLiftingState['activeProgramId'];
   exerciseRepMaxes: GlobalWeightLiftingState['exerciseRepMaxes'];
};

type InitialDataFromAPI = WeightLiftingState['data'] & {
   selectedProgram: {
      program_id: number | null;
   };
   exerciseRepMaxes: GlobalWeightLiftingState['exerciseRepMaxes'];
};

type LoginFormData = { username: string; password: string };

type ServerFoodLogResponse = {
   foodLogItems: FoodLogItem[];
   nutritionSummary: DailyNutritionSummary;
};

type ServerGeneralResponse = {
   message: string;
   status: number;
};

type MetricsServerResponse = {
   height: number;
   weight: number;
   age: number;
   gender: 'male' | 'female' | 'non_binary' | '';
   goal: 'weight_loss' | 'maintain' | 'gain_muscle' | '';
   activity_level: 1 | 1.2 | 1.5 | 0;
};

type ServerGoalsResponse = {
   total_fat: number;
   total_protein: number;
   total_calories: number;
   total_carbohydrates: number;
   water: number;
   steps: number;
   calories_to_burn: number;
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
   BottomTabsParamList,
   DailyNutritionSummary,
   MacroMap,
   LoginForm,
   ServerResponseError,
   MetricsServerResponse,
   FoodSearchResult,
   FoodLogItem,
   Program,
   GlobalFoodLogState,
   ServerFoodLogResponse,
   ServerGeneralResponse,
   ServerGoalsResponse,
   LoginFormData,
   GlobalWeightLiftingState,
   WeightLiftingState,
   WeightLiftingStackType,
   ChangeProgramsStackType,
   CurrentWorkoutsStack,
   Workout,
   Set,
   DrawerStack,
   Category,
   WeightliftingPostData,
   CurrentWorkoutStackType,
   ExerciseData,
   ExerciseForWorkout,
   InitialDataFromAPI,
};
