import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text } from "react-native";
export default function PickerComponent() {
  const [language, setLanguage] = useState({
    selectedValue: "Java",
    selectedCar: "Audi",
  });
  const [car, setCar] = useState([
    { id: 1, name: "Lambo" },
    { id: 2, name: "Audi" },
  ]);
  return (
    <View style={{ height: 50, width: "100%" }}>
      <Picker
        selectedValue={language.selectedValue}
        onValueChange={(itemValue, itemIndex) =>
          setLanguage({ selectedValue: itemValue })
        }
      >
        <Picker.Item label="Java" value={"Java"}></Picker.Item>
        <Picker.Item label="Javascrip" value={"Javascrip"}></Picker.Item>
      </Picker>
      <Text>Selected Value: {language.selectedValue}</Text>
      <Picker
        style={{ marginTop: 24 }}
        selectedValue={language.selectedCar}
        onValueChange={(itemValue, itemIndex) =>
          setLanguage({ selectedCar: itemValue })
        }
      >
        {car.map((item) => (
          <Picker.Item
            label={item.name}
            value={item.name}
            key={item.id}
          ></Picker.Item>
        ))}
      </Picker>
      <Text>Selected Car: {language.selectedCar}</Text>
    </View>
  );
}
