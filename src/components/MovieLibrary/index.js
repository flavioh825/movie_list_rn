import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

import MovieCard from './MovieCard';

export default function MovieLibray(props) {
  const navigation = useNavigation();

  return(
    <View style={styles.categoryView}>
      <Text style={styles.categoryTitle}>{props.title}</Text>
      <ScrollView horizontal={true}>
        { 
          props.lista.map((movie, idx) => { 
            return(
              <TouchableOpacity key={idx} onPress={() => navigation.navigate('Info', { item: movie })}>
                <MovieCard img={movie.img} title={movie.title} /> 
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryView: {
    width: screenWidth,
    height: 160
  },
  categoryTitle: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginLeft: 10, 
    marginVertical: 10
  },
  categoryList: {
    width: '100%',
    height: 100,
    right: 140
  },
  categorySlide: {
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
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
});