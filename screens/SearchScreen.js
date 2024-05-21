import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Dimensions, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading';

var { width, height } = Dimensions.get('window');

export default function SearchScreen() {
    const movieName = "Iron Man : The First Hero in marvel"
    const navigation = useNavigation();
    const [result, setresult] = useState([])
    const [isloading, setisloading] = useState(true);

    return (
        <SafeAreaView className="bg-neutral-800 flex-1">
            <View
                className="mx-4 mt-10 mb-3 flex-row justify-between item-center border border-neutral-500 rounded-full">
                <TextInput
                    placeholder='Search Movies...'
                    placeholderTextColor={'lightgray'}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider" />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="rounded-full p-3 m-1 bg-neutral-500">
                    <XMarkIcon size="25" color="white" />
                </TouchableOpacity>
            </View>

            {/* Result of search */}
            {
                isloading ? (
                    <Loading />
                ) : (
                    result.length > 0 ? (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 15 }}
                            className="space-y-3">
                            <Text className="text-white font-semibold ml-1">Results ({result.length})</Text>
                            <View className="flex-row justify-between flex-wrap">
                                {
                                    result.map((item, index) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                key={index}
                                                onPress={() => navigation.push("Movie", item)}
                                            >
                                                <View className="p-2 space-y-2 mb-4">
                                                    <Image className="rounded-3xl"
                                                        source={require('../assets/ironposter.jpeg')}
                                                        style={{ width: width * 0.44, height: height * 0.3 }}
                                                    />
                                                    <Text className="text-neutral-300 ml-1">
                                                        {
                                                            movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName
                                                        }
                                                    </Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    ) : (
                        <View className="flex-row justify-center">
                            <Text className="text-center text-neutral-400">No Movies Found🙏🏼</Text>
                        </View>
                    )
                )
            }
        </SafeAreaView>
    )
}