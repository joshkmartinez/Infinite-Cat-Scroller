import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
} from 'react-native';

const cardHeight = 200;

export default class CatCard extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
  }
  
  constructor() {
    super();

    this.state = {
      url: 'https://whyevolutionistrue.files.wordpress.com/2017/06/happy-cat.jpg',
    }
  }

  componentWillMount() {
    const myInit = {
      method: 'POST',
    }
    fetch('http://thecatapi.com/api/images/get?type=png', myInit)
    .then((data) => this.setState({
      url: data.url,
    }))
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 10,
          height: cardHeight,
          borderRadius: 6,
          width: this.props.width,
          backgroundColor: '#95a5a6', // concrete color
        }}
      >
        <Image
          source={{ uri: this.state.url}}
          style={{
            margin: 10,
            borderRadius: 3,
            height: cardHeight - 20,
            width: cardHeight + 133,
          }}
        />
      </View>
    );
  }
}