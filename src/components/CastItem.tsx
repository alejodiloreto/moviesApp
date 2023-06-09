import React, { useMemo } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
  actor: Cast
}

const CastItem = ({ actor }: Props) => {
  const uri = useMemo(() => `https://image.tmdb.org/t/p/w500/${actor.profile_path}`, [actor.profile_path])

  return (
    <View style={styles.container} >
      {actor.profile_path &&
        <Image
          source={{ uri }}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      }
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }} >
          {actor.name}
        </Text>
        {actor.character &&
          <Text style={{ fontSize: 16, opacity: 0.7 }} >
            {actor.character}
          </Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    height: 50,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginRight: 30,
    paddingRight: 20,
  }

})

export default CastItem