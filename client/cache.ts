import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { TokenCache } from '@clerk/clerk-expo';


const createSecureStore = ():TokenCache => {
    try{} catch(e) {
        console.log(e);
    }
}