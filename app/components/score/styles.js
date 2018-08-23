import {
    StyleSheet,
    Dimensions
} from 'react-native';

export default StyleSheet.create({
    container:{
      flex: 1, 
    },
    fixtureContainer:{
        width: Dimensions.get('window').width / 1.1,
        height: Dimensions.get('window').height / 5.5,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'rgba(201,0,0,1)',
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#7c0701',


    },
    backgroundContainer:{
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height,
    },
    fixtureRow: {
        flexDirection: 'row',
        alignSelf: 'center' 
    },
    teamContainer: {
        flex: 1,
        flexWrap: 'wrap',
    },
    teamName: {
        marginLeft: 5, 
        marginTop: 20, 
        color: 'white', 
        textAlign: 'center'
    },
    imageContainer: {
        backgroundColor: 'white', 
        marginLeft: 10, 
        marginTop: 15,width: 
        Dimensions.get('window').width / 8, 
        height: Dimensions.get('window').height / 16, 
        borderWidth: 1, 
        borderColor: 'white',
    },
    teamImage: {
        resizeMode: 'cover',
        width: Dimensions.get('window').width / 8, 
        height: Dimensions.get('window').height / 16
    },
    vs: {
        marginLeft: 10,
        marginTop: 20, 
        color: 'white',
        fontSize:30,
    },
    divider: {
        marginTop: 15,
        alignSelf: 'center',
        height: 1,
        backgroundColor: 'white', 
        width: Dimensions.get('window').width/1.3 
    },
    time: {
        marginLeft: 15 ,
        color: 'white'
    },
    date: {
        color: 'white'
    },
    feedContainer:{
        marginTop: 6, 
        marginLeft: -20,
        alignSelf: 'center',
        flexDirection: 'row'
    }
})