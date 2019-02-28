import React, { Component } from 'react';
import './Create.css';

class Create extends Component {

  constructor(props){
    super(props)
    this.state ={
      title:null,
      storyLine: null,
      trailerUrl: null,
      poster: null
    }
    
  }

  render() {
    return (
      <div className="Create">
         <form onSubmit={(e)=>this.props.handleCreateSubmit(e, this.state)}>
         <label htmlFor="title">Title</label>
         <input type="text" onChange={this.props.handleChange.bind(this)} name="title" placeholder="Titanic" />
         <label htmlFor="storyLine">Story Line</label>
         <input type="text" onChange={this.props.handleChange.bind(this)} name="storyLine" placeholder="Text" />
         <label htmlFor="trailerUrl">Trailer Url</label>
         <input type="text" onChange={this.props.handleChange.bind(this)} name="trailerUrl" placeholder="https://www.youtube.com/watch?v=DNyKDI9pn0Q" />
         <label htmlFor="poster">Movie Poster</label>
         <input type="text" onChange={this.props.handleChange.bind(this)} name="poster" placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzg6o0KjhufKFU1iBNr1zuyi0YDNgCUw4Ky5SNATZDVKaIUkiAA" />
         <input type="submit" defaultValue="Create" /></form>
      </div>
    );
  }
}

export default Create;
