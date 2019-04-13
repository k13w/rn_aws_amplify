import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({

backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 70
  },
  logoText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.6
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 18,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 18,
    backgroundColor: '#380B61',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default styles;