import { StyleSheet, View, Image, Text, Alert, Pressable } from 'react-native'
import * as Linking from 'expo-linking'

const contactUs = () => {
    Alert.alert("Reach out to us through", "sooratheapp@gmail.com",
      [ 
        {
          text: "Cancel",
          style: 'cancel'
        },
        {
          text: "Contact",
          onPress: () => {
            Linking.openURL('mailto:sooratheapp@gmail.com');
          }
        }
      ],
      {
        cancelable: true,
      }
    )
}

export default function Nav() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
            />
            <Pressable style={styles.button} onPressOut={contactUs}>
                <Text style={styles.textBtn}>Contact Us</Text>
                <Image
                    style={styles.imgBtn}
                    source={require('../../assets/images/contact-icon.png')}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 420,
        marginRight: 20,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 74,
        height: 16
    },
    button: {
        width: 97,
        height: 32,
        borderRadius: 4,
        backgroundColor: 'rgb(0,0,0)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textBtn: {
        color: 'white',
        fontSize: 10,
        marginRight: 8,
        fontWeight: 'bold'
    },
    imgBtn: {
        width: 10,
        height: 10,
    },
})