import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Quiz = () => {
	function openLink() {
		Linking.openURL('http://bit.ly/teethapps');
	}
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 50 }}>Quiz</Text>
			<Image source={require('../../assets/quiz.png')} style={{ width: 300, height: 212, marginBottom: 30 }} />
			<Text style={{ fontSize: 20, marginBottom: 10, fontFamily: 'DMSans-Regular' }}>Silahkan kerjakan quiz di link bawah ini</Text>
			<Text style={{ fontSize: 18, fontStyle: 'italic', marginBottom: 50, textDecorationLine: 'underline', color: 'blue', fontFamily: 'DMSans-Regular' }} onPress={() => openLink()}>Mulai Quiz</Text>
			<TouchableOpacity
				onPress={() => { Actions.homepage() }}
				style={{ backgroundColor: '#0454A4', borderRadius: 5, padding: 10, width: 323 }}
			>
				<Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', color: '#fff', textAlign: 'center' }}>Selesai</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		marginBottom: 15,
		backgroundColor: "#fff",
		padding: 15,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5
		},
		shadowOpacity: 2.25,
		shadowRadius: 3.84,
		elevation: 5
	}
})

export default Quiz