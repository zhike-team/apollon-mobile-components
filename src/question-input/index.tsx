import * as React from 'react'
import './question-input.css'

const MIN_SCORE = 0
const MAX_SCORE = 5
const MAX_DECIMAL_NUM = 4
const DECIMAL_NUM = 2

interface IPropsInterface {
  mode: string,
  score?: string,
  onBlur?: (score: number) => void,
  onError?: (message: string) => void
}

interface IStateInterface {
  value: string
}

class QuestionaireInput extends React.Component<IPropsInterface, IStateInterface> {

  state = {
    value: this.props.score || ''
  }

  handleChange = (event: any) => {
    this.setState({
      value: event.target.value
    })
  }

  actionHandler = (actionName: string, actionValue: string | number) => {
    const handler = this.props[actionName]
    if (handler) {
      handler(actionValue)
    }
  }

  handleCheckAndSubmit = () => {
    let scoreNum: any = +this.state.value
    let actionName = 'onBlur'
    let actionValue = scoreNum
    if (!scoreNum ||
      isNaN(scoreNum) ||
      scoreNum < MIN_SCORE ||
      scoreNum > MAX_SCORE
    ) {
      this.setState({ value: '' })
      actionName = 'onError'
      actionValue = `请输入${MIN_SCORE}到${MAX_SCORE}之间有效数字`
    } else if (`${scoreNum}`.length > MAX_DECIMAL_NUM) {
      const modifiedValue = scoreNum.toFixed(DECIMAL_NUM)
      this.setState({ value: modifiedValue })
      actionValue = modifiedValue
    }
    this.actionHandler(actionName, actionValue)
  }

  render () {
    const { score, mode } = this.props
    const inputProp = mode === 'view'
      ? { defaultValue: score, disabled: true }
      : { onBlur: this.handleCheckAndSubmit, value: this.state.value }
    return (
      <input
        type='text'
        onChange={this.handleChange}
        {...inputProp}
      />
    )
  }
}

export default QuestionaireInput
