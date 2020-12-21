import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    incommingMsgBox: {
        backgroundColor: 'white',
        maxWidth: '70%',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 5,
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    incommingMsgText: {
        color: 'black',
        fontSize: 16
    },
    sendMsgBox: {
        backgroundColor: 'blue',
        maxWidth: '70%',
        borderRadius: 10,
        padding: 5,
        alignSelf: 'flex-end',
        marginVertical: 5,
        marginHorizontal: 5
    },
    sendMsgText: {
        color: 'white',
        fontSize: 16
    },
    MsgContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
        bottom: 5
    },
    MsgBox: {
        borderWidth: 0.8,
        borderColor: 'grey',
        padding: 10,
        width: '80%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    sendBtn: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    sendTxt: {
        color: 'white'
    },

})

export default styles;