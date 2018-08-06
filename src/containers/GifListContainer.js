import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
  constructor(){
    super();
    this.state={
      gifs: []
    }
  }

  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g')
    .then(res => res.json())
    .then(data => this.setState({
      gifs: data.gifs[0..2]
    }))
  }

  handleSubmit = () => {

  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
