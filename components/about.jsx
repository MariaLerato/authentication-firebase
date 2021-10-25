import React, { useEffect, useState } from "react";
import {View,Text,TextInput,SafeAreaView,TouchableOpacity, Image} from 'react-native'
import Users from "./users";


const About = ({navigation})=>{
    const [name,setName] = useState(' ')
    const[email,setEmail] = useState()
    const [dsc,setDsc] = useState()
    const [info,setInfo] = useState()
    const img = {uri:'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png'}
    
    useEffect(() => {
        const id = localStorage.getItem('userid')
        Users.getLoggedData(id).on('value', snapshot => {
            const data = snapshot.val()
            setName(data.name)
            setEmail(data.email)
            setDsc(data.dsc)
        })
    })
    const UpdateBio = ()=>{
        const id = localStorage.getItem('userid')
        if(typeof info === 'undefined'){
            setInfo(dsc)
            console.log(info)
            Users.upDateBio(id,dsc)
        }else {
            Users.upDateBio(id,info)
        }
    }
    const logout = ()=>{
        Users.signOut(navigation)
    }
    return(
        <SafeAreaView>
            <View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'black',borderBottomRightRadius:50,width:100,height:100}} onPress={logout}><Text style={{color:'white',alignSelf:'center',padding:4}}>Sign Out</Text></TouchableOpacity>
                </View>
                <View style={{width:'100%',padding:40,justifyContent:'center',alignItems:'center'}}>
                    <Image source={img}  style={{alignSelf:'center',width:100,height:120}} ></Image>
                </View>
                <View>
                    <Text style={{textAlign:'center',fontSize:20,textTransform:'uppercase',fontWeight:'900'}}>User Data</Text>
                </View>
                <View style={{textAlign:'center',marginTop:20}}>
                    <Text>{name}</Text>
                    <Text>{email}, {name}</Text>
                </View>
                <View style={{backgroundColor:'#f5f5f5',padding:10}}>
                    {
                        dsc ? (
                            <>
                                <Text> Update Bio {name} </Text>
                                <TextInput value={dsc} onChangeText={text=>setDsc(text)} multiline={true} numberOfLines={5}  placeholder={'Write Something About You....'}
                                />
                            </>
                        ):(
                            <>
                            <Text> Write Something About You </Text>
                            <TextInput onChangeText={text=>setInfo(text)} multiline={true} numberOfLines={5}  placeholder={'About Me'} />
                            </>
                        )
                    }
                </View>
                <View style={{padding:10}}>
                    <TouchableOpacity style={{backgroundColor:'#292929',padding:15,}} onPress={UpdateBio} ><Text style={{textAlign:'center',color:'white',fontWeight:'900'}}>Update Profile</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default About