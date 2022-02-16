import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';


import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './src/router'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="ligth" backgroundColor="#000" translucent={true} />
      <Routes />
    </SafeAreaProvider>
  )
}
