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
// import LinearGradient from 'react-native-linear-gradient';
// import * as Progress from 'react-native-progress';
const headerImage=require('./assets/images/header.jpg');
const notification = require('./assets/images/Notification.png');
const banner = require('./assets/images/BG.png');
const fire = require('./assets/images/fire.png');
const model = require('./assets/images/model.png');
const couple = require('./assets/images/couple.png');
const cycle = require('./assets/images/cycle.png');
const yoga = require('./assets/images/yoga.png');
const walk = require('./assets/images/walk.png');
const next = require('./assets/images/next.png');
const play = require('./assets/images/play.png');
const star = require('./assets/images/Star.png');
const book = require('./assets/images/Book.png');
const home = require('./assets/images/Home.png');
const heart = require('./assets/images/H.png');
const calendar = require('./assets/images/Calendar.png');
const profile = require('./assets/images/User.png');
const plus = require('./assets/images/Plus.png');


const App = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View> 
        <Header />
        <Banner />
      </View>
      <View style={{marginHorizontal: '3%'}}>
        <Label>Your Activities</Label>
        <View style={{flexDirection: 'row'}}>
          {data.map((item, index) => (
            <Card data={item} index={index}/>
          ))};
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Label>Fitness Video</Label>
          <Text
            style={{
              fontFamily: 'Helvetica',
              opacity: 0.5,
              fontSize: 12, 
            }}>
              View All
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <VideoPlay index={index}/>
            ))}
        </View>
      </View>
    </SafeAreaView>
    <BottomTab />
    </>
  );
};

const BottomTab = () => (
  <View
    style={{
      position: 'absolute',
      bottom: 10,
      margin: 10, 
      marginHorizontal: 25, 
      borderRadius: 20, 
      padding: 10,
      backgroundColor: '#EDEDED',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <BottomButton image={home}/>
    <BottomButton image={heart}/>
    <BottomButton 
      image={plus}
      style={{
        position: 'absolute',
        left: '43%',
        top: -25,
        backgroundColor: '#fff',
        padding: 8, 
        borderRadius: 20,
      }}
      />
      <BottomButton />
      <BottomButton image={calendar}/>
      <BottomButton image={profile}/>
  </View>
);

const BottomButton = ({image, style, imageStyle}) => (
  <>
    <View
      style={[
        {
          flex: 1,
          alignSelf: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Image 
        source={image}
        style={[
          {
            height: image === plus ? 40 : 20, 
            width: image === plus ? 40 : 20,
          },
          imageStyle,
        ]}
      />
    </View>
    {image === home && (
      <View 
        style= {{
          width: '10%',
          position: 'absolute',
          height: 2, 
          backgroundColor: '#8860a2',
          bottom: 0, 
          left: 25, 
        }}
      />
    )}
  </>
);

const VideoPlay = () => (
  <View
    style={{
      borderRadius: 15,
      marginHorizontal: 12, 
      shadowOffset: {width: -5, height: 3},
      shadowColor: 'grey',
      shadowOpacity: 0.5,
      shadowRadius: 3,
      backgroundColor: '#fff',
    }}
  >
    <View style={{borderRadius: 10, overflow: 'hidden'}}>
      <ImageBackground
        source={couple}
        style={{
          height: 150,
          width: 300, 
        }}
      >
        <linearGradient
          locations={[0, 1.0]}
          colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.60']}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        > 
        </linearGradient>
      </ImageBackground>
      <Text
        style={{
          position: 'absolute',
          bottom: 5,
          left: 10, 
          fontFamily: 'Helvetica',
          color: '#fff',
        }}
      >
        Transformation
      </Text>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          padding: 5,
          right: 10, 
          top: 10, 
          borderRadius: 5, 
        }}
      >
        <Image source={star} style={{height: 10, width: 10}}/>
      </View>
    </View>
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
      }}
    >
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#8860a2',
        padding: 10, 
        right: 25, 
        top: -15,
        borderRadius: 15, 
        zIndex: 3, 
      }}
    >
      <Image source={play} style={{height: 10, width: 10}} />
    </View>
    <Text style={{fontFamily: 'Helvetica'}}>
      2 Hour Bulking Trainer
    </Text>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontFamily: 'Helvetica', fontSize: 12}}>
        <Image source={book} style={{height: 15, width: 15}}/>
        {'  Beginner'}
      </Text>
      <Text
        style={{
          fontFamily: 'Helvetica',
          fontSize: 12, 
          color: '#8860a2'
        }}
      >
        45 Min
      </Text> 
    </View>
    </View>
  </View>
);



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

