import React from 'react';
import axios from 'axios';

const API = "http://localhost:3005/api";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {}
    }

  }   

  componentDidMount() {
    const accessToken = JSON.parse(localStorage.getItem('lbtoken'));

    if (accessToken !== null) {
      axios.get(`${API}/users/${accessToken.value.userId}?access_token=${accessToken.value.id}`)
      .then(res => {
          console.log(res);
          const currentUser = res.data;
          this.setState({currentUser})
      });
    }
       
  }

  render() {
    return (
        <div>Nahu2018<span style={{float: 'right', fontSize: '18px'}}>Bienvenido, {this.state.currentUser.nombre}!</span></div>    
    );
  }
}