import React, { Component } from 'react'
import { View ,Text,StyleSheet,Image} from 'react-native'
import { Card } from 'react-native-paper'

export default class toolbar extends Component {
  render() {
    return (
        <View
            style={{
                marginTop: 30,
                padding: 20,
            }}
        >
    
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image source={require('../assets/setting_ic.png')} style={{width: 20, height: 20}} />
                    <Text
                        style={{
                            fontSize: 20,
                            marginLeft: 10,
                            color: '#000',
                        }}
                    >
                        Gestionnaire des autorisations
                    </Text>
                    <Image source={require('../assets/premium.png')} style={{width: 20, height: 20, position: 'absolute', right: 10}} />
                </View>
        
        </View>
    )
  }
}

//cours sur les composants 
//comment aligner les composants 
//comment les styliser
//comment les rendre interactifs
//comment les rendre dynamiques

//1 - comment aligner les composants
//pour aligner les composants, on utilise la propriété flexbox de css pour aligner les composants dans un conteneur parent
//il y a deux propriétés flexbox principales: flexDirection et justifyContent
//flexDirection: permet de définir l'axe principal du conteneur 
//justifyContent: permet de définir l'alignement des composants sur l'axe principal
//

