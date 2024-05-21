import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { useNavigation } from '@react-navigation/native'

var {width, height} = Dimensions.get('window');
export default function TrendingMovies({data}) {

    const navigation = useNavigation();
    // handle click functionality
    const handleclick = (item) => {
        navigation.navigate('Movie', item);
    }

  return (
    <View className="mb-8">
        <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
        <Carousel
            data = {data}
            renderItem={({item}) => <MovieCard items={item} handleclick={handleclick}/>}
            firstItem={1}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.62}
            slideStyle= {{display : 'flex', alignItems : 'center'}}
        />
    </View>
  )
}


const MovieCard = ({item, handleclick}) => {
    return (
        <TouchableWithoutFeedback onPress={()=> handleclick(item)}>
            <Image
                source={require('../assets/ironposter.jpeg')}
                style={{
                    width : width * 0.6,
                    height : height*0.4
                }}
                className="rounded-3xl"/>
        </TouchableWithoutFeedback>
    )
}