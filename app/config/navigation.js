import { StackNavigator } from 'react-navigation';
import {userhandler} from './userHandler';
//Screens
import Select from '../screens/Select';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Logs from '../screens/Logs';
import Fixture from '../screens/Fixtures';
import Results from '../screens/Results';
import News from '../screens/News';
import MatchDay from '../screens/MatchDay';
import Splash from '../screens/Splash';
import SelectTeam from '../screens/SelectTeam';
import Profile from '../screens/Profile';
import Tournaments from '../screens/Tournaments';
import GameSummary from '../screens/GameSummary';

export const AppNav = StackNavigator({
    Splash:{
        screen: Splash,
        navigationOptions:{
            title: 'Splash'
        }
    },
    Select:{
        screen: Select,
        navigationOptions: {
            title: 'Select'
        }
    },
    Home:{
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },

    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    
    Tournaments: {
        screen: Tournaments,
        navigationOptions: {
            title:'Tournaments'
        }
    },

    Logs: {
        screen: Logs,
        navigationOptions: {
            title: 'Logs'
        }
    },
    Fixture:{
        screen: Fixture,
        navigationOptions: {
            title: 'Fixture'
        }
    },
    Results:{
        screen: Results,
        navigationOptions: {
            title: 'Results'
        }
    },
    News:{
        screen: News,
        navigationOptions: {
            title: 'News'
        }
    },
    MatchDay:{
        screen:MatchDay,
        navigationOptions:{
            title: 'MatchDay'
        }
    },
    SelectTeam:{
        screen:SelectTeam,
        navigationOptions:{
            title:'SelectTeam'
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            title:'Profile'
        }
    },

   GameSummary:{
       screen: GameSummary,
       navigationOptions:{
           title:'GameSummary',
       }
   },

    
},
    {
       headerMode: 'none' 
    }
)

export const AuthNav = StackNavigator({
    Splash:{
        screen: Splash,
        navigationOptions:{
            title: 'Splash'
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
},
{
    headerMode: 'none'
}) 