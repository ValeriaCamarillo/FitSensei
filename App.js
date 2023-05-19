import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
const headerImage=require('./assets/images/header.jpg')

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const Header = () => (
  <View style={styles.header}>
    <ImageContainer image={headerImage}/>
    <Text>Header</Text>
  </View>
);

const ImageContainer = () => (
  <View style={styles.imageContainer}>
    <Image source={image} style={styles.image}/>
  </View>
);

const styles = StyleSheet.create({
  container: {flex : 1},
  header: {borderWidth: 1, padding: 15, flexDirection: 'row'},
  image: {height: '100%', width: '100%'},
  imageContainer: {height: 50, width: 50, borderRadius: 25},
});

export default App;

