import React, { Component } from "react";
import { Text, View, TouchableOpacity, StatusBar, StyleSheet, Platform, Image } from "react-native";

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";
import Swiper from 'react-native-swiper';

export default class HomeScreen extends Component {
    render(){
        return (
            <Container>
                <Header style={{'backgroundColor': '#3a455c', 'height': 60, borderBottomWidth:1, 'borderBottomColor':'#757575'}}>
                    <Left style={{flexDirection:'row'}}>
                        <Icon onPress={()=>this.props.navigation.openDrawer()} name="md-menu" style={{color:'white',  marginRight:15}}></Icon>
                        <FAIcon name="amazon" style={{color:'white', fontSize:32}}></FAIcon>
                    </Left>
                    <Right>
                        <Icon name="md-cart" style={{color:'white',  marginRight:15}}></Icon>
                    </Right>
                </Header>
                <View style={{position:'absolute', left:0, right:0, top:60, height:70,backgroundColor: '#3a455c', flexDirection:'row',
                alignItems:'center', paddingHorizontal:5}}>
                    <TouchableOpacity>
                        <View style={{width:100, 'backgroundColor':'#e7e7eb', height:50, borderRadius: 4, padding:10}}>
                            <Text style={{fontSize:12}}>Shop by</Text>
                            <Text style={{fontWeight: 'bold'}}>Category</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1, height:'100%', marginLeft: 5, justifyContent:'center'}}>
                        <Item style={{backgroundColor:'white',  paddingHorizontal: 10, borderRadius: 4}}>
                            <Icon name="search" style={{fontSize:20, paddingTop: 5}} />
                            <Input placeholder="search"/>
                        </Item>
                    </View>
                </View>
                <Content style={{backgroundColor:'#d5d5d6', marginTop:70}}>
                    <View style={{height:70, backgroundColor:'white', flexDirection:'row', paddingHorizontal:5, alignItems:'center', justifyContent:'space-between'}}>
                        <Text>Hello, Varun Nath</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text>Your Account </Text>
                            <Icon name="arrow-forward" style={{fontSize:20}}></Icon>
                        </View>
                    </View>
                    <Swiper
                        autoplay={true}
                        style={{height:100}}>
                        <View style={{flex:1}}>
                            <Image source={require('../assets/images/post-9--0.png')} style={{flex:1,height:null,width:null,resizeMode: 'contain'}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../assets/images/maxresdefault.jpg')} style={{flex:1,height:null,width:null,resizeMode: 'contain'}}/>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../assets/images/hqdefault.jpg')} style={{flex:1,height:null,width:null,resizeMode: 'contain'}}/>
                        </View>
                    </Swiper>
                    <Card>
                        <CardItem header>
                            <Text>Your recommendations</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    androidHeader:{
        ...Platform.select({
            android:{
                paddingTop: StatusBar.currentHeight
            },
        })
    }
})
