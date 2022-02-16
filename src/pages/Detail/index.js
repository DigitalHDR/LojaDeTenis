//src/pages/Detail
import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot'

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
  }
})