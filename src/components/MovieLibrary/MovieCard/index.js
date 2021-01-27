import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieCard = (props) => {
  return(
    <View style={styles.movieCard}>
      <Image 
        source={{ uri: props.img }} 
        style={styles.cardImage}
      />
      <View style={styles.movieTitle}>
        <Text style={styles.cardText}>{ props.title }</Text>
      </View>
    </View>
  );
}

export default MovieCard;

const styles = StyleSheet.create({
  movieCard: {
    flex: 1,
    height: 100,
    width: 120,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 8
  },
  cardImage: {
    alignSelf: 'center',
    height: 100,
    width: '100%',
    borderRadius: 8
  },
  movieTitle: {
    position: 'absolute',
    backgroundColor: '#084d6e',
    height: 30,
    width: '100%',
    top: 70,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    justifyContent: 'center'
  },
  cardText: {
    color: '#fff',
    fontSize: 12,
    alignSelf: 'center'
  }
});