import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
import React from 'react'

const EndComponent = () => {
  return (
<View style={{right:70}}>
    <View style={{ flexDirection: 'row' ,marginLeft:5}}>
      <Image
        source={require('../../assets/majorImages/hearty.png')}
        resizeMode="contain"></Image>
      <Text
        style={{
          marginLeft: 12,
          marginBottom: 2,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 14,
        }}>
        Liked By John and{' '}
      </Text>
      <Text
        style={{
          marginLeft: 1,
          marginBottom: 2,
          fontWeight: 'bold',
          color: 'red',
          fontSize: 14,
        }}>
        12 others
      </Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        marginTop:10
      }}>
      <Image
        source={require('../../assets/majorImages/lady.png')}
        resizeMode="contain"></Image>
      <View
        style={{
          marginLeft: 15,
        }}>
        <Text
          style={{
            fontWeight: '400',
            color: 'black',
            bottom: 2,
          }}>
          ketki
        </Text>
        <Text
          style={{
            fontWeight: '700',
            color: 'black',
            fontSize: 15,
            bottom: 4,
          }}>
          Looks Yummy !!!
        </Text>
      </View>
    </View>
    <View
      style={{ flexDirection: 'row'}}>
      <Image
        source={require('../../assets/majorImages/boy.png')}
        resizeMode="contain"></Image>
      <View
        style={{
          margin: 1,
          marginLeft: 15,
        }}>
        <Text
          style={{
            fontWeight: '400',
            color: 'black',
            bottom: 2,
          }}>
          Amay
        </Text>
        <Text
          style={{
            fontWeight: '700',
            color: 'black',
            fontSize: 15,
            bottom: 4,
          }}>
          My favourite Snacks
        </Text>
      </View>
    </View>
  </View>
  )
}

export default EndComponent


const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      flexDirection: 'column',
      alignItems: 'center',
    },
    circleimage: {
      height: 50,
      width: 50,
      marginTop: 10,
      marginRight: 5,
    },
    text: {
      fontFamily: 'serif',
      color: 'black',
      fontSize: 15,
    },
    dots: {
      height: 32,
      width: 10,
    },
    dotmargin: {
      marginLeft: 190,
      marginTop: 20,
    },
    mainImage: {
      height: 400,
    },
    likeImage: {
      marginRight: 15,
    },
    buttoncontainer: {
      flex: 1,
      marginLeft: 15,
      flexDirection: 'row',
    },
  });