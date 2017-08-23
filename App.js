import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableNativeFeedback} from 'react-native';
import {Drawer} from 'antd-mobile';

export default class App extends React.Component {
    render() {
        const slideBar = (
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback><TouchableNativeFeedback
                onPress={() => {
                }}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View>
                    <Text style={styles.drawer_item}>Jelf1</Text>
                </View>
            </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={() => {
                    }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Text style={styles.drawer_item}>Jelf1</Text>
                    </View>
                </TouchableNativeFeedback>
            </ScrollView>
        );
        return (
            <View style={styles.container}>
                <Drawer sidebar={slideBar} open={false} drawerBackgroundColor="#fff" drawerWidth={265}></Drawer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    drawer_item: {
        padding: 10
    }
});
