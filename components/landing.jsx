import React,{useState,useEffect} from 'react'
import {View,SafeAreaView,StyleSheet,Text,TouchableOpacity,Platform,Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker'


const Landing = ()=>{
    const [image,setImage] = useState(null)

    useEffect(()=>{
        (async()=>{
            if(Platform.OS !=='web'){
                const {status}= await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status !== 'granted'){
                    alert('Camera Roll Permissions Needed')
                }
            }

        })();
    },[])
    const PickImage = async()=>{
        let results = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,
        });
        console.log(results)
        if(!results.cancelled){
            setImage(results.uri);
        }
    }
    return(
        <>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity  style={{width:300,height:40,backgroundColor:'black',borderRadius:30,margin:10}} onPress={PickImage}><Text style={{color:'white',padding:8,alignSelf:'center'}}>Upload An Image</Text></TouchableOpacity>
        </View>
        </>
    )
}
export default Landing