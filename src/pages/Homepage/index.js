import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, BackHandler, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';


function Homepage() {

	function backPressed() {
		Alert.alert(
			'Exit App',
			'Do you want to exit?',
			[
				{ text: 'No', onPress: () => console.log('Cancel Pressed') },
				{ text: 'Yes', onPress: () => BackHandler.exitApp() },
			],
			{ cancelable: false });
		return true;
	}

	useEffect(() => {
		BackHandler.addEventListener("hardwareBackPress", backPressed);

		return () =>
			BackHandler.removeEventListener("hardwareBackPress", backPressed);
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: "#0454A4", paddingTop: 20, paddingBottom: 20 }}>
				<Text style={{ ...styles.textBold, fontSize: 25, color: '#fff', textAlign: 'center' }}>Save Your Teeth</Text>
			</View>
			<View style={{ flex: 1, padding: 30 }}>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
					<TouchableOpacity
						onPress={() => { Actions.karies() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/karies.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Karies</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { Actions.karang() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/karang.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Karang</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { Actions.food() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/makanan.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Makanan</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
					<TouchableOpacity
						onPress={() => { Actions.plak() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/plak.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Plak</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { Actions.radang() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/radang.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Radang</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { Actions.flour() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/flour.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Flour</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 50 }}>
					<TouchableOpacity
						onPress={() => { Actions.toothbrush() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/sikatgigi.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Sikat Gigi</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { Actions.cavity() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/gigi_berlubang.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Gigi Berlubang</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { Actions.control() }}
						style={{ flex: 1, alignItems: 'center' }}
					>
						<View style={styles.card}>
							<Image source={require('../../assets/kontrol.png')} style={{ width: 50, height: 50 }} />
						</View>
						<Text style={{ ...styles.textBold, textAlign: 'center', fontSize: 15 }}>Kontrol</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<TouchableOpacity
						onPress={() => { Actions.quiz() }}
						style={{ backgroundColor: '#0454A4', borderRadius: 5, padding: 10, width: 300 }}
					>
						<Text style={{ ...styles.textBold, fontSize: 15, color: '#fff', textAlign: 'center' }}>Quiz</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => { backPressed() }}
						style={{ backgroundColor: '#0454A4', borderRadius: 5, padding: 10, width: 300, marginTop: 10 }}
					>
						<Text style={{ ...styles.textBold, fontSize: 15, color: '#fff', textAlign: 'center' }}>Keluar Aplikasi</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	card: {
		marginBottom: 5,
		backgroundColor: "#fff",
		width: 80,
		padding: 15,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	textBold: {
		fontFamily: 'DMSans-Bold'
	}
});

export default Homepage