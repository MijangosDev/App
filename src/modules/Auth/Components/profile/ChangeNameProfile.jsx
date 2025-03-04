import React from "react";
import { Overlay } from "rneui/base";
import { StyleSheet, Text } from "react-native";

export default function ChangeNameProfile(props) {
    const {isVisible, setIsVisible} = props;

    return (
        <Overlay
        isVisible = {isVisible}
        overlayStyle = {styles.container}
        onBackdropPress={() => setIsVisible(false)}
        >
            <Text>Change Name Profile</Text>
        </Overlay>
    );
}

const styles = StyleSheet.create({
    container: {
        heignt: "auto",
        width: "80%",
        backgroundColor: "white",
        borderRadious: 16,
        borderWith: 2,  
        borderColor: "green",


    },

    }
);