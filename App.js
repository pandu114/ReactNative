/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const App = () =>{
  const [data, setData] = useState([]);
  const getData = () =>{
    fetch("https://sheet.best/api/sheets/7b08deba-35fd-4f2c-883a-077992f9e921")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setData(data)
    })
    .catch((error) => {
      console.error(error);
    });

  }

  useEffect(()=>{
    getData();
  },[])
  return(
    <View>
      <Text>data from google sheets</Text>
      <FlatList
        data={data}
        renderItem={({item})=><Text>{item.name}{item.message}</Text>}
      />
    </View>
  )
}
export default App;
