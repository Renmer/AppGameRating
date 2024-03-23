import * as React from 'react';
import { View, StyleSheet, Dimensions,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
    Card,
    Text,
    Avatar,
    Divider
 } from 'react-native-paper';
 import { PieChart, BarChart } from "react-native-chart-kit";

 const screenWidth = Dimensions.get("window").width;
 const LeftContentComplete = props => <Avatar.Icon {...props} icon="check-circle" />
 const LeftContentNoComplete = props => <Avatar.Icon {...props} icon="alpha-x-circle" />
 const LeftContentRating = props => <Avatar.Icon {...props} icon="star" />
 export default function Stats (){
   const dataComplete = [
      {
        name: "Steam",
        games: 3,
        color: "#66c0f4",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
      {
        name: "Epic Games",
        games: 5,
        color: "#000000",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
      {
        name: "GOG",
        games: 3,
        color: "#32174D",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
    ];

    const dataNoComplete = [
      {
        name: "Steam",
        games: 10,
        color: "#66c0f4",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
      {
        name: "Epic Games",
        games: 6,
        color: "#000000",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
      {
        name: "GOG",
        games: 3,
        color: "#32174D",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
    ];
    const dataRating = {
      labels: ["5★", "4★", "3★", "2★", "1★"], // optional
      datasets: [
        {
          data: [4, 4, 2, 1, 2]
        }
      ]
    };
    const chartConfig = {
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#ffa726',
      },
    };

    return (
        <SafeAreaView style={styles.container}>
         <ScrollView style={{margin:10}}>
            <Card style={styles.cardStyle}>
               <Card.Title title="Juegos Completados" subtitle="Por plataforma" left={LeftContentComplete} />
               <Divider/>
               <Card.Content>
                  <PieChart
                     data={dataComplete}
                     width={screenWidth-50}
                     height={180}
                     chartConfig={chartConfig}
                     accessor={"games"}
                     backgroundColor={"transparent"}
                     center={[0, 0]}
                  />
                  <Text style={{fontSize:15}}>Total completado: 11</Text>
               </Card.Content>
            </Card>
            <Card style={styles.cardStyle}>
               <Card.Title title="Juegos No Completados" subtitle="Por plataforma" left={LeftContentNoComplete} />
               <Divider/>
               <Card.Content>
                  <PieChart
                     data={dataNoComplete}
                     width={screenWidth-50}
                     height={180}
                     chartConfig={chartConfig}
                     accessor={"games"}
                     backgroundColor={"transparent"}
                     center={[0, 0]}
                  />
                  <Text style={{fontSize:15}}>Total no completado: 20</Text>
               </Card.Content>
            </Card>
            <Card style={styles.cardStyle}>
               <Card.Title title="Juegos Valorados" left={LeftContentRating} />
               <Divider/>
               <Card.Content>
               <BarChart
                  data={dataRating}
                  width={screenWidth-50}
                  height={190}
                  chartConfig={chartConfig}
                  verticalLabelRotation={0}
                />
                  <Text style={{fontSize:15}}>Valoracion media: ★★★★</Text>
               </Card.Content>
            </Card>
         </ScrollView>

        </SafeAreaView>
    )
 }
 const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    cardStyle:{
        marginBottom:10, 
        borderWidth: 1,
        borderRadius: 5, 
        borderColor:'#EEEDED'
    },
  });
  