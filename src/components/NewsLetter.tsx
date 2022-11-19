import { View, Image, Text, StyleSheet, TextInput, Alert, Pressable} from 'react-native'
import { useFonts } from 'expo-font'
import { useState } from 'react'
import * as Linking from 'expo-linking'


export default function NewsLetter() {
    const [fontsLoaded] = useFonts({
        'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
        'Inter-Reg': require('../../assets/fonts/Inter-Regular.ttf'),
        'Inter-Med': require('../../assets/fonts/Inter-Medium.ttf'),
        'Inter-Semi': require('../../assets/fonts/Inter-SemiBold.ttf'),
    })

    const [inputValue, setInputValue] = useState('')

    if (!fontsLoaded) {
        return null;
    }

    const inputHandler = (e: string) => {
        setInputValue(e)
    }

    const onClick = () => {
        Alert.alert("Hello, This is a demo exercice", "created by @IngRoy.com",
          [ 
            {
              text: "Ok 👍",
            }
          ],
          {
            cancelable: true,
          }
        )
        setInputValue('')
    }    

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.smallText}>
                    — Comming Soon
                </Text>
                <Text style={styles.bigText}>
                    Get Notified
                </Text>
                <Text style={styles.bigText}>
                    When we Launch
                </Text>
                <View style={styles.inputContainer}>
                    <Pressable style={styles.notifyBtn} onPressOut={onClick}>
                        <Text style={styles.textBtn}>Notify Me</Text>
                    </Pressable>
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        onChangeText={inputHandler}
                        value={inputValue}
                    />
                </View>
            </View>
            <Text style={styles.noWorrys}>
                Don’t worry, we won’t spam you :)
            </Text>
            <Image 
                style={styles.demoImg}
                source={require('../../assets/images/landing-image-1.png')}
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
        fontFamily: 'Inter-Bold',
    },
    inputContainer: {
        marginTop: 16,
    },
    notifyBtn: {
        width: 100,
        height: 36,
        borderRadius: 100,
        backgroundColor: 'rgba(11,11,11,1)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 4,
        left: 246,
        zIndex:2
    },
    textBtn: {
        color: 'rgb(255,255,255)',
        fontFamily: 'Inter-Med',
        fontSize: 12,
        width: 57,
        height: 15,
    },
    input: {
        width: 350,
        height: 45,
        borderRadius: 100,
        borderStyle: 'solid',
        borderColor: 'rgba(11,11,11,1)',
        borderWidth: 1,
        position: 'absolute',
    },
    noWorrys: {
        fontSize: 12,
        fontWeight: '500',
        alignSelf: 'center',
        marginBottom: 8,
        fontFamily: 'Inter-Reg',
        marginTop: 16
    },
    demoImg: {
        width: 350,
        height: 396,
        marginTop: 30
    }
})