import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline'
import { style, theme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import Cast from '../components/Cast'
import MovieLists from '../components/MovieLists'
import Loading from '../components/Loading'

var { width, height } = Dimensions.get('window');

export default function MovieScreen() {
    const { params: item } = useRoute();
    const navigation = useNavigation();
    const [isfav, togglefav] = useState(false);
    const [cast, setcast] = useState([1, 2, 3, 4, 5]);
    const [similar, setsimilar] = useState([1, 2, 3, 4, 5]);
    const [isloading, setisloading] = useState(false)

    const movieName = "Animal"
    useEffect(() => {
        // call movie details api

    }, [item])
    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className='flex-1 bg-neutral-900'
        >
            <View className='w-full'>
                <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={style.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokewidth={2} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => togglefav(!isfav)}>
                        <HeartIcon size="35" color={isfav ? theme.background : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>

                {
                    isloading ? (
                        <Loading />
                    ) : (
                        <View>
                            <Image
                                source={require('../assets/poster2.jpeg')}
                                style={{ width, height: height * 0.55 }}
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                style={{ width, height: height * 0.40 }}
                                start={{ x: 0.5, y: 0 }}
                                end={{ x: 0.5, y: 1 }}
                                className="absolute bottom-0 "></LinearGradient>
                        </View>
                    )
                }

            </View>

            {/* movie details  */}
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieName}
                </Text>
                {/* status runtime */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released ▪ 2023 ▪ 230 min
                </Text>
                {/* generes */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action ▪
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thrill ▪
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Drama
                    </Text>
                </View>
                {/* Description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    A father, who is often away due to work, is unable to comprehend the intensity of his son's love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and son.
                </Text>

                {/* casts*/}
                <Cast navigation={navigation} cast={cast} />

                {/* Similar movies like this */}
                <MovieLists title="Similar Movies" hideseeall={true} data={similar} />
            </View>
        </ScrollView>
    )
}