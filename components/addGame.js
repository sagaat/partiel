import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const AddGame = ({ setGameList }) => {
    const gameData = require('../data/game.json');

    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newCategorie, setNewCategorie] = useState('');
    const newId = Math.max(...gameData.map(item => item.id)) + 1;

    const addNewGame = () => {
        if (newName && newPrice && newCategorie) {
            const newGame = {
                id: newId,
                name: newName,
                price: newPrice,
                categorie: newCategorie
            };

            const updatedGameData = [...gameData, newGame];
            setGameList(updatedGameData);
            console.log(updatedGameData);
            setNewName('');
            setNewPrice('');
            setNewCategorie('');
        }
    };

    return (
        <View style={styles.viewAdd}>
            <Text style={styles.title}>Ajout d'un jeu vidéo</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom du jeu"
                placeholderTextColor="grey"
                onChangeText={(text) => setNewName(text)}
                value={newName}
            />
            <TextInput
                style={styles.input}
                placeholder="Prix du jeu"
                placeholderTextColor="grey"
                onChangeText={(text) => setNewPrice(text)}
                value={newPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Catégorie du jeu"
                placeholderTextColor="grey"
                onChangeText={(text) => setNewCategorie(text)}
                value={newCategorie}
            />
            <TouchableOpacity style={styles.buttonAdd} onPress={addNewGame}>
                <Text>Ajouter à la liste</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewAdd: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    buttonAdd: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
});

export default AddGame;
