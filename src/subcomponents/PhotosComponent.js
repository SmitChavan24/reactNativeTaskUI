import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const PhotosComponent = () => {
  return (
    <View>
      <View>
        <View style={styles.container}>
          <Image
            source={require('../assets/majorImages/pillsbury.png')}
            style={styles.circleimage}></Image>
          <View style={{marginTop: 15, marginLeft: 5}}>
            <Text style={styles.text}>Pillsbury</Text>
            <Text>Feb 21 9:00 AM</Text>
          </View>
          <View style={styles.dotmargin}>
            <TouchableOpacity>
              <Image
                source={require('../assets/majorImages/dots.png')}
                style={styles.dots}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require('../assets/majorImages/bournvita.png')}
          style={styles.mainImage}
          resizeMode="contain"></Image>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity>
            <Image
              source={require('../assets/majorImages/likeimg.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/majorImages/comment.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/majorImages/share.png')}
              style={styles.likeImage}
              resizeMode="contain"></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginLeft: 20, flex: 1, flexDirection: 'row'}}>
        <Image
          source={require('../assets/majorImages/hearty.png')}
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
      <View style={{ marginTop:10,flex: 1, flexDirection: 'row', marginLeft: 15,marginBottom:5}}>
        <Image
          source={require('../assets/majorImages/lady.png')}
          resizeMode="contain"></Image>
        <View
          style={{
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontWeight: '400',
              color: 'black',
              bottom:2
            }}>
            ketki
          </Text>
          <Text
            style={{
              fontWeight: '700',
              color: 'black',
              fontSize: 15,
              bottom:4
            }}>
            Looks Yummy !!!
          </Text>
        </View>
      </View>
      <View style={{margin: 1, flex: 1, flexDirection: 'row', marginLeft: 15}}>
        <Image
          source={require('../assets/majorImages/boy.png')}
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
              bottom:2
            }}>
            Amay
          </Text>
          <Text
            style={{
              fontWeight: '700',
              color: 'black',
              fontSize: 15,
              bottom:4
            }}>
            My favourite Snacks
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PhotosComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
  },
  circleimage: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginLeft: 2,
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
    marginTop: 5,
    marginLeft: 4,
    width: 385,
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
