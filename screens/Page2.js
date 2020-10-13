import React from 'react';
import { Text, View } from 'react-native';

export default class Page2 extends React.Component{

    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
             }}>
             <Text>
             Page 2
             </Text>
            </View>
        )
    }
    
}

