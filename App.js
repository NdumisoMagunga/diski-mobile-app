import React, { Component } from 'react';
import { AppNav } from './app/config/navigation';

import {connect} from 'react-redux';
import * as actions from './app/actions';


 class App extends Component{

  componentDidMount() {
    this.props.fetchTournaments();
  }

      render(){
        return(
            <AppNav/>
        )
      }
    }

function mapStateToProps({auth,tournaments}) {
  return {
    auth,
    tournaments,
  }
};

export default connect(mapStateToProps, actions) (App);