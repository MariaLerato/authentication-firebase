import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, useWindowDimensions, ImageBackground } from 'react-native'
import { TextInput } from "react-native-paper";
import { CheckBox } from "react-native-elements";
import Users from "./users";

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    const layout = useWindowDimensions()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [confirm, setConfirm] = useState()

    const img = { uri: 'https://images.pexels.com/photos/9676177/pexels-photo-9676177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
    
    const add = () => {
        Users.signUp(email,pass,name)
        console.log(email,'user created')
        navigation.navigate('landing')
    }
    return (
        <SafeAreaView>
            <ImageBackground source={img} style={{ width: layout.width, height: layout.height }}>
                <View style={{ backgroundColor: 'gainsboro', opacity: 0.7, width: layout.width, height: layout.height, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700', margin: 10, fontSize: 25 }} >Sign Up</Text>
                    <View>
                        <>
                            <TextInput  placeholder={'Enter FullName'} onChangeText={text => setName(text)} style={{ padding: 4, width: 300, margin: 8, borderBottomLeftRadius: 20, borderBottomEndRadius: 20, borderTopEndRadius: 20, borderTopLeftRadius: 20, }} left={<TextInput.Icon name={'account'} size={25} style={{ margin: 15 }} />} />
                            <TextInput placeholder={'Enter Email Address'} onChangeText={(text) => setEmail(text)} style={{ padding: 4, width: 300, margin: 8, borderBottomLeftRadius: 20, borderBottomEndRadius: 20, borderTopEndRadius: 20, borderTopLeftRadius: 20, }} left={<TextInput.Icon name={'email'} size={25} style={{ margin: 15 }} />} />
                            <TextInput  placeholder={'Enter Password'} onChangeText={(text) => setPass(text)} secureTextEntry={true} style={{ padding: 4, width: 300, margin: 8, borderBottomLeftRadius: 20, borderBottomEndRadius: 20, borderTopEndRadius: 20, borderTopLeftRadius: 20, }} left={<TextInput.Icon name={'lock'} size={25} style={{ margin: 15 }} />} />
                            <TextInput  placeholder={'Re-enter Password'} onChangeText={(text) => setConfirm(text)} secureTextEntry={true} style={{ padding: 4, width: 300, margin: 8, borderBottomLeftRadius: 20, borderBottomEndRadius: 20, borderTopEndRadius: 20, borderTopLeftRadius: 20, }} left={<TextInput.Icon name={'lock'} size={25} style={{ margin: 15 }} />} />
                            <CheckBox title={'Accept Terms & Conditions'} checked={checked} onPress={() => setChecked(!checked)} />
                            <TouchableOpacity onPress={add} style={{ backgroundColor: 'lightseagreen', width: 300, height: 40, borderRadius: 20, borderWidth: 5, padding: 4, margin: 4, borderColor: 'white' }}><Text  style={{ padding: 4, alignSelf: 'center', color: 'white' }} >Register</Text></TouchableOpacity>
                        </>


                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default SignUp