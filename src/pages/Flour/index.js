import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Flour = () => {
	return (
		<View style={{flex:1}}>
			<View style={{backgroundColor:"#0454A4",height:60}}>
				<View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:15,paddingRight:15}}>
					<TouchableOpacity onPress={()=>{Actions.homepage()}}>
						<Image source={require('../../assets/home.png')} style={{width:25,height:25}}/>
					</TouchableOpacity>
					<Text style={{fontSize:25,color:'#fff',fontFamily:'DMSans-Bold'}}>Flour</Text>
					<TouchableOpacity onPress={()=>{Actions.toothbrush()}}>
						<Image source={require('../../assets/next.png')} style={{width:20,height:20}}/>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={{padding:15}}>
				<View style={{...styles.card,marginBottom:30}}>
					<Image source={require('../../assets/flour-1.png')} style={{width:'100%',height:130,borderRadius:10,marginBottom:10}}/>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Fungsi flour adalah mineral yang dibutuhkan oleh tubuh untuk perkembangan tulang dan gigi serta membantu mencegah karies.</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Sistemik flouride</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Merupakan jenis flouride yang diingesti lalu diabsorbs, didistribusikan dalam tubuh menuju tulang dan gigi</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>1. Flour pada air minum</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>2. Flour pada makanan</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Topical Flouride</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Merupakan jenis pemberian flouride yang secara langsung terhadap permukaan gigi tanpa diabsorbsi dan didistribusikan</Text>
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

export default Flour