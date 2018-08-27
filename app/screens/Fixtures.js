import React, { Component } from 'react';
import {ScrollView,View,ImageBackground,Dimensions,TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import ScoreComponent from '../components/score/scoreComponent';
import * as actions from '../actions';
import TopBar from '../components/TopBar';
import image from '../images/Tlogo.png';
import background from '../components/score/background.png';
import {format} from 'date-fns';


class Fixtures extends Component{
selectedFixture(id){
    this.props.fetchFixtures(id);
    this.props.navigation.navigate('');
}

        
    render(){
        return(
            <ImageBackground
            source={background}
            style={{ width: Dimensions.get('window').width, 
            height: Dimensions.get('window').height,}}
        >
            <View> 
            <TopBar title={'FIXTURES'} navigation={()=> this.props.navigation.goBack()}/>
            </View>
                <ScrollView>
                    <View>
                    {
                        this.props.fixtures.map((data, index) => {
                            return (
                                <TouchableOpacity onPress={() => this.selectedFixture(data._id)}>
                                <ScoreComponent 
                                key={index}
                                    teamA={data.cup_team_home.team.name} 
                                    teamAimage={image}
                                    teamBimage={image}
                                    teamB={data.cup_team_away.team.name} 
                                    date={format(data.match_date,"DD MMM YYYY")} 
                                    time={format(data.match_date,"HH:MM")}
                                />
                                </TouchableOpacity>
                            )
                                
                        })
                    }
                    </View>
                </ScrollView>
          </ImageBackground>
        );
    }
}

function mapStateToProps({fixtures}){
    return {
        fixtures
    }
}
export default connect(mapStateToProps,actions) (Fixtures);