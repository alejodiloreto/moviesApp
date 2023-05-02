import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { FullMovieDetails } from '../interfaces/movieDBInterface'
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';

interface Props {
  fullMovie: FullMovieDetails;
  cast: Cast[]
}

let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

const MovieDetails = ({ fullMovie, cast }: Props) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="star-outline" color='grey' size={16} />

        <Text style={{ marginLeft: 5 }} >{fullMovie.vote_average.toFixed(1)}</Text>
        <Text style={{ marginLeft: 5 }}>
          - {fullMovie.genres.map(genre => genre.name).join(', ')}
        </Text>
      </View>
      <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
        Historia
      </Text>
      <Text style={{ fontSize: 16, marginTop: 5 }}>
        {fullMovie.overview}
      </Text>
      <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
        Presupuesto
      </Text>
      <Text style={{ fontSize: 16, marginTop: 5 }}>
        {formatter.format(fullMovie.budget)} USD
      </Text>

      <View style={{ marginTop: 10, marginBottom: 70 }}>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 70 }}
        />
      </View>
    </View>
  )
}

export default MovieDetails