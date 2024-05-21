import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { style } from '../theme';

var { width, height } = Dimensions.get("window")

export default function MovieLists({ title, data, hideseeall }) {

    let movieNames = 'Animal';
    const navigation = useNavigation();

    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl">{title}</Text>
                {
                    !hideseeall && (
                        <TouchableOpacity>
                            <Text style={style.text} className="text-lg"> See All</Text>
                        </TouchableOpacity>
                    )
                }
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentInsetAdjustmentBehavior={{ paddingHorizontal: 15 }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.push('Movie', item)}
                            >
                                <View className="space-y-1 mr-4">
                                    <Image
                                        source={require('../assets/poster2.jpeg')}
                                        className="rounded-3xl"
                                        style={{
                                            width: width * 0.33,
                                            height: height * 0.22
                                        }}
                                    />

                                    <Text className="mx-auto text-neutral-300 ml-1">
                                        {
                                            movieNames.length > 14 ? movieNames.slice(0, 14) + '...' : movieNames
                                        }
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}