import React, { useEffect } from 'react'

import GifCard from '../components/GifCard'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InputSearch from '../components/InputSearch'
import useStylesH from '../hooks/useStylesH'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { mainS } from '../styles/index'

import { getGifOri } from '../store/gifDuck'

const Main = () => {
    const Classes = useStylesH(mainS)

    const dispatch = useDispatch()
    const stateStore = useSelector( store => store.gifs)

    const searchGifOri = async () => {
        dispatch(getGifOri())
    }

    useEffect(() => {
        searchGifOri()
    }, [])

    return (
        <View style={Classes.principalContainer}>
            <View style={Classes.inputContainer}>

                <InputSearch />

                <TouchableOpacity onPress={searchGifOri}>
                    <Icon name='search' color='white' size={40} />
                </TouchableOpacity>

            </View>
            <View style={Classes.gifListContainer}>
                <FlatList
                    keyExtractor={(_, i) => i.toString()}
                    data={stateStore.gifOri}
                    numColumns={2}
                    renderItem={({item}) => <GifCard url={item.images.preview_gif.url} id={item.id} />}
                />
            </View>
        </View>
    )
} 

export default Main