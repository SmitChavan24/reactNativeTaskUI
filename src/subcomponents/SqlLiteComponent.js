import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';
import {openDatabase} from 'react-native-sqlite-storage';

const SqlLiteComponent = () => {
  const db = openDatabase({
    name: 'User',
  });
  const addUser = () => {
    try {
        db.transaction(tx => {
            tx.executeSql(
              'CREATE TABLE IF NOT EXISTS TableUser (id INTEGER PRIMARY KEY AUTOINCREMENT, note VARCHAR(100), username VARCHAR(100))',
              [],
              (sqlTxn, res) => {
                console.log(res, '===res');
              },
              error => {
                console.log(error, '==error');
              }
            );
          });
          
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUsers = async () => {
    try {
        db.transaction(tx => {
            tx.executeSql(
              'SELECT * FROM TableUser',
              [],
              (tx, res) => {
                let len = res.rows.length;
                if (len > 0) {
                  let results = [];
                  for (let i = 0; i < len; i++) {
                    let item = res.rows.item(i);
                    console.log(item);
                  }
                }
              },
              error => {
                console.log(error, '===error');
              }
            );
          });
          
    } catch (error) {
      console.log(error);
    }
  };

  const updateUsers = async () => {
    try {
      let notes = 'lets check it now if its working';
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO TableUser (note) VALUES (?)',
          [notes], // Assuming "notes" is a variable holding the data to be inserted
          (sqlTxn, res) => {
            console.log(res, '===res');
          },
          error => {
            console.log(error, '===error');
          }
        );
      });
      
    } catch (error) {
      console.log(error);
    }
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

export default SqlLiteComponent;

const styles = StyleSheet.create({});
