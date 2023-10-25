import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Photos from './PhotosComponent'
const Posts = () => {
  <View style={styles.posts}>Posts</View>;
};

const TabBarminor = () => {
  const [activeTab, setActiveTab] = useState('posts');
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setActiveTab('posts')}>
          <Text
            style={[
              styles.tabtext,
              {fontWeight: activeTab === 'posts' ? 'bold' : '400'},
            ]}>
            Posts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab('photos')}>
          <Text
            style={[
              styles.tabtext,
              {fontWeight: activeTab === 'photos' ? 'bold' : '400'},
            ]}>
            Photos
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.tabLine]}>

      <View
          style={{
            borderWidth: activeTab === 'posts' ? 3.5:0,
            borderColor:'rgba(135, 206, 235, 1)',
            width: activeTab === 'posts' ? '50%':"0%",
            bottom:4,
            borderRadius:5,
          }}
        />

        <View
          style={{
            borderWidth: activeTab === 'photos' ? 3.5:0,
            width : activeTab === 'photos' ? '50%' : '0%',
            borderColor:'rgba(135, 206, 235, 1)',
            marginLeft:191,
            bottom:4, 
            borderRadius:5,
          }}
        />
      </View>

      {activeTab === 'posts' && (
        <Photos /> 
      )}

      {activeTab === 'photos' && (
        <Photos /> 
      )}
    </View>
  );
};

export default TabBarminor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-around',
    marginBottom:3
  },
  tabtext: {
    textAlign: 'center',
    fontSize: 17,
    marginLeft: 70,
    marginRight: 70,
    color: 'black',
  },
  tabLine: {
    height: 3,
    width: '98%',
    backgroundColor: 'lightblue',
    borderRadius: 3,
    marginLeft: 5,
    borderColor: 'lightblue',
  },
  posts: {
    backgroundColor:'black'
  },
});
