import React, { Component } from 'react';
import {View,StyleSheet,Dimensions,ImageBackground, ScrollView,TouchableOpacity} from 'react-native';
import { Container,Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';

import {connect} from 'react-redux';
import * as actions from '../actions';

import background from '../images/background.png';
import TopBar from '../components/TopBar';

class Tournaments extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchTournaments();
    }

    selectedTour(id){
       this.props.fetchTournament(id);
       this.props.fetchFixtures(id);
       this.props.fetchGroups(id);
        this.props.navigation.navigate('Home')
    }

    render(){
        //console.log(this.props.tournament)
        return(
           <ImageBackground source={background} style={styles.container}>
            <TopBar title={'TOURNAMENTS'}  navigation={ () => {this.props.navigation.goBack()}} />
                <ScrollView>
                    <Container>
                        <Content>
                            {
                                this.props.tournaments.map((data,index) => {
                                    return(
                                <List key={index}>
                                <TouchableOpacity>
                                <ListItem onPress={() => this.selectedTour(data._id)}>
                                    <Left>
                                       <Text>{data.name}</Text>
                                    </Left>
                                    <Right>
                                        <Icon style={{color:'black'}} name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                </TouchableOpacity>
                            </List>
                                    )
                                })
                            }
                           
                        </Content>
                    </Container>
                </ScrollView>
           </ImageBackground>
        )
    }
}

const styles =StyleSheet.create({
container:{
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
});

function mapStateToProps({tournaments,tournament}) {
    return{
        tournaments,
        tournament,
    }
}

export default connect(mapStateToProps,actions) (Tournaments);
