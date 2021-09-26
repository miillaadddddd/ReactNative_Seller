import React, { useEffect } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <ListingsScreen></ListingsScreen>;
}
