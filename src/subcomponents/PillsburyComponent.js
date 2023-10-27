import {StyleSheet, Text, View, Image,TouchableOpacity,Dimensions} from 'react-native';
import React from 'react';
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions';

const PillsburyComponent = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        width: responsiveWidth(98),
        height: responsiveHeight(105),
        backgroundColor: '#194993',
        marginTop: 25,
        marginLeft: responsiveWidth(1),
        marginBottom: 1,
        alignItems:'center'
      }}>
      <View
        style={{
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
        <Text style={styles.textBig}>
          Which one do you love relishing the most ?
        </Text>
      </View>

      <View
        style={{ flexDirection: 'row',  marginLeft: 22,marginTop:20}}>
        <View>
          <Image
            source={require('../assets/majorImages/cakeone.png')}
            resizeMode="contain"></Image>
          <Image
            source={require('../assets/majorImages/thumbsup.png')}
            resizeMode="contain"
            style={{marginLeft: 50}}></Image>
        </View>
        <View>
          <Image
            source={require('../assets/majorImages/caketwo.png')}
            resizeMode="contain"></Image>
          <Image
            source={require('../assets/majorImages/thumbsup.png')}
            resizeMode="contain"
            style={{marginLeft: 50}}></Image>
        </View>
      </View>
      <View style={{marginTop:20}}>
        <View style={{alignItems:'center'}}>
          <Text style={{color: 'white', fontSize: 12, marginBottom: 10}}>
            Voting ends in
          </Text>
          <Text style={{color: 'white', fontSize: responsiveFontSize(3)}}>9 : 23: 10: 25</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white'}}>Days</Text>
          <Text style={{color: 'white', marginLeft: 15}}>Hrs</Text>
          <Text style={{color: 'white', marginLeft: 21}}>Min</Text>
          <Text style={{color: 'white', marginLeft: 17}}>Sec</Text>
        </View>
      </View>
      <View style={styles.buttoncontainer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/majorImages/like2.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/majorImages/commentlight.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/majorImages/sharelight.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
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
  textBig: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
  },
  likeImage: {
    marginRight: 19,
  },
  buttoncontainer: {
    marginLeft: 25,
    flexDirection: 'row',
    marginTop:60
  },
});
