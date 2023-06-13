import { View, StyleSheet, Text } from "react-native"

const Header = ({ gameList }) => {
    const gameCount = gameList.length;
    const pseudo = "Axel";
    return (
        <View style={styles.header}>
            <Text style={styles.pseudo}>{pseudo}</Text>
            <Text style={styles.count}>Nb de jeux : {gameCount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    pseudo: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    count: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default Header