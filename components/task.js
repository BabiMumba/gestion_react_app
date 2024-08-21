import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default class Task extends Component {
  render() {
    return (
      <View style={styles.taskWrapper}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
          <Image source={require('../assets/security.png')} style={styles.image} />
            <Text style={styles.cardText}>{this.props.title}</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  taskWrapper: {
    width: '45%',  // Prend environ la moitié de la largeur de l'écran
    margin: 10,   // Espace entre les cartes
  },
  card: {
    padding: 20,
    borderRadius: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
