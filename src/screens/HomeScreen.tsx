import React from 'react'
import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import MovieCard from '../components/MovieCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider'

const { width } = Dimensions.get('window')

const HomeScreen = () => {
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
  const { top } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }} >
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MovieCard movie={item} />}
            sliderWidth={width}
            itemWidth={300}
          />
        </View>

        <HorizontalSlider title='Populares' movies={popular} />
        <HorizontalSlider title='Mejor valoradas' movies={topRated} />
        <HorizontalSlider title='Por salir' movies={upcoming} />

      </View>
    </ScrollView>
  )
}

export default HomeScreen