import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import style from "./styles";
import Header from "../header/Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      activePlayer: 1,
      winner: ""
    };
  }

  componentDidMount() {
    this.initializeGame();
  }

  initializeGame = () =>
    this.setState({
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      activePlayer: 1
    });

  squarePress = (row, col) => {
    let activePlayer = this.state.activePlayer;

    let currentValue = this.state.gameState[row][col];
    if (currentValue !== 0) {
      return;
    }

    let tempArr = this.state.gameState.slice();
    tempArr[row][col] = activePlayer;
    this.setState({ gameState: tempArr });

    // Switch between players
    let nextActivePlayer = activePlayer === 1 ? -1 : 1;
    this.setState({ activePlayer: nextActivePlayer });

    // Check for winner
    let winner = this.decideWinner();
    console.log("winner:", winner);
    if (winner === 1) {
      Alert.alert("Player One is the winner");
      this.initializeGame();
    } else if (winner === -1) {
      Alert.alert("Player Two is the winner");
      this.initializeGame();
    }
  };

  decideWinner = () => {
    let MAX_SIZE = 3;
    let tempArr = this.state.gameState;
    var total;

    // Row check
    for (let i = 0; i < MAX_SIZE; i++) {
      total = tempArr[i][0] + tempArr[i][1] + tempArr[i][2];
      if (total === 3) {
        return 1;
      } else if (total === -3) {
        return -1;
      }
    }

    // Column check
    for (let i = 0; i < MAX_SIZE; i++) {
      total = tempArr[0][i] + tempArr[1][i] + tempArr[2][i];
      if (total === 3) {
        return 1;
      } else if (total === -3) {
        return -1;
      }
    }

    // Diagonal
    total = tempArr[0][0] + tempArr[1][1] + tempArr[2][2];
    if (total === 3) {
      return 1;
    } else if (total === -3) {
      return -1;
    }
    total = tempArr[2][0] + tempArr[1][1] + tempArr[0][2];
    if (total === 3) {
      return 1;
    } else if (total === -3) {
      return -1;
    }

    // Draw
    return 0;
  };

  renderScreen() {
    let that = this;
    return (
      <View style={style.wrapper}>
        <Header />
        <View style={style.row}>
          <TouchableOpacity
            onPress={() => that.squarePress(0, 0)}
            style={[style.square, style.borderLeft, style.borderTop]}
          >
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => that.squarePress(0, 1)}
            style={[style.square, style.borderTop]}
          >
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => that.squarePress(0, 2)}
            style={[style.square, style.borderTop, style.borderRight]}
          >
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          <TouchableOpacity
            onPress={() => that.squarePress(1, 0)}
            style={[style.square, style.borderLeft]}
          >
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => that.squarePress(1, 1)}
            style={style.square}
          >
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => that.squarePress(1, 2)}
            style={[style.square, style.borderRight]}
          >
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          <TouchableOpacity
            onPress={() => that.squarePress(2, 0)}
            style={[style.square, style.borderLeft, style.borderBottom]}
          >
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => that.squarePress(2, 1)}
            style={[style.square, style.borderBottom]}
          >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => that.squarePress(2, 2)}
            style={[style.square, style.borderBottom, style.borderRight]}
          >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.initializeGame()}
          style={style.winnerText}
        >
          <Text style={style.reset}>New Game</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderIcon = (row, col) => {
    let val = this.state.gameState[row][col];
    switch (val) {
      case 1:
        return (
          <Image
            source={require("../../assets/images/circle.png")}
            style={style.icon}
          />
        );
      case -1:
        return (
          <Image
            source={require("../../assets/images/cross.png")}
            style={style.icon}
          />
        );
      default:
        return <View />;
    }
  };

  render() {
    return this.renderScreen();
  }
}

export default Home;
