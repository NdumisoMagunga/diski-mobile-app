import React,{Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import LinearGradient from 'react-native-linear-gradient';

class LogTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Pos', 'Group A', 'P','W','D','L','GF','GA', 'GD','Pts'],
          widthArr: [35, Dimensions.get('window').width/3.55, 30, 30, 30, 30, 30, 30, 30, 32],
          dataA: []
        }
    }

    render(){
        this.state.tableHead.splice(1,1,this.props.groupname);
        this.props.tableData.teams.map((data2, index) =>{
            const log = data2.team;
            this.state.dataA.push([index + 1, log.name, log.season_games_played, 
              log.games_won, log.games_drawn, log.games_lost, log.season_goal_for, 
              log.season_goal_against, log.season_goal_for - log.season_goal_against, log.point]);
        });

        return(
            <Table  style={{marginTop:20}} >
            <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={[styles.head]} textStyle={styles.headText}/>
           
            {this.state.dataA.map((data, index)=>{
                
                if (index % 2){
                  return(
                    <Row key={index} data={data} widthArr={this.state.widthArr} style={[styles.rows]} textStyle={{color:'#000'}}  />
                  );
                }
                else{
                  return(
                    <LinearGradient key={index}  colors={['#ccc', '#fff']}>
                    <Row data={data} textStyle={styles.rowText} widthArr={this.state.widthArr} style={[styles.rows]} textStyle={{color:'#000'}}  />
                    </LinearGradient>
                  )
                }
            }
             
            )}
          </Table>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, paddingTop: 10, backgroundColor: 'white'},
    head: { height: 20, backgroundColor: 'rgb(201,0,0)', paddingLeft:5},
    rows:{paddingLeft:5,backgroundColor:'rgba(0,0,0,0.0)'},
    headText:{color:'white', fontWeight:'200',fontSize:12},
    rowText:{fontWeight:'200',fontSize:12}
  
    
  });

export default LogTable;