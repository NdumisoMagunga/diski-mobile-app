import React, { Component } from 'react';
import {
    View,
    Image,
} from 'react-native';

import {
    Text,
    Divider,
} from 'react-native-elements';

import styles from './styles';


class ResultsComponent extends Component{
    render(){
        return(
           
            <View style={styles.container}>
                
                    <View style={styles.fixtureContainer}>
                        
                        <View style={styles.fixtureRow}>

                            <View style={styles.teamContainer}>
                            <Text style={styles.teamName}>{this.props.teamA} </Text>
                            </View>

                        <View style={styles.imageContainer}>
                            <Image source={this.props.teamAimage} style={styles.teamImage}/>
                        </View>

                          <Text style={styles.vs}>{this.props.scoreA}</Text>
                          <Text style={styles.vs}>:</Text>
                          <Text style={styles.vs}>{this.props.scoreB}</Text>

                        <View style={styles.imageContainer}>
                            <Image source={this.props.teamBimage} style={styles.teamImage}/>
                        </View>
                            
                            <View style={styles.teamContainer}>
                            <Text style={styles.teamName}>{this.props.teamB} </Text>
                            </View>

                        </View>

                        <Divider style={styles.divider} />
                        
                        <View style={styles.feedContainer}>
                        <Text style={styles.date}>DATE: {this.props.date}</Text>
                        <Text style={styles.time}>TIME: {this.props.time}</Text>
                        </View>
                    </View>
                  

                

            </View>
            
            
        );
    }
}

export default ResultsComponent;