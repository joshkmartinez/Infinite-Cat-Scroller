import React, { Component } from 'react';
import { View, FlatList, Dimensions, Text, Image } from 'react-native';
import CatCard from './app/CatCard';

const cardHeight = 200;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      numObjects: 15,
    }
  }

  loadBlocks = () => {
    this.setState({
      numObjects: this.state.numObjects * 2,
    })
  }

  render() {
    const blockArray = new Array(this.state.numObjects).fill({imageUrl: this.state.url});

    return (
      <View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 54,
            backgroundColor: '#9b59b6', // amethyst color
            alignItems: 'center',
            justifyContent: 'flex-end',
            borderBottomWidth: 0.5,
            borderColor: 'purple',
          }}
        >
          <Text
            style={{
              fontSize: 27,
            }}
          >
            Infinite pictures of cats!
          </Text>
        </View>
        <FlatList
          data={blockArray}
          onEndReached={this.loadBlocks}
          initialNumToRender={33}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={({item}) => 
            <CatCard width={Dimensions.get('window').width -20} />
          }
        />
      </View>
    );
  }
}