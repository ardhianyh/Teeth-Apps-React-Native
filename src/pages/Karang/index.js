import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Karang = () => {
	return (
		<View style={{flex:1}}>
			<View style={{backgroundColor:"#0454A4",height:60}}>
				<View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingLeft:15,paddingRight:15}}>
					<TouchableOpacity onPress={()=>{Actions.homepage()}}>
						<Image source={require('../../assets/home.png')} style={{width:25,height:25}}/>
					</TouchableOpacity>
					<Text style={{fontSize:25,color:'#fff',fontFamily:'DMSans-Bold'}}>Karang</Text>
					<TouchableOpacity onPress={()=>{Actions.food()}}>
						<Image source={require('../../assets/next.png')} style={{width:20,height:20}}/>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView style={{padding:15}}>
				<View style={styles.card}>
					<Image source={require('../../assets/karang-1.png')} style={{width:'100%',height:130,borderRadius:10,marginBottom:10}}/>
					<Text style={{fontSize:15,fontFamily:'DMSans-Bold',marginBottom:10}}>Karang Gigi Ringan</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Karang gigi ringan adalah karang igi yang terdapat di atas gusi atau leher gigi dan dapat dilihat langsung dengan mata tanpa menggunakan alat.</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Karang gigi ringan mempunyai ciri yaitu berasal dari endapan ludah, berwarna putih kekuningan, konsistensinya keras dan terletak diatas gusi</Text>
				</View>
				<View style={{...styles.card,marginBottom:30}}>
					<Image source={require('../../assets/karang-2.png')} style={{width:'100%',height:130,borderRadius:10,marginBottom:10}}/>
					<Text style={{fontSize:15,fontFamily:'DMSans-Bold',marginBottom:10}}>Karang Gigi Berat</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Karang gigi berat yaitu karang gigi yang terletak di dalam saku gusi atau dibawah gusi.</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Akibat dari karang gigi berat adalah akan menyebabkan peradangan pada gusi dan apabila tidak diambil makan akan membuat gigi mudah goyah dan keropos.</Text>
					<Text style={{marginBottom:5,fontFamily:'DMSans-Regular'}}>Karang gigi dapat dihilangkan dengan cara melakukan pembersihan karang gigi (scalling).</Text>
					<Text style={{fontFamily:'DMSans-Regular'}}>Karang gigi terjadi karena adanya sisa makanan yang melekat didalam mulut yang bercampur dengan saliva yang mengandung mineral terutama zat kapur, yang mengalami pengendapan didalam mulut dan lama kelamaan akan terjadinya kalkulus yang mempunyai permukaan kasar dan berwarna kuning</Text>
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

export default Karang