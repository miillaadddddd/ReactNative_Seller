import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/Button";

function WelcomeScreen(props) {
    return ( <
        ImageBackground blurRadius = { 10 }
        style = { styles.background }
        source = { require("../assets/background.svg") } >
        <
        View style = { styles.logoContainer } >
        <
        Image style = { styles.logo }
        source = { require("../assets/logo.png") }
        /> <
        Text style = { styles.tagline } > بازار اجتماعی نخل < /Text> <
        /View> <
        View style = { styles.buttonContainer } >
        <
        AppButton title = "ورود" / >
        <
        AppButton title = "ثبت نام"
        color = "secondary" / >
        <
        /View> <
        /ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },

    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;