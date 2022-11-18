import { View, Image, Text, StyleSheet} from 'react-native'
import { useFonts } from 'expo-font'


export default function Intro() {
    const [fontsLoaded] = useFonts({
        'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
        'Inter-Reg': require('../../assets/fonts/Inter-Regular.ttf'),
        'Inter-Med': require('../../assets/fonts/Inter-Medium.ttf'),
        'Inter-Semi': require('../../assets/fonts/Inter-SemiBold.ttf'),
    })

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.smallText}>
                    — Comming Soon
                </Text>
                <Text style={styles.bigText}>
                    Bringing
                </Text>
                <Text style={styles.bigText}>
                    Muslims Together
                </Text>
                <View style={styles.storeContainer}>
                    <Image
                        style={styles.gPlay}
                        source={require('../../assets/images/google-play.png')}
                    />
                    <Image
                        style={styles.aStore}
                        source={require('../../assets/images/apple-store.png')}
                    />
                </View>
            </View>
            <Image 
                style={styles.demoImg}
                source={require('../../assets/images/landing-image-2.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60
    },
    textContainer: {
        width: 327,
        height: 174,
    },
    smallText: {
        fontSize: 12,
        fontWeight: '500',
        alignSelf: 'center',
        marginBottom: 8,
        fontFamily: 'Inter-Reg'
    },
    bigText: {
        fontSize: 36,
        fontWeight: '800',
        alignSelf: 'center',
        fontFamily: 'Inter-Bold'
    },
    storeContainer: {
        marginTop: 24,
        width: 269,
        alignContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    gPlay: {
        width: 134,
        height: 39,
    },
    aStore: {
        width: 119,
        height: 39,
    },
    demoImg: {
        width: 350,
        height: 396,
        marginTop: 30
    }
})