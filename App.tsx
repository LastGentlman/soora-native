import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Nav from './src/components/Nav'
import Intro from './src/components/Intro';
import NewsLetter from './src/components/NewsLetter';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
          <LinearGradient
            colors={['rgba(59, 89, 152, 0.1)', 
                      'rgba(59, 89, 152, 0.1))',
                      'rgba(255, 0, 0, 0.05)']}
                      start={[0.5, 0.1]}
                      end={[0.5, 0.1]}
                      style={styles.linearGradient}
          />
          <Nav/>
          <Intro/>
          <NewsLetter/>
          <Footer/>
              
          <StatusBar style='auto' />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    filter: 'blur(344.294px)'
  },
});
