enum QuizActionTypes {
  REQUEST_QUIZES = 'REQUEST_QUIZES',
  SET_QUIZES = 'SET_QUIZES',
  REQUEST_CURRENT_QUIZ = 'REQUEST_CURRENT_QUIZ',
  SET_CURRENT_QUIZ = 'SET_CURRENT_QUIZ',
  SET_SUCCESS_RESULT_QUIZ = 'SET_SUCCESS_RESULT_QUIZ',
  SET_ERROR_RESULT_QUIZ = 'SET_ERROR_RESULT_QUIZ',
  SET_SUCCESS_ANSWER_QUIZ = 'SET_SUCCESS_ANSWER_QUIZ',
  SET_ERROR_ANSWER_QUIZ = 'SET_ERROR_ANSWER_QUIZ',
  SET_NEXT_ACTIVE_QUESTION = 'SET_NEXT_ACTIVE_QUESTION',
  FINISHED_QUIZ = 'FINISHED_QUIZ',
  CLEAR_ANSWERS = 'CLEAR_ANSWERS',
  RESET_RESULTS = 'RESET_RESULTS',
  HIDE_LOADER = 'HIDE_LOADER',
  SHOW_LOADER = 'SHOW_LOADER',
}

export default QuizActionTypes;