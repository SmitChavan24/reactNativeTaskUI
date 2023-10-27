import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import { responsiveHeight,responsiveFontSize,responsiveWidth } from 'react-native-responsive-dimensions';
const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Pillsbury India</Text>
      <View style={styles.textcontainer}>
        <Text style={styles.textNormal}>Food Products</Text>
        <Image
          source={require('../../assets/majorImages/tick.png')}
          style={styles.image}></Image>
        <Text style={styles.official}>Official</Text>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.boldsmall}>
          Make every cooking moment special with your loved ones with our range
          of Pillsbury products
        <Image
          source={require('../../assets/majorImages/hearty.png')}
          style={styles.imageheart}></Image>
        </Text>
      </View>
      <View style={styles.textcontainer}>
        <Image
          source={require('../../assets/majorImages/globe.png')}
          style={styles.imageglobe}></Image>
        <Text
          style={[
            styles.boldsmall,
            {marginTop: 9, fontSize: responsiveFontSize(1.6), fontWeight: '400', marginLeft: responsiveWidth(2)},
          ]}>
          pillsburygifting.in
        </Text>
      </View>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginBottom:responsiveHeight(1)}}>
        <View>
          <View style={{ marginTop: 5,marginRight:10}}>
            <Text>
              <Text
                style={[
                  styles.bold,
                  {
                    fontSize: 17,
                    fontWeight: '500',
                  },
                ]}>
                12k
              </Text>
              <Text style={{fontSize: 15,color:'black'}}>   Followers  </Text>
              <Text
                style={[
                  styles.bold,
                  {fontSize: 17, fontWeight: '500',marginLeft:15},
                ]}>
                12k
              </Text>
              <Text style={{fontSize: 15,color:'black'}}>   Likes</Text>
            </Text>
          </View>
          <View style={styles.textcontainer}>
            <Image
              source={require('../../assets/majorImages/calendar.png')}
              style={[styles.imageglobe,{marginTop:9,marginRight:responsiveWidth(1),marginLeft:responsiveWidth(1)}]}></Image>
            <Text style={{marginTop:6 ,color:'black'}}>Created Mar 2023</Text>
          </View>
        </View>
        <View>

        <TouchableOpacity style={{bottom:5,marginRight:responsiveWidth(4)}}>
          <Image
            source={require('../../assets/majorImages/like.png')}
            style={styles.imageglobe}></Image>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginLeft:responsiveWidth(3)
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: responsiveFontSize(2.5),
    marginBottom: 4,
    marginTop: 5,
  },
  dot:{
   height:10,
   width:10,
   backgroundColor:'gray',
   borderRadius:70,
  },
  textNormal: {
    color: 'black',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '300',
    marginRight: 10,
  },
  textcontainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
    marginTop: 5,
  },
  official: {
    marginTop: 5,
    color:'black'
  },
  boldsmall: {
    fontWeight: '400',
    color: 'black',
    fontSize: responsiveFontSize(1.9),
    marginTop: 5,
  },
  imageheart: {
    right: 0,
    marginTop: 28,
    height: 15,
    width: 15,
  },
  imageglobe: {
    marginTop: 12,
  },
});
