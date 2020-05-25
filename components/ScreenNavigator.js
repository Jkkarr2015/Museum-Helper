import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import CreatureScreen from '../screens/CreatureScreen';


//Add any screens we will need to navigate to here. It can be any name but it should start with a capital letter. It doesn't need to start with one though.
//The names listed here are routeNames which you will need in order to navigate to other screens.
const ScreenNavigator = createStackNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions:{
            headerMode: 'none',
            header: null
        }
    },
    Creature: {
        screen: CreatureScreen,
        navigationOptions: {
            headerMode: 'none',
            header: null
        }
    }
});

export default createAppContainer(ScreenNavigator);//Needs to be wrapped with a createAppContainer when exporting it.

