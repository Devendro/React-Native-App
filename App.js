import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { TextInput } from "react-native";
import { Button } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    opensans: require("./assets/fonts/Lato-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const pressed = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitles}>Welcome to Society App</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="User Name" />
        <TextInput style={styles.input} placeholder="Password" />
        <View style={styles.buttonInput}>
          <Text style={{padding : 15}}>Dont have any Account ? Register Here</Text>
          <Button color="#107d85" title="Login" onPress={pressed} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#107d85",
  },
  titles: {
    alignItems: "center",
    height: 150,
    marginTop: 80,
  },
  title: {
    fontSize: 45,
    fontFamily: "opensans",
    padding: 10,
  },
  subtitles: {
    fontFamily: "opensans",
    fontSize: 19,
  },
  form: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: 550,
    padding : 22,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 10,
    marginTop: 51,
    width: 290,
    color: "#000",
    fontFamily: "opensans",
    fontSize: 17,
  },
  buttonInput: {
    marginTop: 45,
    width: 290,
    color: "#000",
    fontFamily: "opensans",
    fontSize: 17,
    textAlign: "center"
  },
});