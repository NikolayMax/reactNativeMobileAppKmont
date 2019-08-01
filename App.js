import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import { Icon, Container, Content, Header, Left, Body, Right, List, ListItem } from "native-base";

export default class App extends Component{
    render(){
        return (
            <AppWrawerNavigator />
        )
    }
}
const CustomDrawerContentComponent = (props)=>{
     return (
         <Container>
             <Header style={{backgroundColor:'#3a455c', height:90}}>
                 <Left style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                     <Icon name="person" style={{color:'white', marginRight: 5}}/>
                     <Text style={{marginLeft:5, color:'white', fontSize:22, fontStyle:'italic'}}>Hello, Varum</Text>
                 </Left>
             </Header>
             <Content>
                <FlatList data={
                    ['Home', 'Shop by Category', 'Today']
                }
                renderItem={({item})=>(
                    <ListItem noBorder>
                        <Text>{item}</Text>
                    </ListItem>
                )}/>
                 <FlatList data={
                     ['Home', 'Shop by Category', 'Today']
                 }
                           renderItem={({item})=>(
                               <ListItem noBorder>
                                   <Text>{item}</Text>
                               </ListItem>
                           )}/>
                 <FlatList data={
                     ['Home', 'Shop by Category', 'Today']
                 }
                           renderItem={({item})=>(
                               <ListItem noBorder>
                                   <Text>{item}</Text>
                               </ListItem>
                           )}/>
             </Content>
         </Container>
     )
}
const AppWrawerNavigator = new DrawerNavigator({
    HomeScreen: {screen:HomeScreen}
},{
        drawerPosition: "left",
        contentComponent:CustomDrawerContentComponent
    });
