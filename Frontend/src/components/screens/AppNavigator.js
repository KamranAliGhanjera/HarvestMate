import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Forgotten from './Forgotten';
import Interface from './Interface';
import Verification from './Verification';
import ResetPassword from './ResetPassword';
import LeasingSystemPage from './LeasingSystemPage';
import AnotherPage from './AnotherPage';
import LoanApplicationForm from './LoanApplicationForm';
import ApplicationSuccessPage from './ApplicationSuccessPage';
import ServicesPage from './ServicesPage';
import ServicesPage2 from './ServicesPage2';
import Question from './Question';
import MachinaryPage from './MachinaryPage';
import CropsInformationPage from './CropsInformationPage';
import MarketPricePage from './MarketPricePage';
import MedicineInformationPage from './MedicineInformationPage';
import Kharif from './Kharif';
import Rabi from './Rabi';
import Zaid from './Zaid';
import Pesticides from './Pesticides';
import Fertilizers from './Fertilizers';
import Fungicides from './Fungicides';
import Insecticides from './Insecticides';
import Herbicides from './Herbicides';
import Growth from './Growth';
import Biological from './Biological';
import Paymentpage from './Paymentpage';
import VerificationCodeInput from './VerificationCodeInput';
import Home from './Home';
import Details from './Details';
import Machinary2 from './Machinary2';
import Setting from './Setting';
import Profile from './Profile';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'Signup'} component={Signup} />
        <Stack.Screen name={'Forgotten'} component={Forgotten} />
        <Stack.Screen name="Interface" component={Interface}  />
        <Stack.Screen name={'Verification'} component={Verification} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="LeasingSystemPage" component={LeasingSystemPage} />
        <Stack.Screen name="AnotherPage" component={AnotherPage} />
        <Stack.Screen name="LoanApplicationForm" component={LoanApplicationForm} />
        <Stack.Screen name="ApplicationSuccessPage" component={ApplicationSuccessPage} />
        <Stack.Screen name="ServicesPage" component={ServicesPage} />
        <Stack.Screen name="ServicesPage2" component={ServicesPage2} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="MachinaryPage" component={MachinaryPage} />
        <Stack.Screen name="CropsInformationPage" component={CropsInformationPage} />
        <Stack.Screen name="MarketPricePage" component={MarketPricePage} />
        <Stack.Screen name="MedicineInformationPage" component={MedicineInformationPage} />
        <Stack.Screen name="Kharif" component={Kharif} />
        <Stack.Screen name="Rabi" component={Rabi} />
        <Stack.Screen name="Zaid" component={Zaid} />
        <Stack.Screen name="Pesticides" component={Pesticides} />
        <Stack.Screen name="Fertilizers" component={Fertilizers} />
        <Stack.Screen name="Fungicides" component={Fungicides} />
        <Stack.Screen name="Insecticides" component={Insecticides} />
        <Stack.Screen name="Herbicides" component={Herbicides} />
        <Stack.Screen name="Growth" component={Growth} />
        <Stack.Screen name="Biological" component={Biological} />
        <Stack.Screen name="Paymentpage" component={Paymentpage} />
        <Stack.Screen name="VerificationCodeInput" component={VerificationCodeInput} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Machinary2" component={Machinary2} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
