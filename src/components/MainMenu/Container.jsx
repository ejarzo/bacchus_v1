import React from 'react';
import MainMenuComponent from './Component';

class MainMenuContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      request: 'who is thom yorke',
      responseText: '',
    };

    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.parseResponse = this.parseResponse.bind(this);
  }

  parseResponse(response) {
    console.log(response);
    let value = '';

    if (response.entities.affirmation) {
      value = response.entities.affirmation[0].value;
    }
    else if (response.entities.wikipedia_search_query) {
      value = response.entities.wikipedia_search_query[0].value;
      const wikipediaUrl = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?';
      fetch(wikipediaUrl, { mode: 'no-cors' })
        .then((response) => {
          console.log(response.text())
          // return response.json();
        })
        .then((responseJson) => {
          // this.setState({
          //   responseText: response.search[0].snippet,
          // });
      });
    }
    
    this.setState({
      responseText: value,
    })
  }

  fetchWitResponse(query) {
    const url = 'https://api.wit.ai/message';
    var params = {
      v: '20180301',
      q: query,
      access_token: 'ORGXHB5MEJHIXS72UHHBIZVPZI7UCC4R',
    };

    var esc = encodeURIComponent;
    var queries = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

    fetch(url + '?' + queries)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        this.parseResponse(responseJson);
    });
  }

  handleSubmitClick(event) {
    if(this.state.request) {
      this.fetchWitResponse(this.state.request);
    }
  }
  
  handleRequestChange(event) {
    this.setState({
      request: event.target.value,
    });
  }

  render() {
    return (
      <MainMenuComponent
        onRequestChange={this.handleRequestChange}
        onClick={this.handleSubmitClick}
        request={this.state.request}
        responseText={this.state.responseText}
      />
    );
  }
}

export default MainMenuContainer;
