import React, { Component } from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

import LogTable from '../components/LogTable';
import TopBar from '../components/TopBar';

var tableData = [1,1,12,12,1,1,1,1,1,1]

class Logs extends Component {
 
  render() {


    return (
      <ScrollView  style={styles.container}>
      <TopBar title={'LOGS'} navigation={()=> this.props.navigation.goBack()}/>
      <View style={{width:390, alignSelf:'center'}}>
      {
        this.props.groups.map((log,index) => {
      
          return(
            <View>
              {log.teams.map((teams,i) => {
                
                // tableData = _.concat( i+1,teams.team.name,  teams.team.total_games_played,  teams.team.games_won, teams.team.games_drawn,  teams.team.games_won,  teams.team.games_won,  teams.team.games_won,  teams.team.games_won,  teams.team.games_won);

                return(
                   <LogTable key={i} tableData={tableData}/>
                )
              })}
           
            </View>
          )
        })
      }
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 10, backgroundColor: 'white'},
  head: { height: 20, backgroundColor: 'rgb(201,0,0)', paddingLeft:5},
  rows:{paddingLeft:5,backgroundColor:'rgba(0,0,0,0.0)'},
  headText:{color:'white', fontWeight:'600'},
});

function mapStateToProps({groups}){
  return {
    groups
  }
}

export default connect(mapStateToProps,actions) (Logs);