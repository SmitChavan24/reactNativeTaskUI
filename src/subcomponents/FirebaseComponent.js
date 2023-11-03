import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';
import uuid from 'react-native-uuid';
import firestore from "@react-native-firebase/firestore"
import AsyncStorage from '@react-native-async-storage/async-storage';

const FirebaseComponent = () => {
  const addUser = () => {
    const userid = uuid.v4();
    let data={
      name:'smit chavan',
      surname:"chavan",
      phone:8104286670,
      age:22,
      description:'paidaishi choro'
     }
  firestore().collection('users').doc(userid).set(data).then((res)=>{
    console.log('Data successfully written:', );
      AsyncStorage.setItem('userData',JSON.stringify(data));
   }).catch((err)=>{
    console.log(err)
   })
  
   
  };
  const fetchUsers = async() => {
    const value = await AsyncStorage.getItem('userData');
    JSON.parse(value)
    console.log(value)
  };

  const updateUsers = () => {};
  return (
    <View style={{height: 400, width: 200}}>
      <TextInput>
        <Text>Name Input</Text>
      </TextInput>
      <TextInput>
        <Text>Username Input</Text>
      </TextInput>
      <TextInput>
        <Text>Password Input</Text>
      </TextInput>
      <TextInput>
        <Text>Age Input</Text>
      </TextInput>
      <TextInput>
        <Text>Male Input</Text>
      </TextInput>
      <TextInput>
        <Text>Description Input</Text>
      </TextInput>

      <Button title="submit" onPress={addUser}></Button>
      <Button title="fetch Users" onPress={fetchUsers}></Button>
      <Button title="update Users" onPress={updateUsers}></Button>
    </View>
  );
};

export default FirebaseComponent;

const styles = StyleSheet.create({});
