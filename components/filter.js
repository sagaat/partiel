import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Filter = () => {

    return (
        <View style={styles.filter}>
            <Text style={styles.title}>Filtrer par catégorie</Text>
            <Picker style={styles.picker}>
                <Picker.Item label="Tous" value="all" />
                <Picker.Item label="Action" value="action" />
                <Picker.Item label="Aventure" value="adventure" />
                <Picker.Item label="RPG" value="rpg" />
                <Picker.Item label="FPS" value="fps" />
                <Picker.Item label="Sport" value="sport" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    filter: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    picker: {
        width: 300,
        margin: 12,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
});

export default Filter;