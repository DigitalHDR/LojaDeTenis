//src/pages/Detail
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Botton from '../../components/Botton';
import Dot from '../../components/Dot'
import SizeButton from '../../components/SizeButton'

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Air Max Dia'
  })

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>

        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$280,90</Text>
        </View>

        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>Nike Air Max Dia</Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="#00BFFF" />
          <Dot color="#FF7F50" />
          <Dot color="#A9A9A9" />
          <Dot color="#000000" />
        </View>

        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#ffffff">40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Air Max Dia
          </Text>
          <Text style={styles.textContent}>
            Uma estrutura no mediopé proporciona o suporte que você precisa para a sua corrida. Ele fica mais apertado ao redor do seu pé quando você amarra o cadarço, mantendo o seu pé seguro a cada passo.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>

        <Botton></Botton>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff'
  },
  image: {
    width: '100%',
  },
  title: {
    paddingHorizontal: '2%'
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 32,
    marginVertical: '2%',
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  }
})