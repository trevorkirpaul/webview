import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'

const AnswerWrapper = styled.div`
  margin-bottom: 5px;
`

const Answer = ({ answerText }) => (
  <AnswerWrapper>
    <RaisedButton label={answerText} />
  </AnswerWrapper>
)

const Question = ({ questionText, answers }) => (
  <div>
    <p>{questionText}</p>
    {
      answers && answers.map(answer => <Answer key={answer.id} answerText={answer.answer} id={answer.id} />)
    }
  </div>
)

export default class QuizFormat extends Component {
  render() {
    console.log('QUIZFORMAT', this.props)
    const {
      quizTitle,
      questions: {
        question: {
          answers,
          text
        }
      }
    } = this.props
    return (
      <div>
        <Question questionText={text} answers={answers} />
      </div>
    )
  }
}
