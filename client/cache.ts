import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { TokenCache } from '@clerk/clerk-expo';


const createSecureStore = ():TokenCache => {
    return {
        getToken : async (key: string) => {
    try{} catch(e) {
        console.log(e);
    }
}
}