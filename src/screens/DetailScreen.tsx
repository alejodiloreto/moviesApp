import { StackScreenProps } from '@react-navigation/stack'
import React, { useMemo } from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieDBInterface';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

const { height } = Dimensions.get('screen')

const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params as Movie;
  const uri = useMemo(() => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`, [movie.poster_path])
  const { isLoading, cast, fullMovie } = useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder} >
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{movie.title}</Text>
      </View>
      {isLoading ?
        <ActivityIndicator color='grey' size={35} style={{ marginTop: 20 }} />
        : <MovieDetails fullMovie={fullMovie!} cast={cast} />
      }
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name={'arrow-back-outline'} color='white' size={30} />
      </TouchableOpacity>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    backgroundColor: "#fff",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  backButton: {
    position: 'absolute',
    elevation: 9,
    top: 30,
    left: 5
  }
})

export default DetailScreen