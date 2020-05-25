import React from 'react';
import { TouchableOpacity , View, Image, StyleSheet, Text} from 'react-native';

/*
    Variables passed in:
        - onPress: on Press Method
        - image: Image that will be next to the button
        - progress: The amount of items collected
        - total: total amount of items for that field.
*/

const TouchableProgressBar = (props) => {
    return (
        <View
            style={styles.layout}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={props.onPress}>
                <View style={styles.centerView}>
                    <View
                        style={styles.progressView}>
                        <Image
                            style={styles.image}
                            source={props.image}
                            resizeMode='contain'/>

                        <View style={styles.progressBarFullPackage}>
                            <View style={styles.progressBar}>
                                <View style={styles.progress}></View>
                            </View>

                            <Text style={{
                                height: '30%',
                                width: '30%',
                                fontWeight: 'bold',
                                fontSize: 14,
                                marginTop: '3%'
                            }
                            }>
                                {props.progress}/{props.total}
                            </Text>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    touchable:{
        height: '100%',
        width: '75%',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#a3a3a2',
        elevation: 5,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    layout:{
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    progressBar:{
        height: '50%',
        width: '85%',
        borderWidth: 2,
        borderColor: 'black'
    },
    progress:{
        height: '100%',
        width: '12%',
        backgroundColor: '#1abf17'
    },
    image:{
        height: '60%',
        width: '35%'
    },
    progressView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    centerView:{
        alignContent: 'center',
        justifyContent: 'center'
    },
    progressBarFullPackage:{
        width: '50%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default TouchableProgressBar;