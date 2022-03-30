import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  blogContainer: {
    width: width * 0.8,
    height: height * 0.65,
    borderWidth: 1,
    backgroundColor: '#f2f2f2',
    borderColor: '#999',
    borderRadius: 10,
  },
  imageStyle: {
    width: '100%',
    height: '80%',
  },
  textBlack: {
    color: '#000',
  },
  button: {
    width: width * 0.8,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
