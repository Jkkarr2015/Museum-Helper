import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';



const CreatureInfoScreen = (props) => {
    const { navigation } = props;
    const creature = navigation.getParam('creature', {});

    const getAvailableString = (creature) => {
        let available;

        if (creature.duration.length === 1) {
            available = getMonthName(creature.duration[0]);
        }

        if (creature.duration.length === 2) {
            let isStartZero = creature.duration[0] === 0;
            let isEnd11 = creature.duration[1] === 11;

            if (isStartZero && isEnd11) {
                available = "Available Year Round";
            }
            else {
                available = getMonthName(creature.duration[0]) + ' - ' + getMonthName(creature.duration[1]);
            }
        }

        if (creature.duration.length === 4) {
            available = getMonthName(creature.duration[0]) + ' - ' + getMonthName(creature.duration[1]) + ' / ' + getMonthName(fish.duration[2]) + ' - ' + getMonthName(fish.duration[3]);
        }

        return available;
    };


    const getMonthName = (monthIndex) => {
        let monthName;

        switch (monthIndex) {
            case 0: monthName = 'Jan.';
                break;
            case 1: monthName = 'Feb.';
                break;
            case 2: monthName = 'Mar.';
                break;
            case 3: monthName = 'Apr.';
                break;
            case 4: monthName = 'May';
                break;
            case 5: monthName = 'Jun.';
                break;
            case 6: monthName = 'Jul.';
                break;
            case 7: monthName = 'Aug.';
                break;
            case 8: monthName = 'Sep.';
                break;
            case 9: monthName = 'Oct.';
                break;
            case 10: monthName = 'Nov.';
                break;
            case 11: monthName = 'Dec.';
                break;
        }

        return monthName;
    };


};


const styles = StyleSheet.create({

});


export default CreatureInfoScreen;