import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Control = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: "#0454A4", height: 60 }}>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingRight: 15 }}>
					<TouchableOpacity onPress={() => { Actions.homepage() }}>
						<Image source={require('../../assets/home.png')} style={{ width: 25, height: 25 }} />
					</TouchableOpacity>
					<Text style={{ fontSize: 25, color: '#fff', fontFamily: 'DMSans-Bold' }}>Kontrol Gigi</Text>
					<TouchableOpacity onPress={() => { Actions.quiz() }}>
						<Image source={require('../../assets/next.png')} style={{ width: 20, height: 20 }} />
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={{ padding: 15 }}>
				<View style={{ ...styles.card, marginBottom: 30 }}>
					<Image source={require('../../assets/kontrol-1.png')} style={{ width: '100%', height: 210, borderRadius: 10, marginBottom: 10 }} />
					<Text style={{ fontFamily: 'DMSans-Regular' }}>Setelah melakukan perawatan di klinik gigi, pasien dianjurkan untuk secara rutin melakukan perawatan atau cek ke klinik gigi minimal 6 bulan sekali, atau ketika perlu melakukan perawatan. Misalnya, meskipun baru 2 bulan setelah melakukan pembersihan karang gigi namun karang gigi sudah menumpuk kembali, maka sebaiknya segera melakukan perawatan kembali.</Text>
				</View>
			</ScrollView>
		</View>)
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

export default Control