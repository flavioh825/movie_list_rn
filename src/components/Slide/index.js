import React, { useState, useRef } from 'react';
import { 
  View,
  Text,
  Dimensions, 
  StyleSheet, 
  TouchableOpacity,
  Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

export default function Slide(props) {
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  const _renderItem = ({ item, index }) => {
    return(
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Info', { item: item })}>
          <Image 
            source={{ uri: item.img }}
            style={ styles.carouselImg }
          />
          <Text style={ styles.carouselText }></Text>
          <Icon 
            name="play-circle-outline"
            size={30}
            color="#fff"
            style={ styles.carouselIcon }
          />
        </TouchableOpacity>
      </View>
    );
  }

  return(
    <View style={styles.slideView}>
      <Carousel
        style={styles.carousel}
        ref={carouselRef}
        data={props.lista}
        renderItem={_renderItem}
        sliderWidth={screenWidth}
        itemWidth={200}
        inactiveSlideOpacity={0.5}
        onSnapToItem={ index => props.changeBackground(index) }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    flex: 1,
    overflow: 'visible'
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 5)'
  },
  carouselText: {
    padding: 15,
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
})