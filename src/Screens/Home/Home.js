//import libraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  TextInput,
} from 'react-native';

// create a component
const Home = ({navigation}) => {
  const [name, setName] = useState('GTC');

  const changeText = () => {
    setName('oooooooooooooooooooooooooooo');
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go To Setting"
        onPress={() => navigation.navigate('Settings')}
      />
      <TextInput secureTextEntry={true}></TextInput>

      <Button title={'press here '} onPress={changeText} />
      <User name={name} />
    </View>
  );
};

const User = props => {
  console.log(props.name);
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Home;
