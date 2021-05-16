import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import useStylesH from '../hooks/useStylesH'

import gifCardS from '../styles/components/gifCardS'

import { useNavigation } from '@react-navigation/native'

const GifCard = (props) => {
    const Classes = useStylesH(gifCardS)
    const { url, id } = props

    const { navigate } = useNavigation()

    const onDetails = () => {
        navigate('Details', { id: id })
    }

    return (
        <TouchableOpacity
            style={Classes.principalContainer}
            onPress={onDetails}
        >
            <Image source={{ uri: url }} style={Classes.imageStyle} />
        </TouchableOpacity>
    )
}

export default GifCard
