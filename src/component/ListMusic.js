import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import {  getTodayMovieAction } from '../actions';
import { Icon } from 'react-native-elements';

class ListMusic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: 0,
            data: []
        }
    }
    componentDidMount() {
        this.props.getToDday();
  
        // this.props.onCallYearMusic();
        console.log(this.props.getToday)
    }
    componentWillUnmount() {
       
    }
    ClickToday = () => {
       
    }
    ClickMonth = () => {
       
    }
    ClickYear = () => {
       
    }

    getToDday = () => {
        this.props.getToDday();
    }
    backAction = () => {
        console.log('disconnect')
        return true;
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#343a40" }}>
                <View style={{ flexDirection: 'row', marginTop: 5, marginHorizontal: 10, justifyContent: 'space-between', paddingVertical: 10, marginBottom: 10 }}>
                    <TouchableOpacity onPress={()=>{}}>
                        <Icon name='menu' size={20} color="#517fa4" type='feather' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.getToDday}>
                        <Icon name='library-music' size={30} color="#517fa4" type='FontAwesome' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="search" size={20} color="#517fa4" type='Feather' />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#e12f81', justifyContent: 'space-between', paddingHorizontal: 10, paddingBottom: 100, paddingTop: 10 }}>
                    <TouchableOpacity onPress={this.ClickToday}>
                        <Text style={{ color: 'white', fontWeight: (this.state.select == 0) ? 'bold' : 'normal' }}> Hôm nay </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.ClickMonth}>
                        <Text style={{ color: 'white', fontWeight: (this.state.select == 1) ? 'bold' : 'normal' }}> Tháng </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.ClickYear}>
                        <Text style={{ color: 'white', fontWeight: (this.state.select == 2) ? 'bold' : 'normal' }}> Năm </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: -80, marginHorizontal: 20, flex: 1, backgroundColor: '#23282c', borderTopLeftRadius: 7, borderTopRightRadius: 7 }}>
                    <FlatList
                        data={this.props.getToday}
                        keyExtractor={(item) => item.href}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Home', { index: index })
                            }
                            }>
                                <View style={{ flexDirection: 'row', margin: 9 }}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={{ width: 60, height: 60 }}
                                    />
                                    <Text numberOfLines={2}
                                        style={{
                                            paddingHorizontal: 9,
                                            flex: 3,
                                            color: 'white',

                                        }}
                                    >
                                        {item.title.slice(4)}
                                    </Text>
                                    <Icon name='play-circle-outline' size={30} color="#517fa4" type='FontAwesome' />
                                </View>
                                <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }}></View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getToday: state.getTodayReducers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getToDday: () => {
            dispatch(getTodayMovieAction())
        },
      
    };
}


const Musics = connect(mapStateToProps, mapDispatchToProps)(ListMusic);
export default Musics;