import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default ChonseSelect = ({
    data,
    initValue,
    onPress,
    colorActive = '#fff',
    color = '#333',
    borderColor = '#cdcdcd',
    style,
    textStyle
}) => {
    const size = Object.keys(data).length;
    return (
        <View style={[styles.wrapRow, style]}>
            {data.map((item, key) => {
                if (key == 0) {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => onPress(item)}
                            style={[item.value == initValue ? styles.wrapStartActive : styles.wrapStart, {
                                borderColor: borderColor
                            }]}>
                            <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    );
                }
                else if (key == size - 1) {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => onPress(item)}
                            style={[item.value == initValue ? styles.wrapEndActive : styles.wrapEnd, {
                                borderColor: borderColor
                            }]}>
                            <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => onPress(item)}
                            style={[item.value == initValue ? styles.wrapActive : styles.wrap, {
                                borderColor: borderColor
                            }]}>
                            <Text style={[styles.text, { color: item.value == initValue ? colorActive : color }, textStyle]}>
                                {item.label}
                            </Text>
                        </TouchableOpacity>
                    );
                }
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapRow: {
        flexDirection: 'row',
    },
    wrapStart: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#383838',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    wrapStartActive: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: '#383838',
        paddingVertical: 5,
        backgroundColor: '#05a5d1',
        paddingHorizontal: 15,
    },
    wrap: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#383838',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    wrapActive: {
        borderWidth: 1,
        borderRightWidth: 0,
        borderColor: '#383838',
        backgroundColor: '#05a5d1',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    wrapEnd: {
        borderWidth: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#383838',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    wrapEndActive: {
        borderWidth: 1,
        backgroundColor: '#05a5d1',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: '#383838',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 13,
        color: '#383838'
    }
});