import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Toothbrush = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: "#0454A4", height: 60 }}>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingRight: 15 }}>
					<TouchableOpacity onPress={() => { Actions.homepage() }}>
						<Image source={require('../../assets/home.png')} style={{ width: 25, height: 25 }} />
					</TouchableOpacity>
					<Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>Sikat Gigi</Text>
					<TouchableOpacity onPress={() => { Actions.cavity() }}>
						<Image source={require('../../assets/next.png')} style={{ width: 20, height: 20 }} />
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={{ padding: 15 }}>
				<View style={{ ...styles.card, marginBottom: 30 }}>
					<Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>Cara Menyikat Gigi</Text>
					<Image source={require('../../assets/sikat-gigi-1.png')} style={{ width: '100%', height: 230, borderRadius: 10, marginBottom: 10 }} />
					<Text style={{ marginBottom: 10 }}>Cara menyikat gigi mempengaruhi tingkat kebersihan gigi. Menyikat gigi tidak perlu tekanan karena itu akan menyebabkan gigi abrasi dan rusak. Sikatlah permukaan gigi secara menyeluruh. Setelah menyikat gigi, berkumurlah sampai bersih agar kuman dan sisa makanan tidk tertinggal.</Text>
					<Text style={{ marginBottom: 10 }}>Cara menyikat gigi yang baik dan benar adalah bagian depan dari atas ke bawah, bagian samping memutar, dan bagian penguyahan maju mundur</Text>
					<Text>Sikat gigi yang baik, adalah sikat gigi yang bulu sikat nya lembut dan diganti 3 bulan sekali</Text>
				</View>
				<View style={{ ...styles.card, marginBottom: 30 }}>
					<Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>Cara Menyimpan Sikat Gigi</Text>
					<Image source={require('../../assets/sikat-gigi-2.png')} style={{ width: '100%', height: 130, borderRadius: 10, marginBottom: 10 }} />
					<Text style={{ marginBottom: 10 }}>a. Perhatikan jarak menyimpan sikat gigi dengan WC, sebab WC mengandung banyak bakteri. Apabila sikat gigi disimpan di dekat WC, bakteri dari WC dapat menempel ke sikat gigi</Text>
					<Text style={{ marginBottom: 10 }}>b. Bersihkan sikat gigi hingga benar-benar bersih, kemudian sikat gigi  dikebaskan agar kering dan pastikan sisa-sisa busa pasta gigi sudah tidak enempel pada sikat gigi</Text>
					<Text style={{ marginBottom: 10 }}>c. Lakukan penyimpanan sikat gigi di tempat yang kering. Bakteri menyukai tempat yang lembab</Text>
					<Text style={{ marginBottom: 10 }}>d. Lakukan penyimpanan sikat gigi dengan kepala sikat menghadap ke atas</Text>
					<Text style={{ marginBottom: 10 }}>e. Tidak dibolehkan menggunakan sikat gigi bergantian, termasuk dengan saudara sekalipun</Text>
					<Text style={{ marginBottom: 10 }}>f. Tidak dibolehkan menyimpan sikat gigi berdekatan dengan sikat gigi orang lain</Text>
					<Text style={{ marginBottom: 10 }}>g. Sebaiknya sikat gigi diganti setelah mengalami sakit gigi</Text>
					<Text style={{ marginBottom: 10 }}>h. Sebaiknya sikat gigi diganti secara rutin 3-4 bulan sekali</Text>
				</View>
				<View style={{ ...styles.card, marginBottom: 30 }}>
					<Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>Frekuensi Menyikat Gigi</Text>
					<Image source={require('../../assets/sikat-gigi-3.png')} style={{ width: '100%', height: 230, borderRadius: 10, marginBottom: 10 }} />
					<Text>Frekuensi menyikat gigi menurut American Dental Association (ADA) minimal 2 kali sehari yaitu pagi setelah sarapan dan malam sebelum tidur. Menyikat gigi secara tidak teratur akan menimbulkan efek pada rongga mulut. Plak yang tidak disingkirkan secara sempurna, dapat menyebabkan bau mulut, karies, dan penyakit periodontal.</Text>
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

export default Toothbrush