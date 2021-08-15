import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D1D1D1'
    },
    tema: {
        fontSize: 27,
        transform: [{translateY:-75}],
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    titulo: {
        fontSize: 22,
        margin: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
});