import React, { Component } from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';

import LogTable from '../components/LogTable';
import TopBar from '../components/TopBar';
import * as actions from '../actions';
import {connect} from 'react-redux';



class Logs extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   tableData: [
    //     ['1', 'Chelsea', '3', '4','5','8','1','3','5','8'],
    //     ['2', 'Barcelona', '3', '4','5','8','1','3','5','8'],
    //     ['3', 'Manchester City', '3', '4','5','8','1','3','5','8'],
    //     ['4', 'Arsenal FC', '3', '4','5','8','1','3','5','8'],
    //   ]
    // }
  }

  render() {

    return (
      <ScrollView  style={styles.container}>
      <TopBar title={'LOGS'} navigation={()=> this.props.navigation.goBack()}/>
      <View style={{width:390, alignSelf:'center'}}>
      {this.props.groups.map((data, indx) => {
        return (
          <LogTable tableData={data} key={indx} groupname={data.name} />
        )
      })}
      </View>
      </ScrollView>
    )
  }
}

function mapStateToProps({groups}){
  return {
    groups
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 10, backgroundColor: 'white'},
  head: { height: 20, backgroundColor: 'rgb(201,0,0)', paddingLeft:5},
  rows:{paddingLeft:5,backgroundColor:'rgba(0,0,0,0.0)'},
  headText:{color:'white', fontWeight:'600'},

  
});

export default connect(mapStateToProps,actions)(Logs);