import * as React from 'react'
import QuestionaireInput from '../question-input'
import './question.css'

const teacherKeys = ['abilities', 'atmosphere', 'timeliness']

const descriptionMapHandler = (item: any, index: number, questionScoreDescription: any) => {
  return (
    <p key={item} className='teacher-description'>
      {`${questionScoreDescription[index]}：${item}`}
    </p>
  )
}

interface SubjectInterface {
  id: number,
  name: string,
  examinationId: number
}

interface IPropsInterface {
  title: string,
  index: number,
  mode: 'view' | 'create',
  type: string,
  text: string,
  description?: string[],
  score?: number | any,
  onChange?: (data: any) => void,
  onError?: (message: string) => void,
  teachers?: any,
  questionScoreDescription?: string[],
  subjects?: SubjectInterface[]
}

class Question extends React.Component<IPropsInterface, any> {

  renderDescription = (description: any) => {
    const { questionScoreDescription } = this.props
    if (questionScoreDescription) {
      return description.map((item: any, index: number) =>
        descriptionMapHandler(item, index, questionScoreDescription)
      )
    } else {
      return null
    }
  }

  renderTextarea = (type: string, text: string, disabled: boolean) => {
    const handler = (event: any) => this.handleChangeScore(event.target.value, type)
    return (
      <textarea
        onChange={handler}
        disabled={disabled}
        value={text}
      />
    )
  }

  handleChangeScore = (value: string, type: string, subjectId?: number) => {
    const { onChange } = this.props
    if (onChange) {
      let data = {}
      if (['advice', 'favoriteTeacher'].includes(type)) {
        data = {
          [type]: value
        }
      } else if (subjectId) {
        data = {
          [type]: {
            [subjectId]: value
          }
        }
      } else {
        data = {
          ptScore: {
            [type]: value
          }
        }
      }
      return onChange(data)
    }
  }

  renderInput = () => {
    const { type, teachers, score, mode, subjects = [], onError } = this.props
    // tslint:disable-next-line:no-empty
    const errorHandler = onError ? (errMsg: string) => onError(errMsg) : () => {}
    if (teacherKeys.includes(type)) {
      const teachersBlocks = teachers.map((teacher: any) => {
        const scoreProp = mode === 'view' ? { score: score[teacher.subjectId] || '', mode } : { mode }
        const theSubject: any = subjects.find((subject: any) => subject.id === teacher.subjectId)
        const onBlurHandler = (score: any) => this.handleChangeScore(score, type, teacher.subjectId)
        return (
          <p key={teacher.subject} className='teacher-score-input'>
            <span className='subject'>
              {theSubject.name}
              老师
            </span>
            <span className='name'>
              {teacher.name}
            </span>
            <QuestionaireInput
              onBlur={onBlurHandler}
              onError={errorHandler}
              {...scoreProp}
            />
          </p>)
      })
      return (
        <div className='teachers-scores'>
          <p className='teacher-score-title'>
            请根据对应分数区间给予具体打分
          </p>
          <div className='teachers-wrapper'>
            {teachersBlocks}
          </div>
        </div>
      )
    } else {
      const scoreProp = mode === 'view' ? { score: score || '', mode } : { mode }
      const handler = (score: any) => this.handleChangeScore(score, type)
      return (
        <p className='pt-score-title'>
          请根据对应分数区间给予具体打分
          <QuestionaireInput
            onBlur={handler}
            onError={errorHandler}
            {...scoreProp}
          />
        </p>
      )
    }
  }

  render () {
    const { index, title, description, type, text, mode } = this.props
    const isTextarea = ['favoriteTeacher', 'advice'].includes(type)
    return (
      <div className='question-item-container'>
        <div className='title'>
          <span className='index'>
            {index}
          </span>
          <p className='text'>
            {title}
            {!isTextarea && <span className='red-star'>*</span>}
            {index === 1 && <span className='tip'>（PT=personal tutor, 私人教师）</span>}
          </p>
        </div>
        <div className='description'>
          {!isTextarea && (this.renderDescription(description))}
          {!isTextarea && this.renderInput()}
          {isTextarea && this.renderTextarea(type, text, mode === 'view')}
        </div>
      </div>
    )
  }
}

export default Question
