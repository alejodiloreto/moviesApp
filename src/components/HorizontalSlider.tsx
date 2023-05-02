import React from 'react'
import { Movie } from '../interfaces/movieDBInterface';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MovieCard from './MovieCard';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{
      height: title ? 260 : 220,
    }}>
      {title &&
        <Text style={styles.title}>
          {title}
        </Text>
      }
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        keyExtractor={(item => item.id.toString())}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  }

})

export default HorizontalSlider