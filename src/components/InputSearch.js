import React, { useState, useEffect } from 'react'
import { TextInput, View } from 'react-native'
import inputSearchS from '../styles/components/inputSearchS'
import useStylesH from '../hooks/useStylesH'

import { setSearchGif } from '../store/gifDuck'
import { useDispatch } from 'react-redux'


const InputSearch = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const Classes = useStylesH(inputSearchS)

    useEffect(() => {
        dispatch(setSearchGif(value))
    },[value])

    return (
        <View style={Classes.principalContainer}>
            <TextInput
                style={Classes.inputContainer}
                value={value}
                onChangeText={setValue}
                placeholder='Buscar un Gif'
                placeholderTextColor='white'
            />
        </View>
    )
}

export default InputSearch