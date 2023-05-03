import React, { useContext, useEffect, useMemo } from 'react'
import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import MovieCard from '../components/MovieCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider'
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors'
import { GradientContext } from '../context/GradientContext'

const { width } = Dimensions.get('window')

const HomeScreen = () => {
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies()
  const { top } = useSafeAreaInsets()
  const { setColors } = useContext(GradientContext)

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setColors({
      primary,
      secondary
    })
  }

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0)
    }
  }, [nowPlaying])


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }} >
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MovieCard movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title='Populares' movies={popular} />
          <HorizontalSlider title='Mejor valoradas' movies={topRated} />
          <HorizontalSlider title='Por salir' movies={upcoming} />

        </View>
      </ScrollView>
    </GradientBackground>
  )
}

export default HomeScreen