import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../kernel/utils/FirebaseConnection";
import CardListProductos from "../Auth/Components/profile/CardListProducts";

export default function Products() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const arrayProductos = [];
      try {
        const querySnapshot = await getDocs(collection(db, "product")); 
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          arrayProductos.push(data);
        });
        setProductos(arrayProductos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
      setLoading(false);
    })();
  }, []);


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={productos}
        renderItem={({ item }) => {
          console.log("Producto:", item); 
          return (
            <CardListProductos
              img={item.Img || "https://via.placeholder.com/150"} 
              name={item.Name || "Producto sin nombre"} 
              description={item.Description || "Descripción no disponible"} 
              price={item.Price || "0.00"} 
            />
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={2} 
      />
    </View>
  );
}
