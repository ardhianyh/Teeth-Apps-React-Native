import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Splash = () => {
	const goToDesc = () => {
		Actions.description()
	}
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Image source={require('../../assets/logo.png')} style={{ width: 250, height: 237, marginBottom: 50 }} />
			<Text style={{ fontSize: 35, marginBottom: 30, fontFamily: 'DMSans-Bold' }}>Save Your Teeth</Text>
			<TouchableOpacity
				onPress={goToDesc}
				style={{ backgroundColor: '#0454A4', borderRadius: 5, padding: 10, width: 125 }}
			>
				<Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', fontFamily: 'DMSans-Bold' }}>Mulai</Text>
			</TouchableOpacity>
		</View>
	)
}


export default Splash