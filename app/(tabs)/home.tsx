import { Pressable, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "../../styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>It's a me Mario!!!</Text>
      <TouchableOpacity onPress={() => alert("Oh It's a You, Mario!!!")} style={styles.button}>
        <Text style={styles.buttontext}>Press Me!</Text>
      </TouchableOpacity>
      <Image 
        source={require("../assets/images/icon.png")}
        style={styles.image}
      /> */}
      <Link href="/notifications">Notifications Page</Link>
      <Link href="/profile">Profile Page</Link>
    </View>
  );
}