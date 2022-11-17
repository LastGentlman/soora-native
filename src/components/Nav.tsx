import { StyleSheet, View, Image } from 'react-native'

export default function Nav() {
    return (
        <View>
            <Image
                style={styles.logo}
                source={{uri:'../../assets/images/logo.png'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '500px',
        height: '20px',
        display: 'flex',
        border: 'red 15px solid',
    },
    logo: {

    }
})