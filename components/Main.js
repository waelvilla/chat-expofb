import React, {Component} from 'react'
import {View, TextInput, Text, TouchableOpacity ,StyleSheet} from 'react-native'

class Main extends Component {
    state ={name: ''}

    onChangeText= (name) => {
        console.log(name)
    }
    onPress=()=>{
        this.props.navigation.navigate('Chat', {name: this.state.name})
    }
    render(){
        return(
            <View>
                <Text style={styles.title}>Enter your name:</Text>
                <TextInput
                  onChangeText={this.onChangeText}
                  style={styles.nameInput}
                  placeholder="John Doe" 
                  value={this.state.name}
                  />
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const offset=24
const styles=StyleSheet.create({
    nameInput: {
        height: offset,
        margin: offset,
        paddingHorizontal:offset,
        borderColor: '#111111',
        borderWidth: 1
    },
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset
    },
    btnText: {
        marginLeft: offset,
        fontSize: offset
    }
})


export default Main