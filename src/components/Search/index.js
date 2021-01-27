import React from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Search() {

  return(
    <View style={ styles.viewSearch }>
      <TextInput 
        style={styles.input}
        placeholder="Procurando algo?"
        placeholderTextColor="#fff"
      />
      <TouchableOpacity style={styles.icon}>
        <Icon name="search" color="#fff" size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewSearch: {
    marginTop: 20,
    backgroundColor: '#171717',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input: {
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 15
  },
});
