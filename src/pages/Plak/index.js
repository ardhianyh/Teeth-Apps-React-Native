import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Plak = () => {
	return (
		<View style={{flex:1}}>
			<View style={{backgroundColor:"#0454A4",height:60}}>
				<View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:15,paddingRight:15}}>
					<TouchableOpacity onPress={()=>{Actions.homepage()}}>
						<Image source={require('../../assets/home.png')} style={{width:25,height:25}}/>
					</TouchableOpacity>
					<Text style={{fontSize:25,color:'#fff',fontFamily:'DMSans-Bold'}}>Plak</Text>
					<TouchableOpacity onPress={()=>{Actions.radang()}}>
						<Image source={require('../../assets/next.png')} style={{width:20,height:20}}/>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={{padding:15}}>
				<View style={styles.card}>
					<Image source={require('../../assets/plak-1.png')} style={{width:'100%',height:130,borderRadius:10,marginBottom:10}}/>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Plak adalah lapisan tipis, transparan, licin, tidak bisa dilihat dengan mata, berisi bakteri yang melekat pada permukaan gigi.</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Plak biasanya terjadi di seluruh permukaan gigi terutama pada servik (leher gigi) dan aproximal (diantara sela sela gigi)</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Plak bisa terjadi setiap saat, pla tidak bisa dihilangkan tetapi bisa dicegah dengan menggosok gigi dengan benar agar plak tidak terlalu banyak</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Akibat dari plak akan menimbulkan terjadinya calculus (karang gigi), caries (lubang gigi), dan gingivitis (radang pada gusi)</Text>
				</View>
			</ScrollView>
		</View>	)
}

const styles = StyleSheet.create({
	card:{
		marginBottom:15,
		backgroundColor:"#fff",
		padding:15,
		borderRadius:10,
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

export default Plak