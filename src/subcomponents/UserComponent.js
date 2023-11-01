import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';
import Realm from 'realm';
import userSchema from '../database/realm/userSchema';
import {create} from 'react-test-renderer';

const UserComponent = () => {
  const realm = new Realm({schema: [userSchema]});
  let userResponse = '';
  let userUpdateResponse = '';
  const addUser = () => {
    realm.write(() => {
      userResponse = realm.create('User', {
        id: 3,
        name: 'Smit Chavan',
        username: 'SmitChavan',
        password: 'smit@2341',
        age: 22,
        male: true,
        description: 'my first user create',
      });
    });
    console.warn('New user:', userResponse);
  };
  const fetchUsers = () => {
    const fetchedusers = realm.objects('User');
    console.warn(fetchedusers);
  };

  const updateUsers = () => {
    realm.write(() => {
      userUpdateResponse = realm.objects('User').filtered('id == $0', 3)
      if (userUpdateResponse) {
        //for deleting use this 
          // realm.delete(userUpdateResponse);


          // Update the user's properties
        // userUpdateResponse.name = 'chandan23'
        // userUpdateResponse.username = 'boxer23'
        // userUpdateResponse.password = 'boxer@12343'
        // userUpdateResponse.age = 28
        // userUpdateResponse.male = false
        // userUpdateResponse.description = 'lets beat box pleasez'
      } else {
        console.error('User not found'); // Handle the case when the user doesn't exist
      }
    });
    console.warn('New user:',userUpdateResponse );
  };
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

export default UserComponent;

const styles = StyleSheet.create({});
