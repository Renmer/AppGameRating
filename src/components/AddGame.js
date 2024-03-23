import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Modal, Portal, Text, TextInput } from 'react-native-paper';

export default function AddGames(props){
    const [visible, setVisible] = React.useState(props.isVisible);
    const [gameName, setGameName] = React.useState('');

    const showModal = () => setVisible(true);
    const hideModal = () => {
        setVisible(false)
        props.setModalAddGame(false);
    };

    React.useEffect(() => {
        setVisible(props.isVisible);
    }, [props.isVisible]);

    return(
        <>
            <Portal style={{flex:1}}>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
                    <View>
                        <TextInput
                            label="Email"
                            value={gameName}
                            onChangeText={text => setGameName(text)}
                            style={{width:'80%'}}
                        />
                    </View>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
        </>
    )
}
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    container:{

    }

})
