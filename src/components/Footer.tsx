import { StyleSheet, View, Image, Text } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.socialMedia}>
                <View style={styles.socialIcon}>
                    <Image style={styles.socialImg}
                        source={require('../../assets/images/facebook.png')}
                    />
                </View>
                <View style={styles.socialIcon}>
                    <Image style={styles.socialImg}
                        source={require('../../assets/images/twitter.png')}
                    />
                </View>
                <View style={styles.socialIcon}>
                    <Image style={styles.socialImg}
                        source={require('../../assets/images/instagram.png')}
                    />
                </View>
                <View style={styles.socialIcon}>
                    <Image style={styles.socialImg}
                        source={require('../../assets/images/tiktok.png')}
                    />
                </View>
                <View style={styles.socialIcon}>
                    <Image style={styles.socialImg}
                        source={require('../../assets/images/youtube.png')}
                    />
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.copyRight}>
                <Text>Copyright © 2022 Soora. All rights reserved</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 140,
        width: 390,
        height: 106,
    },
    socialMedia: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16
    },
    socialIcon: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(11,11,11,1)',
        borderRadius: 100,
        width: 40,
        height: 40,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialImg: {
        width: 24,
        height: 24
    },
    line: {
        width: '100%',
        height: 1,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(11,11,11,1)',
    },
    copyRight: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})