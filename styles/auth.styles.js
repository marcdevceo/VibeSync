import { StyleSheet } from "react-native";
import { theme } from "../src/themes/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.secondary,
    },
    title: {
      color: theme.colors.coral,
      fontSize: theme.sizes.xxxl,
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
      // marginTop: theme.sizes.sm,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: theme.sizes.sm,
      marginBottom: theme.sizes.sm,
      marginTop: theme.sizes.sm,
      // marginLeft: theme.sizes.sm,
    },
  });