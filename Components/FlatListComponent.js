import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
export default function FlatListComponent() {
  const [data, setData] = useState("");
  const baseURL = "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";
  useEffect(() => {
    fetch(baseURL)
      .then((e) => e.json())
      .then((rep) => setData(rep))
      .catch((err) => {
        return setData([]), console.log(err);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <Text>{item.avatar}</Text>}
      ></FlatList>
    </View>
  );
}
