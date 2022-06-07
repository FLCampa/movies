// External Libraries
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

function Movies({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.nome}</Text>
      <Image style={styles.image} source={{uri: data.foto}} />

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert(data.sinopse)}>
          <Text style={styles.buttonText}>Leia Mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Stylization
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    padding: 15,
  },
  image: {
    height: 250,
    zIndex: 1,
  },
  buttonArea: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    zIndex: 2,
  },
  button: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Movies;
