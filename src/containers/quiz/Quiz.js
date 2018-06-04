import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchQuiz } from '../../redux/actions/app'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import CircularProgress from 'material-ui/CircularProgress';
import QuizFormat from './QuizFormat'


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
  static getDerivedStateFromProps(props, state) {
    const {
      store: {
        app: {
          quizTitle,
          questions,
          loading
        }
      }
    } = props

    if (loading) {
      return {
        open: true,
        loading: true
      }
    }

    if (quizTitle) {
      return {
        loading: false,
        quizTitle,
        questions
      }
    }
    console.log({ props: props.store, state })
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loading: false,
      quizTitle: null,
      questions: null
    }
  }
  fetchQuiz = () => {
    // this.setState(() => ({ open: true }))
    this.props.actions.fetchQuiz({ acctType: 'programming' })
  }
  toggleModal = () => {
    this.setState(() => ({ open: !this.state.open }))
  }
  render() {
    const { open, loading, quizTitle, questions } = this.state
    if (questions) { console.log({ questions }) }
    const actions = [
      <RaisedButton
        label="cancel"
        onClick={this.toggleModal}
      />
    ]
    return (
      <Wrapper>
        <Title>from quiz</Title>
        <Bodytext>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto incidunt sequi pariatur, sint doloremque autem quam amet omnis fugiat, quisquam ex repudiandae consequuntur.</Bodytext>
        <RaisedButton label="Start" onClick={this.fetchQuiz} />
        <Dialog
          open={open}
          actions={loading ? null : actions}
          title={quizTitle || null}
        >
        {
          loading ? <CircularProgress /> : <QuizFormat quizTitle={quizTitle} questions={questions} />
        }
        </Dialog>
      </Wrapper>
    )
  }
}
const mapStore = store => ({
  store: {
    app: store.app
  }
})
const mapDispatch = dispatch => ({
  actions: {
    fetchQuiz: bindActionCreators(fetchQuiz, dispatch)
  }
})
export default connect(mapStore, mapDispatch)(Quiz)
