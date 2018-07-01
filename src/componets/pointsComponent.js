import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import '../pointsComponent.css';
import '../progressBar.css';

const ProgressBar = (props) => (
  <div className="progress progress-bar-vertical">
    <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{height: `${props.percent}%`}}>
      <span className="sr-only">{props.percent} Complete</span>
    </div>
  </div>
)

class PointsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 50 }
  }

  increase = () =>{
    this.setState(prevState=>{
      if (prevState.height > 100){
        return {height:0}
      }
      return {height:prevState.height+10}
    });
  }

  render() {

    return (
      <div className="pointsComponent">
        <Grid>
          <Grid.Column color='blue' width='13'>
          <button className={`ui icon huge button`} onClick={this.increase}>
            <i className="ui plus icon"></i>
        </button>
          </Grid.Column>
          <Grid.Column  width='3'>
          <ProgressBar percent={this.state.height}/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default PointsComponent;