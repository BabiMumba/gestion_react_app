import React, { Component } from 'react'
import { View,Text,Image } from 'react-native'
import { Card } from 'react-native-paper'

export default class Resultat extends Component {
    render() {
      return (
        <View>
          <Card
              style={{
                  margin: 10,
                  padding: 10,
                  borderRadius: 10,
              }}
          >
            <Card.Content>
              <View
                  style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexWrap: 'wrap', // Permet au texte de se répartir sur plusieurs lignes
                  }}
              >
                  <Image source={require('../assets/mobile_ic.png')} style={{width: 50, height: 50}} />
                  <Text
                      style={{
                          fontSize: 30,
                          marginLeft: 10,
                          color: 'red',
                          fontWeight: 'bold',
                      }}
                  >
                      24%
                  </Text>
                  <Text
                      style={{
                          fontSize: 18,
                          marginLeft: 10,
                          color: '#000',
                          fontFamily: 'sans-serif',
                          flex: 1, // Prend l'espace disponible restant
                          flexWrap: 'wrap',
                      }}
                      numberOfLines={3} // Limite le nombre de lignes
                  >
                      De Votre batterie est utilisée par l'application mobile Ghost
                  </Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      )
    }
  }
  
