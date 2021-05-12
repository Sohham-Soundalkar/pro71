import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import Appheader from '../appheader';
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryscreen extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }

    submitStory=async()=>{
        db.collection('stories').doc().update({
            
        })
    }

  render(){  
      return(
          <View style={styles.container}>
              <Appheader/>
              <View style={styles.inputView}>
                 <TextInput
                 style={styles.inputBox}
                 placeholder='Story Title'
                 /> 
              </View>
              <View style={styles.inputView}>
                 <TextInput
                 style={styles.inputBox}
                 placeholder='Author'
                 />
              </View>
              <View style={{height: 250, width: 200, borderWidth: 1.5, fontSize: 20}}>
                 <TextInput
                 style={{height: 250, width: 200, borderWidth: 1.5, fontSize: 20}}
                 placeholder='Write your story'
                 />
              </View>
              <View>
                  <TouchableOpacity style={styles.submitButton}>
                     <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
              </View>
          </View>
      )
  
}
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayText:{
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton:{
        backgroundColor: 'blue',
        width: 50,
        borderWidth: 1.5
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        color: 'white'
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20
    }
})