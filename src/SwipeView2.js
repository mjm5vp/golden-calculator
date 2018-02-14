import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';

import GoldenRatioCalc from './GoldenRatioCalc';


export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
        };
    }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

    componentWillMount() {
        // Flipcard animation

        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
            this.value = value;
        });
        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
        });
        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
        });
        this.frontOpacity = this.animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0]
        });

        this.backOpacity = this.animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1]
        });
    }
    render() {
        const frontAnimatedStyle = {
        transform: [
            { rotateY: this.frontInterpolate }
        ]
      };
        const backAnimatedStyle = {
        transform: [
            { rotateY: this.backInterpolate }
        ]
      };
    return (
        <View style={styles.container}>
          <View>
               <Animated.View
                 style={[
                   styles.flipCard1,
                   styles.squareCardContainer,
                   frontAnimatedStyle,
                   { opacity: this.frontOpacity }]}
               >
                  {/* <TouchableOpacity
                    onPress={() => this.flipCard('first')}
                    style={styles.squareCardContainer}
                  > */}
                      {/* <Image
                        style={{
                          width: 60,
                          height: 60,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'transparent'
                        }}
                        source={{
                          uri: 'https://facebook.github.io/react-native/img/header_logo.png'
                        }}
                      />
                      <Text style={styles.rewardTitle}>Front title</Text>
                      <Text
                        style={{
                          paddingTop: 5,
                          fontSize: 12,
                        }}
                      > Rs. 200</Text> */}
                      <View style={{ flex: 1 }}>
                        <GoldenRatioCalc />

                      </View>
                  {/* </TouchableOpacity> */}
              </Animated.View>
              <Animated.View style={[backAnimatedStyle, styles.squareCardContainer, styles.flipCard1, styles.flipCardBack1, {opacity: this.backOpacity}]}>
                  {/* <TouchableOpacity onPress={() => this.flipCard('second')} style={[styles.squareCardContainer, {backgroundColor: '#FC515A'}]} > */}
                      <View style={{justifyContent: 'center', padding: 10}}>
                          <Text style={{color: '#fff', textAlign: 'center'}}>Back title</Text>
                      </View>
                  {/* </TouchableOpacity> */}
              </Animated.View>
            </View>
             <View>
               <Animated.View style={[styles.flipCard1, styles.squareCardContainer, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
                  {/* <TouchableOpacity onPress={() => this.flipCard()} style={styles.squareCardContainer }> */}
                      <Image style={{width:60,height:60,alignItems:'center', justifyContent:'center', backgroundColor:"transparent"}} source={{uri: "https://facebook.github.io/react-native/img/header_logo.png"}} />
                      <Text style={styles.rewardTitle}>Front title</Text>
                      <Text style={{paddingTop: 5, fontSize:12}}>(125 coins)</Text>
                  {/* </TouchableOpacity> */}
              </Animated.View>
              <Animated.View style={[backAnimatedStyle, styles.squareCardContainer, styles.flipCard1, styles.flipCardBack1, {opacity: this.backOpacity}]}>
                  {/* <TouchableOpacity onPress={() => this.flipCard()} style={[styles.squareCardContainer, {backgroundColor: '#FC515A'}]} > */}
                      <View style={{justifyContent: 'center', padding: 10}}>
                          <Text style={{color: '#fff', textAlign: 'center'}}>Back title</Text>
                      </View>
                  {/* </TouchableOpacity> */}
              </Animated.View>
            </View>

            <View>
              <Button
                title="flip"
                onPress={() => this.flipCard()} />
            </View>
        </View>
    );
  }
}

var width = Dimensions.get('window').width; //full width
var containerWidth 	= 	(width - 30) / 2 - 7.5;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    rewardTitle : {
        textAlign:'center',
        lineHeight:18,
        marginBottom: 5,
        width:120,
        fontSize:12,
        paddingTop: 10,
        color: '#000',
        // fontWeight: 'bold',
    },
    squareCardContainer : {
        // flex:2,
        alignItems:'center',
        justifyContent:'center',
        // height: 50,
        // marginBottom:5,
        backgroundColor: '#FD8E94',
        height: containerWidth,
        width:containerWidth
    },
  flipCard1 :{
    backfaceVisibility: 'hidden',
  },
  flipCardBack1 : {
    backgroundColor: "red",
    zIndex: -2,
    position: "absolute",
    top: 0,
  }
});
