import {View } from 'react-native';
import * as React from 'react';
import { useSignIn } from '@clerk/clerk-expo';
import {ThemedText} from '@/components/ThemedText';
import { useRouter, Link } from 'expo-router';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/ui/text-input';
import { BodyScrollView } from '@/components/ui/BodyScrollView';

export default function SignInScreen() {
  const {signIn, setActive, isLoaded} = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSigningIn, setIsSigningIn] = React.useState(false);

    return (
      <BodyScrollView
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}>
       
         <TextInput 
         label="Email"
         placeholder="Enter email"
         autoCapitalize="none"
         keyboardType="email-address"
         onChangeText={setEmailAddress}/>

           <TextInput 
           value={password}
         label="Password"
         placeholder="Enter Password"
         autoCapitalize="none"
         secureTextEntry={true}
         onChangeText={(password) => setPassword(password)}
         />

        <Button onPress={() => console.log('Button pressed')}>Ram Ram</Button>
       
      </BodyScrollView> 
    );
}   