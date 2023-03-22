import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const Description = () => {
	const goToHome = () => {
      Actions.homepage()
    }
	return (
		<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			<Text style={{fontSize:27,fontFamily:'DMSans-Bold',marginBottom:50}}>Penjelasan Aplikasi</Text>
			<Image source={require('../../assets/desc.png')} style={{width:218,height:254,marginBottom:20}}/>
			<View style={{padding:30}}>
				<Text style={{textAlign:'center',fontSize:15,color:'#646060',marginBottom:20,fontFamily:'DMSans-Regular'}}>
					“Aplikasi digunakan sebagai sarana penyuluhan kesehatan gigi dan mulut guna meningkatkan derajat kesehatan gigi dan mulut”
				</Text>
			</View>
			<TouchableOpacity onPress={goToHome} style={{backgroundColor:'#0454A4',borderRadius:5,padding:10,width:100}}>
				<Text style={{fontSize:15,fontFamily:'DMSans-Bold',color:'#fff',textAlign:'center'}}>Lanjut</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Description