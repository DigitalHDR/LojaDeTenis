//src/pages/Home
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Shoes from '../../components/Shoes'

import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/banner.png')}
            style={styles.Image}
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>TÊNIS</Text>
            <Text style={[styles.text, { color: '#808080' }]}>●</Text>
            <Text style={[styles.text, { color: '#808080' }]}>MASCULINO</Text>
            <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
              <Icon
                name='sort' />
            </TouchableOpacity>
          </View>

          <View style={styles.line} />

          <Text style={styles.text}>LANÇAMENTOS</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/1.png')} cost="R$140,90" onClick={() => navigation.navigate('Detail')}>
              Nike Air Max Dia
            </Shoes>
            <Shoes img={require('../../assets/2.png')} cost="R$280,90" onClick={() => navigation.navigate('Detail')}>
              Nike Downshifter 10
            </Shoes>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/3.png')} cost="R$560,90" onClick={() => alert('clicou')}>
              Nike Squidward Tentacles
            </Shoes>
            <Shoes img={require('../../assets/4.png')} cost="R$220" onClick={() => alert('clicou')}>
              Nike Epic React Flyknit 2
            </Shoes>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/5.png')} cost="R$120,90" onClick={() => alert('clicou')}>
              Nike Joyride Run Flyknit
            </Shoes>
            <Shoes img={require('../../assets/6.png')} cost="R$920" onClick={() => alert('clicou')}>
              Nike Air Max Dia Sujeito Programador
            </Shoes>
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  Image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontSize: 26,
    marginHorizontal: '1%',
    color: '#000000'
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2
  }
})