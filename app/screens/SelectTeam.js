import React, { Component} from 'react';
import {StyleSheet,ScrollView,ImageBackground,Dimensions} from 'react-native';
import { Container,Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import TopBar from '../components/TopBar';
import styles from '../components/score/styles';
import Background from '../images/background.png';

class SelectTeam extends Component{

    render(){
        return(
            <ImageBackground source={Background} style={Styles.backImage}>
            <ScrollView style={styles.container}>
            <TopBar title={'Select Team'} navigation={() => this.props.navigation.goBack()} />

            <Container >
                <Content >
                    <List >
                        <ListItem  onPress={() => {this.props.navigation.navigate('MatchDay')}}>
                                <Left>
                                    <Text>Baroka FC</Text>
                                </Left>
                            
                                <Right>
                                    <Icon style={{color:'black'}} name="arrow-forward"/>
                                </Right>
                         </ListItem>
                         <ListItem  onPress={() => {this.props.navigation.navigate('MatchDay')}}>
                                <Left>
                                    <Text>Orlando Pirates</Text>
                                </Left>
                            
                                <Right>
                                    <Icon style={{color:'black'}} name="arrow-forward"/>
                                </Right>
                         </ListItem>
                         <ListItem  onPress={() => {this.props.navigation.navigate('MatchDay')}}>
                                <Left>
                                    <Text>Kaizer Chiefs</Text>
                                </Left>
                            
                                <Right>
                                    <Icon style={{color:'black'}} name="arrow-forward"/>
                                </Right>
                         </ListItem>
                         <ListItem  onPress={() => {this.props.navigation.navigate('MatchDay')}}>
                                <Left>
                                    <Text>Mamelodi Sundowns</Text>
                                </Left>
                            
                                <Right>
                                    <Icon style={{color:'black'}} name="arrow-forward"/>
                                </Right>
                         </ListItem>
                         <ListItem  onPress={() => {this.props.navigation.navigate('MatchDay')}}>
                                <Left>
                                    <Text>Chippa United</Text>
                                </Left>
                            
                                <Right>
                                    <Icon style={{color:'black'}} name="arrow-forward"/>
                                </Right>
                         </ListItem>

                    </List>
                </Content>
            </Container>
            </ScrollView>
            </ImageBackground>
        )
    }
};

const Styles = StyleSheet.create({
    container:{
        flex:1,
    },

    selectTeamHead:{
        alignSelf:'center',
        color:'red'
    },

    backImage:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

export default SelectTeam;