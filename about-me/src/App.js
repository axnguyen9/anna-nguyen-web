import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Anna from './images/an.jpg';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button
} from "@material-ui/core/";
import AlertDialog from './components/AlertDialog.js'

const styles = theme => ({
  root: {
    width: 100,
    height: 100
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      value: 1
    }
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.comment);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="about">

      <Card>
      <header className="header">
        <Avatar
          classes={{
            root: classes.root,
          }}
          className="img"
          src={ Anna }
          variant="circle"
        />
        <h1> A N N A &nbsp; N G U Y E N </h1>
      </header>
      </Card>

      <Card className="bio">
        <h3>a b o u t &nbsp; m e</h3>
        <p>Hi! I'm Anna Nguyen, an undergraduate at Cornell University
        majoring in computer science with a minor in Information Science.
        I want to specialize in software engineering and am interested in
        Human-Computer Interaction (HCI) and UX/UI Design,
        particularly in the medical field. On campus, I am currently involved in
        Women in Computing at Cornell, the Smart is Strong Foundation, Cornell HealthTech
        Project Team, and The Chai Notes A Capella! </p>
      </Card>

      <Card className="comment">
      <h3>c o m m e n t !</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
        <FormControl className="input" margin="normal" fullWidth="true">
          <InputLabel htmlFor="comment">Comment:</InputLabel>
          <Input id="comment"
            type="text"
            value={this.state.comment}
            onChange={e => this.handleChange(e)}/>
        </FormControl>
        </FormGroup>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={(e) => this.handleSubmit(e)}
          >
          Submit
        </Button>
      </form>
      </Card>

      <div className="fun">
      <h3>f u n &nbsp; f a c t </h3>
      <AlertDialog />
      </div>

      </div>
    );
  }
}

export default withStyles(styles)(App);
