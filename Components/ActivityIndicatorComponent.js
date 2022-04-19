import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function ActivityIndicatorComponent() {
    const [begin, setBegin] = useState(true);
    setTimeout(() => {
       setBegin(false) 
    }, 3000);
  return <View>
      <ActivityIndicator size={'large'} color={"lightgreenblue"} animating = {begin}></ActivityIndicator>
  </View>;
}
