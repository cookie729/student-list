import { CREATE_STUDENT, DELETE_STUDENT } from '../actions'

// const studentsUpdate = (state = [], action) => {
const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_STUDENT:
      const event = {
        name: action.name,
        email: action.email,
        phone: action.phone,
        password: action.password,
      }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...event }]
    case DELETE_STUDENT:
      return state.filter((event) => event.id !== action.id)
    default:
      return state
  }
}

// export default studentsUpdate
export default events
