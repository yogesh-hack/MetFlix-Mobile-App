import { View, Text, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline'
import { style, theme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import MovieLists from '../components/MovieLists'
import Loading from '../components/Loading'

var { width, height } = Dimensions.get('window');

export default function PersonScreen() {
    const navigation = useNavigation();
    const [isfav, togglefav] = useState(false);
    const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5])
    const [isloading, setisloading] = useState(false);

    return (
        <ScrollView
            className="flex-1 bg-neutral-900"
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={style.background} className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokewidth={2} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => togglefav(!isfav)}>
                    <HeartIcon size="35" color={isfav ? theme.background : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* cast person details */}
            {
                isloading ? (
                    <Loading />
                ) : (
                    <View>
                        <View className="flex-row shadow-xl justify-center"
                            style={{
                                shadowColor: 'gray',
                                shadowRadius: 40,
                                shadowOffset: { width: 0, height: 5 },
                                shadowOpacity: 1
                            }}
                        >
                            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                                <Image
                                    source={require('../assets/castImage.jpeg')}
                                    style={{
                                        height: height * 0.43,
                                        width: width * 0.74
                                    }} />
                            </View>
                        </View>

                        <View className="mt-4">
                            <Text className="text-3xl text-white font-bold text-center">
                                Ranbir Kapoor
                            </Text>
                            <Text className="text-base text-neutral-500 text-center">
                                Mumbai, India
                            </Text>
                        </View>

                        <View className="mx-3 p-4 mt-4 flex-row justify-between items-center bg-neutral-700 rounded-full ">
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Gender</Text>
                                <Text className="text-neutral-300 text-sm">Male</Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Birthday</Text>
                                <Text className="text-neutral-300 text-sm">1964-09-02</Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Known for</Text>
                                <Text className="text-neutral-300 text-sm">Acting</Text>
                            </View>
                            <View className="px-2 items-center">
                                <Text className="text-white font-semibold">Pupularity</Text>
                                <Text className="text-neutral-300 text-sm">64.23</Text>
                            </View>
                        </View>
                        {/* Biography */}
                        <View className="my-8 mx-4 space-y-2">
                            <Text className="text-white text-lg">Biography</Text>
                            <Text className="text-neutral-400 tracking-wide">
                                Son of Rishi Kapoor and Neetu Singh; nephew of actors Randhir Kapoor, Rajiv Kapoor, Kunal Kapoor. Grandnephew of actors Shashi Kapoor, Jennifer Kendal, Shammi Kapoor, Geeta Bali; cousin of actresses Kareena Kapoor, Karisma Kapoor.Belongs to the fourth generation of highly prestigious and considered to be the first family of Bollywood (Hindi film industry): Kapoor Family.He and his Saawariya (2007) co-star Sonam Kapoor assisted Sanjay Leela Bhansali on highly acclaimed movie Black (2005).
                            </Text>
                        </View>
                        {/* Movies */}
                        <MovieLists title={'Movies'} data={personMovies} />
                    </View>
                )
            }

        </ScrollView>
    )
}