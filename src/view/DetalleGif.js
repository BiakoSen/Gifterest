import React, { useEffect } from 'react'
import { Image, View, Text } from 'react-native'
import useStylesH from '../hooks/useStylesH'
import detalleGifS from '../styles/view/detalleGifS'

import { useDispatch, useSelector } from 'react-redux'
import { getGif } from '../store/gifDuck'


const DetalleGif = ({ route }) => {

    const { id } = route.params
    const Classes = useStylesH(detalleGifS)

    const dispatch = useDispatch()
    const stateStore = useSelector(store => store.gifs)

    useEffect(() => {
        dispatch(getGif(id, ''))
    }, [])

    return (
        <View style={Classes.principalContainer} >
            <Image source={{ uri: stateStore.gif.images?.original.url }} style={Classes.imageStyle} />
            <Text
                style={Classes.titleGif}
            >
                {stateStore.gif.title}
            </Text>
        </View>
    )
}

export default DetalleGif