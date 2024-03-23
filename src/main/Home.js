import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddGames from '@src/components/AddGame';
import { 
    Text, 
    Searchbar,
    Card,
    FAB,
    Appbar,

 } from 'react-native-paper';
export default function Home() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [openAddGame, setModalAddGame] = React.useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <View>
            <Appbar >
                <Searchbar
                    placeholder="Buscar"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={{maxWidth:'85%', margin:5}}
                />
                <Appbar.Action icon={'sort'} onPress={() => {} }/>
            </Appbar>
            </View>
            <ScrollView style={{margin:10}}>
                <Card style={styles.cardStyle}>
                    <Card.Title title="Baldur's Gate 3" subtitle="Steam"/>
                    <Card.Cover style={styles.cardCoverStyle} source={{ uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg' }}/>
                    <View style={styles.cardContentStyle} >
                        <Card.Content>
                            <Text>Calificacion: ★★★★★</Text>
                        </Card.Content>
                        <Card.Content>
                            <Text>Finalizado: 08/02/2024</Text>
                        </Card.Content>
                    </View>
                </Card>
                <Card style={styles.cardStyle}>
                    <Card.Title title="The last of us part I" subtitle="Epic Games"/>
                    <Card.Cover style={styles.cardCoverStyle} source={{ uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/ca6Dr3k7PXKaDgEbhN9eODeD.png' }}/>
                    <View style={styles.cardContentStyle} >
                        <Card.Content>
                            <Text>Calificacion: ★★★★★</Text>
                        </Card.Content>
                        <Card.Content>
                            <Text>Finalizado: 01/02/2024</Text>
                        </Card.Content>
                    </View>
                </Card>
                <Card style={styles.cardStyle}>
                    <Card.Title title="Dark Souls 3" subtitle="Steam"/>
                    <Card.Cover style={styles.cardCoverStyle} source={{ uri: 'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png' }}/>
                    <View style={styles.cardContentStyle} >
                        <Card.Content>
                            <Text>Calificacion: ★★★★</Text>
                        </Card.Content>
                        <Card.Content>
                            <Text>Finalizado: 06/02/2024</Text>
                        </Card.Content>
                    </View>
                </Card>
            </ScrollView>
            <View style={styles.fabContainer}>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => setModalAddGame(true)}
                    color='white'
                />
            </View>
            <AddGames isVisible={openAddGame} setModalAddGame={setModalAddGame}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fab:{
        position: 'absolute', 
        margin: 16, 
        right: 0, 
        bottom: 0, 
        width: 56, 
        height: 56,
        backgroundColor: '#694fad'
    },
    fabContainer:{
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end', 
    },
    cardStyle:{
        marginBottom:10, 
        borderWidth: 1,
        borderRadius: 5, 
        borderColor:'#EEEDED'
    },
    cardCoverStyle:{
        height:150,marginBottom:10
    },
    cardContentStyle:{
        flexDirection:'row', 
        alignContent:'center',
        alignItems:'center', 
        marginBottom:10
    }
})