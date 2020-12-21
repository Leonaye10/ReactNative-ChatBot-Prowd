import React, {useEffect, useState} from 'react'
import { View, FlatList, TextInput, TouchableOpacity, Text } from 'react-native'
import Message from './message'
import styles from './styles'
//import {data} from './data'


let chats = [];
const ChatBot = () => {
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')
    const [chatList, setChatList] = useState([])
    const [index, setIndex] = useState(0)

    const onSendMessage = () => {
        chats = [...chats, {message : message, sendMsg : true}]
        setChatList([...chats].reverse())
        setTimeout(() => {
            getReponseChatBot(message)
        }, 1000)
        setMessage('')
    };

    const getReponseChatBot = async (message) => {
        const response = await fetch('https://dev.beprowd.fr/webchat-connector',{
            method: 'POST',
            body: JSON.stringify({
                "auth":"53616c7465645f5f30c3fbcab5721e791de5c170251741079bc752ffed341158bbbfa3a8d3e413f32519ab3bdd2d9e73e3d8d9310094281d2aa23537720c3d8dbfcb7d59be889f82e8ccae57e8e7b0af",
                "conversation_id":"114548-4542457-142424-452452-webchat",
                "text":"Salut"            
            })
        })
        const resultat = await response.json();
        console.log(resultat);
        setIndex(index+1)
        chats = [...chats, {key: index, message: resultat.message, incommingMsg: true}]
        setChatList([...chats].reverse())
    }

    const loadHistory = () => {
        setIndex(data.length)
        for (let i = 0; i < data.length; i++){
            if(data[i].type.includes("bot_message")){
                chats = [...chats, {key: i, message: data[i].message[0].content, incommingMsg: true}]
                setChatList([...chats].reverse())
                //console.log(data[i].message[0].content);
            }else{
            //if(data[i].type.includes("user_message")){
                
                if(!(typeof data[i].message == "object")){
                    //console.log(data[i]);
                    chats = [...chats, {key: i, message: data[i].message, sendMsg: true}]
                    setChatList([...chats].reverse())
                }
            }
            
        }
    }

    const loadData = async () => {
        const response = await fetch('https://dev.beprowd.fr/webchat-history',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "auth":"53616c7465645f5f30c3fbcab5721e791de5c170251741079bc752ffed341158bbbfa3a8d3e413f32519ab3bdd2d9e73e3d8d9310094281d2aa23537720c3d8dbfcb7d59be889f82e8ccae57e8e7b0af",
                "conversation_id":"114548-4542457-142424-452452-webchat",
                "type":"get",
                "lookback":"2020-12-10T19:37:28.622Z"
            })
        })

        const resultat = await response.json();
        setData(resultat)
        loadHistory()
    }

    useEffect(() => {
       loadData();
    }, [])

    return (
        <View>
            <FlatList 
                style={{height: '87%', bottom: '3%'}}
                data={chatList}
                inverted={true}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => 
                    <Message 
                        incommingMsg={item.incommingMsg}
                        message={item.message}
                        sendMsg={item.sendMsg}
                    />               
                }
            />
            <View style={styles.MsgContainer}>
                <TextInput
                    style={styles.MsgBox}
                    value={message}
                    placeholder="Ecrivez ici ..."
                    onChangeText={val => setMessage(val)}
                />
                <TouchableOpacity 
                    style={[styles.sendBtn, {backgroundColor: message ? 'blue' : 'grey'}]} 
                    disabled={message? false : true}
                    onPress={() => onSendMessage()}
                >
                    <Text style={styles.sendTxt} >Envoyez</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatBot
