import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchQuiz } from '../../redux/actions/app'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'
// import Dialog from 'material-ui/Dialog'

const Wrapper = styled(Paper)`
  padding: 20px 55px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`
const Title = styled.h3`
  color: #383838;
`
const Bodytext = styled.p`
color: #383838;
`

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  fetchQuiz = () => {
    this.props.actions.fetchQuiz({ acctType: 'programming' })
  }
  render() {
    return (
      <Wrapper>
        <Title>from quiz</Title>
        <Bodytext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto incidunt sequi pariatur, sint doloremque autem quam amet omnis fugiat, quisquam ex repudiandae consequuntur.</Bodytext>

        <RaisedButton label="Start" onClick={this.fetchQuiz} />
      </Wrapper>
    )
  }
}
const mapDispatch = dispatch => ({
  actions: {
    fetchQuiz: bindActionCreators(fetchQuiz, dispatch)
  }
})
export default connect(null, mapDispatch)(Quiz)
