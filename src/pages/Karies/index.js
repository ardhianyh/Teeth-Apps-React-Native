import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Karies = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ backgroundColor: "#0454A4", height: 60 }}>
				<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingRight: 15 }}>
					<TouchableOpacity onPress={() => { Actions.homepage() }}>
						<Image source={require('../../assets/home.png')} style={{ width: 25, height: 25 }} />
					</TouchableOpacity>
					<Text style={{ fontSize: 25, color: '#fff', fontFamily: 'DMSans-Bold' }}>Karies</Text>
					<TouchableOpacity onPress={() => { Actions.karang() }}>
						<Image source={require('../../assets/next.png')} style={{ width: 20, height: 20 }} />
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={{ padding: 15 }}>
				<View style={styles.card}>
					<Text style={{ fontFamily: 'DMSans-Regular' }}>Karies atau Gigi berlubang adalah kerusakan permanen pada bagian permukaan keras pada gigi yang berkembang menjadi pembukaan atau lubang kecil. Gigi berlubang juga disebut dengan kerusakan gigi atau karies, disebabkan oleh kombinasi beberapa faktor, termasuk bakteri di dalam mulut, tidak membersihkan gigi dengan baik sering mengonsumsi makanan ringan dan minuman yang manis.</Text>
				</View>
				<View style={{ paddingRight: 15, paddingLeft: 15 }}>
					<Text style={{ fontSize: 16, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>3 Macam Karies</Text>
				</View>
				<View style={styles.card}>
					<Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>Karies Email</Text>
					<Image source={require('../../assets/karies-1.png')} style={{ width: '100%', height: 150, borderRadius: 10, marginBottom: 10 }} />
					<Text style={{ marginBottom: 5 }}>Pada karies ini belum dirasakan apapun, sehingga pasien kadang mengabaikannya.</Text>
					<Text style={{ fontFamily: 'DMSans-Regular', marginBottom: 10 }}>Jika dibiarkan saja maka kuman yang terselip pada karies email ini akan terus memproduksi asam, sehinggan akan lama kelamaan merusak dan masuk ke dalam bagian dentin gigi</Text>
					<Image source={require('../../assets/karies-1-1.png')} style={{ width: '100%', height: 300, borderRadius: 10 }} />
				</View>
				<View style={styles.card}>
					<Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>Karies Dentin</Text>
					<Image source={require('../../assets/karies-2.png')} style={{ width: '100%', height: 150, borderRadius: 10, marginBottom: 10 }} />
					<Text style={{ fontFamily: 'DMSans-Regular', marginBottom: 10 }}>Disebut karies dentin karena lubang sudah mencapai pada bagian dentin gigi. Penderita biasanya akan merasakan ngilu bila terkena rangsangan dingin</Text>
					<Image source={require('../../assets/karies-2-2.png')} style={{ width: '100%', height: 300, borderRadius: 10 }} />
				</View>
				<View style={{ ...styles.card, marginBottom: 30 }}>
					<Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>Karies Pulpa</Text>
					<Image source={require('../../assets/karies-3.png')} style={{ width: '100%', height: 150, borderRadius: 10, marginBottom: 10 }} />
					<Text style={{ fontFamily: 'DMSans-Regular', marginBottom: 10 }}>Disebut karies pulpa karena lubang sudah mencapai bagian lebih dalam yakni pulpa gigi Penderita akan merasakan sakit apabila terkena rangsangan dingin dan biasanya menimbulkan keluhan seperti pusing dan pegal di leher</Text>
					<Image source={require('../../assets/karies-3-3.png')} style={{ width: '100%', height: 300, borderRadius: 10, marginBottom: 10 }} />
					<Text style={{ fontFamily: 'DMSans-Regular' }}>Perawatan lubang gigi dilakukan dengan penambalan menggunakan GI pada karies email dan karies dentin. Pada karies pulpa dilakukan perawatan PSA atau Perawatan Saluran Akar</Text>
				</View>
			</ScrollView>
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
	},
	textBold: {
		fontFamily: 'DMSans-Bold'
	}
})

export default Karies