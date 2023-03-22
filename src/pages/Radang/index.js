import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Radang = () => {
	return (
		<View style={{flex:1}}>
			<View style={{backgroundColor:"#0454A4",height:60}}>
				<View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:15,paddingRight:15}}>
					<TouchableOpacity onPress={()=>{Actions.homepage()}}>
						<Image source={require('../../assets/home.png')} style={{width:25,height:25}}/>
					</TouchableOpacity>
					<Text style={{fontSize:25,color:'#fff',fontFamily:'DMSans-Bold'}}>Radang</Text>
					<TouchableOpacity onPress={()=>{Actions.flour()}}>
						<Image source={require('../../assets/next.png')} style={{width:20,height:20}}/>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={{padding:15}}>
				<View style={styles.card}>
					<Image source={require('../../assets/radang-gusi-1.png')} style={{width:'100%',height:130,borderRadius:10,marginBottom:10}}/>
					<Text style={{fontSize:15,fontFamily:'DMSans-Bold',marginBottom:10}}>Radang Gusi Ringan</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Radang gusi ringan dalah peradangan pada gusi yang memiliki ciri ciri pada cervik (perbatasan antara gigi dan gusi) berwarna merah tetapi tidak sampai bengkak.</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Radang gusi ringan ini sering terjadi pada saat kita menggosok gigi dan juga bisa disebabkan oleh adanya karang gigiyang tidak segera dibersihkan</Text>
				</View>
				<View style={{...styles.card,marginBottom:30}}>
					<Image source={require('../../assets/radang-gusi-2.png')} style={{width:'100%',height:130,borderRadius:10,marginBottom:10}}/>
					<Text style={{fontSize:15,fontFamily:'DMSans-Bold',marginBottom:10}}>Radang Gusi Berat</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Radang gusi berat adalah peradangan pada gusi yang mempunyai ciri gusi tampak merah dan gusi terlihat membengkak.</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Radang gusi disebabkan oleh karang gigi, radang gusi harus segera dilakukan perawatan dengan cara dihilangkan  karang gig nya</Text>
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

export default Radang