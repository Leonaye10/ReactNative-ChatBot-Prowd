import React, {Fragment} from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const  Message = ({incommingMsg, sendMsg, message}) => {

    return (
        <Fragment>
            {/* ChatBot message */
                incommingMsg && (
                    <View style={styles.incommingMsgBox}>
                        <Text style={styles.incommingMsgText}>{message}</Text>
                    </View>
                )
            }
            
            {/* User message */ 
                sendMsg && (
                    <View style={styles.sendMsgBox}>
                        <Text style={styles.sendMsgText}>{message}</Text>
                    </View>
                )
            } 
        </Fragment>
    )
}

export default Message
