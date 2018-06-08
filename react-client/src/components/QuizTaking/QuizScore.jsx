import React, { Component } from 'react';
import Leaderboard from '../LeaderboardComponents/Leaderboard.jsx';

/*
- should have a state that keep track of current quiz score
- should display result of quiz score when quiz is finished
- should have a patch request that sends the score back to update database 
- should fetch score
- 
- 

*/

class QuizScore extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    score: 0,
    leaderboard: []
  }
}

//request an arary of top 10 score user profile  
fetchScore() {
  axios.get("/home/leaderboard").then(({ data: data }) => {
    console.log("success here's the top 10!", data);
    this.setState({
      leaderboard: data
    });
  });
}
//receive user's updated total score
UpdateScore(userId) {
  axio.patch(`/home/${userId}`).then(({updated : updated}) => {
    console.log('total score is updated!')
    this.setState({
      totalScore: updated
    })
  })
}


render() {
  return (

    <div>
      
    </div>
  )
  }



}

export default QuizScore;

