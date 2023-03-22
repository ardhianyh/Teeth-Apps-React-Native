import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Food = () => {
	return (
		<View style={{flex:1}}>
			<View style={{backgroundColor:"#0454A4",height:60}}>
				<View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:15,paddingRight:15}}>
					<TouchableOpacity onPress={()=>{Actions.homepage()}}>
						<Image source={require('../../assets/home.png')} style={{width:25,height:25}}/>
					</TouchableOpacity>
					<Text style={{fontSize:25,color:'#fff',fontFamily:'DMSans-Bold'}}>Makanan</Text>
					<TouchableOpacity onPress={()=>{Actions.plak()}}>
						<Image source={require('../../assets/next.png')} style={{width:20,height:20}}/>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={{padding:15}}>
				<View style={styles.card}>
					<Text style={{fontSize:15,fontFamily:'DMSans-Bold',marginBottom:10,textAlign:'center'}}>Makanan Yang Menyehatkan Gigi</Text>
					<Image source={require('../../assets/makanan-1.png')} style={{width:'100%',height:130,borderRadius:10,marginBottom:10}}/>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Makanan berdampak besar terhadap masalah yang timbul pada gigi dan gudi anda. Tetapi, makanan juga dapat membuat gigi dan gusi semakin sehat dan terawat.</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Kaya antioksidan seperti buah buahan dan mengandung vitamin C dan E contohnya buah jeruk. Dianjurkan untuk mengkonsumsi buah buahan serta sayur yang baik bagi kesehatan serta menyehatkan gigi</Text>
				</View>
				<View style={{...styles.card,marginBottom:30}}>
					<Text style={{fontSize:15,fontFamily:'DMSans-Bold',marginBottom:10,textAlign:'center'}}>Makanan Yang Merusk Gigi</Text>
					<Image source={require('../../assets/makanan-2.png')} style={{width:'100%',height:130,borderRadius:10,marginBottom:10}}/>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Makanan yang merusak kesehatan gigi adalah makanan yang banyak mengandung glukosa (makanan yang banyak mengandung bahan pemanis) karena makanan yang banyak mengandung glukosa akan mengakibatkan hal yang buruk untuk kesehatan gigi</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Makanan yang mengandung glukosa diantaranya es krim, coklat, dan permen</Text>
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

export default Food