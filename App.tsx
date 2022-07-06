import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
    <View>
      <Text>Nice oner</Text>
    </View>
		// <NavigationContainer>
		// 	<Tab.Navigator initialRouteName='Home' >
		// 		<Tab.Screen name='Home' component={HomeScreen} />
		// 	</Tab.Navigator>
		// </NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
