import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const ListGame = ({ gameData }) => {
    const renderItem = ({ item }) => (
        <Text style={styles.game}>
            {item.name} - {item.price}
            {"\n"}
            #{item.categorie}
        </Text>
    );

    return (
        <View style={styles.viewList}>
            <FlatList
                style={styles.list}
                data={gameData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        backgroundColor: 'white',
        borderRadius: 10,
        flexGrow: 0,
        height: 400,
        margin: 10,
    },
    game: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    },
});

export default ListGame;