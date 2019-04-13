import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../aws-config/aws-exports';

Amplify.configure(awsmobile);

export default class Authentication extends Component {
    state = {
      authCode: '',
      username: '',
      password: '',
      email: '',
      nickname: '',
      phoneNumber: '',
    }
  
    singUp = async () => {
      const { username, password, email, nickname, phone_number } = this.state
      
      const user = await Auth.signUp({
          username: this.state.username,
          password: this.state.password,
          attributes: { 
            email: this.state.email,
            nickname: this.state.nickname,
            phone_number: this.state.phone_number }
        })
        .then(res => {console.log('Data: ', user)})
        .then(res => {console.log('Novo usuario cadastrado: ', res)})
        .catch(err => {console.log('Erro ao cadastrar usuario', err)})
      }
  
    confirm_user () {
      const { authCode, username } = this.state
  
      Auth.confirmSignUp('gilmarheavensilva@hotmail.com', authCode)
    }
  
    render() {
      return (
        <View>
          <TextInput
            placeholder="Digite seu email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
  
          <TextInput
            placeholder="Digite sua username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
  
          <TextInput
            placeholder="Digite seu password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
  
          <TextInput
            placeholder="Digite seu nickname"
            value={this.state.nickname}
            onChangeText={nickname => this.setState({ nickname })}
          />
  
          <TextInput
            placeholder="Digite seu numero de telefone"
            value={this.state.phone_number}
            onChangeText={phone_number => this.setState({ phone_number })}
          />
          
          <Button title='new_user' onPress={this.singUp.bind(this)} />
  
          <TextInput
            placeholder="Confirme seu codigo de verificação!"
            value={this.state.authCode}
            onChangeText={authCode => this.setState({ authCode })}
          />
  
          <Button title='confirm code' onPress={this.confirm_user.bind(this)} />
        </View>
      )
    }
  }
  
  