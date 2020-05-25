import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Picker, TouchableOpacity, Text } from 'react-native';

const CreatureScreen = (props) => {
    const [displayMode, setDisplayMode] = useState('all');

    const { navigation } = props;
    const creatureList = navigation.getParam('creatureList', {});

    
    const isCreatureAvailableNow = (creature) => {
        let isAvailable = false;
        let today = new Date();
        let month = today.getMonth();

        if (creature.duration.length === 1) {
            isAvailable = month === creature.duration[0];
        }

        if (creature.duration.length === 2) {
            let isStartBiggerThanEnd = creature.duration[0] > creature.duration[1];

            if (!isStartBiggerThanEnd) {
                isAvailable = month >= creature.duration[0] && month <= creature.duration[1];
            }
            else {
                isAvailable = month >= creature.duration[0] || month <= creature.duration[1];
            }
        }

        if (creature.duration.length === 4) {
            let isStartBiggerThanEndFirst = creature.duration[0] > creature.duration[1];
            let isStartBiggerThanEndSecond = creature.duration[2] > creature.duration[3];

            if (!isStartBiggerThanEndFirst) {
                isAvailable = month >= creature.duration[0] && month <= creature.duration[1];
            }
            else {
                isAvailable = month >= creature.duration[0] || month <= creature.duration[1];
            }


            if (!isAvailable) {
                if (!isStartBiggerThanEndSecond) {
                    isAvailable = month >= creature.duration[2] && month <= creature.duration[3];
                }
                else {
                    isAvailable = month >= creature.duration[2] || month <= creature.duration[3];
                }
            }
        }

        return isAvailable;
    };


    const isNotAvailableAfterThisMonth = (creature) => {
        const duration = creature.duration;
        let today = new Date();
        let month = today.getMonth();

        let isEndingThisMonth;

        if (duration.length === 1) {
            isEndingThisMonth = month === duration[0];
        }

        if (duration.length === 2) {
            isEndingThisMonth = month === duration[1];
        }

        if (duration.length === 4) {
            isEndingThisMonth = month === duration[1];

            if (!isEndingThisMonth) {
                isEndingThisMonth = month === duration[3];
            }
        }

        return isEndingThisMonth;
    };


    const isAvailableStartingThisMonth = (creature) => {
        const duration = creature.duration;
        let today = new Date();
        let month = today.getMonth();

        let isStartingThisMonth;

        if (duration.length === 1) {
            isStartingThisMonth = month === duration[0];
        }

        if (duration.length === 2) {
            isStartingThisMonth = month === duration[0];
        }

        if (duration.length === 4) {
            isStartingThisMonth = month === duration[0];

            if (!isStartingThisMonth) {
                isStartingThisMonth = month === duration[2];
            }
        }

        return isStartingThisMonth;
    };

    return (
        <View style={styles.layout}>

            <Picker
                selectedValue={displayMode}
                style={{ height: '5%', width: '100%' }}
                onValueChange={(itemValue, itemIndex) => setDisplayMode(itemValue)}>
                <Picker.item
                    label="Display All"
                    value="all" />
                <Picker.item
                    label="Display Available Only"
                    value="available" />
                <Picker.item
                    label="Display things leaving this month"
                    value="ending" />
                <Picker.item
                    label="Display things starting this month"
                    value="starting" />
            </Picker>

            <FlatList
                keyExtractor={(item) => item.key}
                data={creatureList}
                renderItem={({ item }) => (
                    <View style={styles.flatList}>
                        {
                            displayMode === 'ending' && isNotAvailableAfterThisMonth(item) ? <TouchableOpacity style={isCreatureAvailableNow(item) ? styles.available : styles.notAvailable}>
                                <Text style={styles.text}>{item.name}</Text>
                            </TouchableOpacity> : <View style={styles.empty}></View>
                        }
                        {
                            displayMode === 'all' ? <TouchableOpacity style={isCreatureAvailableNow(item) ? styles.available : styles.notAvailable}>
                                <Text style={styles.text}>{item.name}</Text>
                            </TouchableOpacity> : <View style={styles.empty}></View>
                        }
                        {
                            displayMode === 'starting' && isAvailableStartingThisMonth(item) ? <TouchableOpacity style={isCreatureAvailableNow(item) ? styles.available : styles.notAvailable}>
                                <Text style={styles.text}>{item.name}</Text>
                            </TouchableOpacity> : <View style={styles.empty}></View>
                        }
                        {
                            displayMode === 'available' && isCreatureAvailableNow(item) ? <TouchableOpacity style={isCreatureAvailableNow(item) ? styles.available : styles.notAvailable}>
                                <Text style={styles.text}>{item.name}</Text>
                            </TouchableOpacity> : <View style={styles.empty}></View>
                        }

                    </View>

                )}
            />
        </View>
    );






};


const styles = StyleSheet.create({
    available: {
        backgroundColor: '#91fad5',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notAvailable: {
        backgroundColor: '#f78f88',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25,
        width: '100%',
        color: 'black'
    },
    layout: {
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    empty: {
        height: 0,
        width: 0
    },
    flatList:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CreatureScreen;