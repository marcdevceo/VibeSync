import { View, Text, Image, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import { styles } from '@/styles/auth.styles'
import { theme } from '@/src/themes/theme'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSSO } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

export default function Login() {
    const {startSSOFlow} = useSSO()
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        try {
            const {createdSessionId, setActive} = await startSSOFlow({strategy:"oauth_google"})
            
            if(setActive && createdSessionId) {
                setActive({session:createdSessionId})
                router.replace("/(tabs)/home")
            }
        } catch (error) {
            console.log("OAuth error: ", error); 
        }
    }

    // function handleGoogleSignIn(event: GestureResponderEvent): void {
    //     throw new Error('Function not implemented.')
    // }

  return (
    <View style={styles.container}>
        {/* BRAND Section */}
        <View style={styles.brandSection}>
            <View style={styles.logoContainer}>
                <Ionicons 
                    name="infinite-outline"
                    size={theme.sizes.md}
                    color={theme.colors.electricLime}
                />
            </View>
            <Text style={styles.appName}>VibeSync</Text>
            <Text style={styles.tagline}>connections that matters</Text>
        </View>
        {/* ILLUSTRATION SECTION */}
        <View style={styles.illustrationContainer}>
            <Image
                source={require('../../assets/images/callingfriends.png')}
                style={styles.illustration}
                resizeMode="cover"
            />
        </View>
        {/* LOGIN SECTION */}
        <View style={styles.loginSection}>
            <TouchableOpacity
                style={styles.googleButton}
                onPress={handleGoogleSignIn}
                activeOpacity={0.9}
            >
                <View style={styles.googleIconContainer}>
                    <Ionicons name="logo-google" size={theme.sizes.md} color={theme.colors.gray} />
                </View>
                <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>
                By continuing, you agree to the our Terms and Privacy Policy
            </Text>
        </View>
    </View>
  )
}
