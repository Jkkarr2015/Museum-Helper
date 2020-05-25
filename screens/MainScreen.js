import React from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableProgressBar from '../components/TouchableProgressBar';
import Lists from '../constants/lists';

const MainScreen = (props) => {
    const handlePressFish = () => {
        props.navigation.navigate('Creature', { creatureList: Lists.fishList});
    };

    const handlePressInsects = () => {
        props.navigation.navigate('Creature', { creatureList: Lists.insectList});
    }

    return (
        <View style={styles.layout}>
            <TouchableProgressBar 
                image={require('../assets/fishButtonIcon.png')}
                onPress={handlePressFish}
                progress={12}
                total={60}
            />
            
        </View>
    );
};


const styles = StyleSheet.create({
    layout: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffcc',
        height: '100%',
        width: '100%'
    }
});

export default MainScreen;