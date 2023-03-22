import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

const Cavity = () => {
   return (
      <View style={{ flex: 1 }}>
         <View style={{ backgroundColor: "#0454A4", height: 60 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 15, paddingRight: 15 }}>
               <TouchableOpacity onPress={() => { Actions.homepage() }}>
                  <Image source={require('../../assets/home.png')} style={{ width: 25, height: 25 }} />
               </TouchableOpacity>
               <Text style={{ fontSize: 25, color: '#fff', fontFamily: 'DMSans-Bold' }}>Gigi Berlubang</Text>
               <TouchableOpacity onPress={() => { Actions.control() }}>
                  <Image source={require('../../assets/next.png')} style={{ width: 20, height: 20 }} />
               </TouchableOpacity>
            </View>
         </View>
         <ScrollView style={{ padding: 15 }}>
            <View style={{ ...styles.card, marginBottom: 30 }}>
               <Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>Gejala Gigi Berlubang</Text>
               <Image source={require('../../assets/gigi_berlubang.png')} style={{ width: '100%', height: 300, borderRadius: 10, marginBottom: 10 }} />
               <Text style={{ marginBottom: 10 }}>Gejala dari gigi berlubang bervariasi tergantung dengan luas dan lokasinya. Pada awal terjadinya lubang, umumnya tidak terjadi gejala. Namun seiring dengan membesarnya lubang, maka kemungkinan dapat terjadi gejala seperti :</Text>
               <Text style={{ marginBottom: 5 }}>a. Sakit gigi secara spontan atau nyeri yang terjadi tanpa sebab jelas. </Text>
               <Text style={{ marginBottom: 5 }}>b. Sensitivitas gigi</Text>
               <Text style={{ marginBottom: 5 }}>c. Nyeri ringan hingga tajam ketika makan atau minum yang manis, panas, atau dingin</Text>
               <Text style={{ marginBottom: 5 }}>d. Terdapat lubang yang terlihat pada gigi</Text>
               <Text style={{ marginBottom: 5 }}>e. Terdapat warna coklat, hitam, atau putih pada permukaan gigi</Text>
               <Text>f. Terasa nyeri ketika menggigit makanan</Text>
            </View>
            <View style={{ ...styles.card, marginBottom: 30 }}>
               <Text style={{ fontSize: 15, fontFamily: 'DMSans-Bold', marginBottom: 10 }}>Pencegahan Gigi Berlubang</Text>
               <Image source={require('../../assets/pencegahan_gigi_berlubang.png')} style={{ width: '100%', height: 300, borderRadius: 10, marginBottom: 10 }} />
               <Text style={{ marginBottom: 5 }}>Kebersihan mulut dan gigi yang baik dapat membantu menghindari gigi berlubang dan kerusakan gigi. Berikut adalah beberapa cara untuk mnembantu mencegah gigi berlubang</Text>
               <Text style={{ marginBottom: 5 }}>1. Sikat gigi dengan pasta gigi ber fluoride setelah makan atau  minum. Sikat gigi minimal 2 kali sehari dan setelah makan. Untuk membersihkan sela antara gigi dapat menggunakan interdental atau floss</Text>
               <Text style={{ marginBottom: 5 }}>2. Gunakan cairan kumur antiseptic secara rutin setiap hari</Text>
               <Text style={{ marginBottom: 5 }}>3. Hindari sering makan makanan manis, konsumsi minuman selain air putih dapat membantu bakteri mulut membentuk asam yang dapat menghancurkan enamel gigi</Text>
               <Text style={{ marginBottom: 5 }}>4. Mengkonsumsi makanan yang menyehatkan gigi. Makanan seperti buah dan sayuran segar dapat membantu meningkatkan air liur. Kopi tanpa pemanis, teh, dan permen karet bebas gula membantu membersihkan partikel makanan</Text>
               <Text style={{ marginBottom: 5 }}>5. Selalu rajin periksa gigi dengan dokter gigi secara rutin 6 bulan sekali.</Text>
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

export default Cavity