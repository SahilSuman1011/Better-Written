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
      <BodyScrollView>
       
        <Link href={"/sign-up"}>Go to Sign Up</Link>
         <TextInput label="hello"/>
        <Button onPress={() => console.log('Button pressed')}>Ram Ram</Button>
       
      </BodyScrollView> 
    );
}   