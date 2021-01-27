import React from 'react';
import { 
  View, 
  Text,
  Image, 
  TouchableOpacity,
  ScrollView, 
  Dimensions, 
  StyleSheet,
  ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Info({ route }) {
  const navigation = useNavigation();

  const { item } = route.params

  return(
    <ImageBackground style={styles.bgImage} source={{ uri: item.img }}>
      <View style={styles.moreInfo}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.goBack} onPress={ () => navigation.goBack() }>
            <Icon name="keyboard-arrow-left" color="#fff" size={50}/>
          </TouchableOpacity>
          <Text style={ styles.movieTitle }>{ item.title }</Text>
          <TouchableOpacity style={{ right: 5 }} onPress={ () => alert('Adicionado a sua lista.') }>
            <Icon name="queue" color="#fff" size={30} />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1, padding: 10 }}>
          <TouchableOpacity onPress={ () => alert('Assista ao Filme/Série.') }>
            <Image source={{ uri: item.img }} style={styles.infoImg} />
            <Icon 
              name="play-circle-outline"
              size={100}
              color="#fff"
              style={styles.iconPlay}
            />
          </TouchableOpacity>
          <Text style={ styles.movieTitle }>{ item.title }</Text>
          <Text style={ styles.movieDesc }>{ item.text }</Text>
        </ScrollView>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    height: screenHeight,
    width: screenWidth
  },
  topBar: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    height: 60
  },
  goBack: {
    width: 30,
    right: 5
  },
  moreInfo: {
    backgroundColor: '#171717',
    opacity: 0.9,
    width: screenWidth,
    height: screenHeight,
  },
  infoImg: { 
    width: 200, 
    height: 300, 
    alignSelf: "center", 
    borderRadius: 15, 
    marginBottom: 20 
  },
  iconPlay: { 
    position: "absolute", 
    top: 100, 
    alignSelf: "center" 
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  movieDesc: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  }
});