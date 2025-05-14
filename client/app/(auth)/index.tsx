import {View } from 'react-native';
import * as React from 'react';
import { useSignIn } from '@clerk/clerk-expo';
import {ThemedText} from '@/components/ThemedText';
import { useRouter, Link } from 'expo-router';

export default function SignInScreen() {
  const {signIn, setActive, isLoaded} = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSigningIn, setIsSigningIn] = React.useState(false);

    return (
      <View>
        <ThemedText type="title">Sign In</ThemedText>
        <Link href={"/sign-up"}>Go to Sign Up</Link>
      </View>
    );
  
}   