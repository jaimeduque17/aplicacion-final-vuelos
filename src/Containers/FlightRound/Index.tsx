import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'
import Card from '../../Components/Card'
// import CardTo from '../../Components/CardTo'
import NavBar from '../../Components/NavBar'
import _styles from './Style'

export default class FlightRound extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <NavBar />
          <View style={styles.container1}>
            <Card />
          </View>
          <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnSearch}>{'BUSCAR'}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
