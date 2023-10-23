import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ImageBox from './ImageBox';

const Posts = () => {
  <View style={styles.posts}>Posts</View>;
};
const Photos = () => {
  <View style={styles.photos}>Photos</View>;
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
            borderColor:'lightblue',
            width: activeTab === 'posts' ? '50%':"0%",
            bottom:3, // Adjust the width based on your desired split
            borderRadius:5,
            shadowColor:'black',
            
            shadowOffset: { width: 0, height: -3 }, 

          }}
        />
        <View
          style={{
            borderWidth: activeTab === 'photos' ? 3.5:0,
            width : activeTab === 'photos' ? '50%' : '0%',
            borderColor:'lightblue',
            marginLeft:177, // Adjust the width based on your desired split
            bottom:3, // Adjust the width based on your desired split
            borderRadius:5
          }}
        />
      </View>

      {activeTab === 'posts' && (
        <ImageBox /> // Render the PostsComponent when 'Posts' tab is active
      )}

      {activeTab === 'photos' && (
        <Photos /> // Render the PhotosComponent when 'Photos' tab is active
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
  },
  tabtext: {
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 70,
    marginRight: 70,
    color: 'black',
  },
  tabLine: {
    height: 3,
    width: '90%',
    backgroundColor: 'lightblue',
    borderRadius: 3,
    marginLeft: 18,
    borderColor: 'lightblue',
  },
  posts: {
    backgroundColor:'black'
  },
});
