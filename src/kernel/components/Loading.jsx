import React from "react";
import { Overlay } from "react-native-elements";
import { StyleSheet, Text, ActivityIndicator } from "react-native";

export default function Loading(props) {
    const { title, activityColor, sizeActivity, color, isVisible } = props; // ✅ Se agregó 'title'

    return (
        <Overlay
            isVisible={isVisible}
            overlayStyle={[styles.container, { borderColor: color }]} // ✅ 'styles.container' en vez de 'StyleSheet.container'
        >
            <ActivityIndicator size={sizeActivity || "large"} color={activityColor || "#000"} />
            {title && <Text style={{ fontWeight: "bold", fontSize: 14 }}>{title}</Text>} {/* ✅ Evita error si 'title' es undefined */}
        </Overlay>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: "80%",
        backgroundColor: "grey",
        borderRadius: 18,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 10, // ✅ Espaciado adicional para mejorar el diseño
    },
});
