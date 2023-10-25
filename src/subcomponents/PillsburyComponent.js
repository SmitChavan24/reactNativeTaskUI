import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PillsburyComponent = () => {
  return (
    <View
      style={{
        width: 390,
        height: 700,
        backgroundColor: '#194993',
        marginTop: 25,
        marginLeft: 1.5,
        marginBottom: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 10,
        }}>
        <Image
          source={require('../assets/majorImages/pillsbury.png')}
          style={styles.circleimage}
          resizeMode="contain"></Image>

        <View style={{marginTop: 15, marginLeft: 5}}>
          <Text style={styles.text}>Pillsbury</Text>
          <Text style={styles.textsmall}>Feb 21 9:00 AM</Text>
        </View>

        <View
          style={{
            marginTop: 5,
            alignItems: 'center',
            marginLeft: 45,
            bottom: 42,
          }}>
          <Image
            source={require('../assets/majorImages/mcpoll.png')}
            resizeMode="contain"
            style={{height: 135, width: 135}}></Image>
        </View>
      </View>

      <View>
        <Text style={styles.textBig}>Which one do you love relishing the most ?</Text>
      </View>
    </View>
  );
};

export default PillsburyComponent;

const styles = StyleSheet.create({
  circleimage: {
    height: 65,
    width: 65,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 22,
    marginLeft: 10,
    bottom: 10,
  },
  textsmall: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    bottom: 10,
  },
  textBig:{
    color: 'white',
    fontFamily: 'serif',
    fontSize: 30,
    bottom: 500,
    textAlign:'center',
  }
});
