import React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { View, StyleSheet } from "react-native";

const listMenu = [
  {title: "Change Name", icon: "account-outline"},
  {title: "Change Password", icon: "email-outline"},
  {title: "Change Email", icon: "lock-outline"},
];

export default function MenuProfile(props) {
  const { openModal } = props;

  const renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => openModal(item.title)}>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listMenu}
        keyExtractor={(item, index) => index.toString()} // Usamos el índice como clave única
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});