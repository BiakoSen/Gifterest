import axios from 'axios'

export const key = 'Sabyaquy79iQU6qa2NMIIkjo7148cl45'

const url = `http://api.giphy.com/v1`

const http = axios.create({
    baseURL: url,
    validateStatus: status => {
        if (status === 401) {

            Alert.alert("Lol", "esto no debe pasar", [
                {
                    text: "Ok",
                    onPress: () => logOutApp(),
                },
            ])

            return true
        } else {
            return status >= 200 && status < 300
        }
    },
})

export {http}