import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../src/themes/theme";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "center",
      // alignItems: "center",
      backgroundColor: theme.colors.black,
    },
    title: {
      color: theme.colors.coral,
      fontSize: theme.sizes.xl3,
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: theme.sizes.lg,
      borderRadius: theme.sizes.sm,
      marginTop: theme.sizes.md,
    },
    buttontext: {
      color: theme.colors.electricLime,
      fontSize: theme.sizes.xl,
    },
    image: {
      width: theme.sizes.xl5,
      height: theme.sizes.xl5,
      borderRadius: theme.sizes.sm,
      marginBottom: theme.sizes.sm,
      marginTop: theme.sizes.sm,
    },
    brandSection: {
      alignItems: "center",
      marginTop: height * 0.12,
    },
    logoContainer: {
      width: 60,
      height: 60,
      borderRadius: 18,
      backgroundColor: "rgba(74, 222, 128, 0.15)",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    appName: {
      fontSize: 42,
      fontWeight: "700",
      fontFamily: "JetBrainsMono-Medium",
      color: theme.colors.electricLime,
      letterSpacing: 0.5,
      marginBottom: 8,
    },
    tagline: {
      fontSize: 16,
      color: theme.colors.eaglesSilver,
      letterSpacing: 1,
      textTransform: "lowercase",
    },
    illustrationContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: theme.sizes.xl,
    },
    illustration: {
      width: width * 0.75,
      height: width * 0.75,
      maxHeight: 280,
    },    
    loginSection: {
      width: "100%",
      paddingHorizontal: 24,
      paddingBottom: 40,
      alignItems: "center",
    },
    googleButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colors.white,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 14,
      marginBottom: 20,
      width: "100%",
      maxWidth: 300,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 5,
    },
    googleIconContainer: {
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    googleButtonText: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.gray,
    },
    termsText: {
      textAlign: "center",
      fontSize: 12,
      color: theme.colors.gray,
      maxWidth: 280,
    },
  });