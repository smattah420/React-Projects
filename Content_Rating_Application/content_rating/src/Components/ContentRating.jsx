
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
     this.state = {
      likes: 0,
      dislikes: 0,
       handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));

      },
        handleDislike:() => {
          this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));

      }
    };

  }
  render() {
    return (
     <>
     <div className='content-rating'>
      <p>
    Content Rating is a web application built using React.
    It allows users to rate different types of online content.
    Users can give ratings based on their personal experience.
    The application provides a simple and user-friendly interface.
    Ratings help other users understand the quality of the content.
    The project demonstrates React components, state, and event handling.
    </p>
    <div className='rating-buttons'>
      <button className="like-button"  onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
    </div>
     </div>

     </>
    );
  }
}

export default ContentRating;
