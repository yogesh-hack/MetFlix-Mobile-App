import { View, Text, SafeAreaView, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { style } from '../theme'
import TrendingMovies from '../components/TrendingMovies'
import MovieLists from '../components/MovieLists'
import Loading from '../components/Loading'
import { fetchtrendingdata } from '../api/moviedb'


const ios = Platform.OS == 'ios';
const HomeScreen = () => {

  const [trending, settrending] = useState([1, 2, 3])
  const [upcomming, setupcomming] = useState([1, 2, 3])
  const [topmovie, settopmovie] = useState([1, 2, 3])
  const [isloading, setisloading] = useState(false)
  const navigation = useNavigation();

  useEffect(() =>{
    gettrendingdata();
  },[])
  
const gettrendingdata = async () => {
  const data = await fetchtrendingdata();
  console.log('Got trending data', data)
}
  return (
    <View className="flex-1 bg-neutral-900">
      <SafeAreaView className='mb-3'>
        {/* <StatusBar style="dark"/> */}
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size='30' strokeWidth={2} color='white' />
          <Text className="text-white text-3xl font-bold">
            <Text style={style.text}>M</Text>etflix
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {
        isloading ? (
          <Loading />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {/* trending movie crousel */}
            <TrendingMovies data={trending} />

            {/* upcomming movies */}
            <MovieLists title="Upcomming" data={upcomming} />

            {/* Top rating Movies */}
            <MovieLists title="Top Rated" data={topmovie} />

          </ScrollView>
        )
      }

    </View>
  )
}

export default HomeScreen