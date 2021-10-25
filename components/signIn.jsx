import React, { useEffect, useState, } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableHighlight, Animated, Pressable, Button, ImageBackground, useWindowDimensions, TouchableOpacity } from 'react-native'
import { Avatar, Header, ListItem } from "react-native-elements";
import { TextInput } from "react-native-paper";
import firebase from "./firebase";
import Users from './users'


const SignIn = ({ navigation }) => {
    const [users, setUsers] = useState([])
    const layout = useWindowDimensions()
    const img = { uri: 'https://images.pexels.com/photos/9676177/pexels-photo-9676177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        Users.getData().on('value', data => {
            const userdata = [];
            data.forEach(action => {
                const info = action.val()
                const key = action.key
                userdata.push({
                    key: key,
                    name: info.name,
                    surname: info.surname,
                    dsc: info.dsc,
                    status: info.status
                })
                setUsers(userdata)
            })
        })
    })

    const _login = () => {
        console.log('testing button', email)
        Users.login(email, password, navigation)
    }

    return (
        <SafeAreaView>
            <ImageBackground source={img} style={{ width: layout.width, height: layout.height }}>
                <View style={{ opacity: 0.8, backgroundColor: 'black', width: layout.width, height: layout.height }}>
                    <View style={{ alignItems: 'center', marginTop: 55 }}>
                        <Text style={{ color: 'white', fontSize: 35 }}>Log In</Text>
                        <View style={{ margin: 45 }}>
                            <>
                                <TextInput placeholder={' Email Address '} onChangeText={text => setEmail(text)} value={email} underlineColor="transparent" style={{ padding: 4, width: 300, margin: 8, borderBottomLeftRadius: 20, borderBottomEndRadius: 20, borderTopEndRadius: 20, borderTopLeftRadius: 20, shadowColor: '#000', }} left={<TextInput.Icon name={'email'} size={25} style={{ marginTop: 15 }} />} />

                                <TextInput placeholder={'Password'} value={password} onChangeText={text => setPassword(text)} underlineColor="transparent" secureTextEntry={true} right={<TextInput.Icon name={'eye'} size={25} style={{ marginTop: 15 }} />} style={{ padding: 4, width: 300, margin: 8, borderBottomLeftRadius: 20, borderBottomEndRadius: 20, borderTopEndRadius: 20, borderTopLeftRadius: 20, }} left={<TextInput.Icon name={'lock'} size={25} style={{ marginTop: 15 }} />} />

                                <Text style={{ alignSelf: 'center', color: '#337af5', fontSize: 15, marginTop: 10 }}>Forgot Password? Reset Password</Text>
                                <TouchableOpacity style={{ borderWidth: 3, borderColor: 'white', borderRadius: 20, width: 310, height: 50 }} onPress={_login} ><Text style={{ color: 'white', alignSelf: 'center', padding: 8 }}>Sign In</Text></TouchableOpacity>
                            </>

                        </View>

                        <Text style={{ color: 'white' }} onPress={() => navigation.navigate('register')} >Don't Have Account? Sign Up</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    item: {

    }
})
export default SignIn