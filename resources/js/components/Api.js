import Axios from 'axios';


axios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
});

//Users
export const logUser = (obj) => {
  return axios({
    method: 'post',
    url:'https://protected-savannah-56742.herokuapp.com/api/login',
    config : {headers:{'Content-Type' : "application/json"}},
    data:obj
  })
    .catch(err => console.log(err))
}

export const unLogUser = () => {
  return axios
    .post('https://protected-savannah-56742.herokuapp.com/api/logout')
    .catch(err => console.log(err))
}

export const registerUser = (obj) => {
  return axios({
  method: 'post',
  url:'https://protected-savannah-56742.herokuapp.com/api/register',
  config : {headers:{'Content-Type' : "application/json"}},
  data:obj
  })
  .catch(err => console.log(err))
}
export const userSession = () => {
  return axios
    .get('https://protected-savannah-56742.herokuapp.com/api/user')
    .catch(err => console.log(err))
}

//Events participation
export const registerEvent = (eventId) => {
  return axios
  .get('https://protected-savannah-56742.herokuapp.com/api/events/'+eventId+'/inscription')
  .catch(err => console.log(err))
}

export const unregisterEvent = (eventId) => {
  return axios
  .get('https://protected-savannah-56742.herokuapp.com/api/events/'+eventId+'/desinscription')
  .catch(err => console.log(err))
}

//crud events
export const createEvent = (obj) => {
  return axios
    .post('https://protected-savannah-56742.herokuapp.com/api/events/create', obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const getAllEvents = () => {
  return axios
    .get('https://protected-savannah-56742.herokuapp.com/api/events1')
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getOldEvents = () => {
  return axios
    .get('https://protected-savannah-56742.herokuapp.com/api/events/1/5')
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getOneEvent = (eventId) => {
  return axios
    .get('https://protected-savannah-56742.herokuapp.com/api/events2/'+eventId)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const editEvent = (eventId, obj) => {
  console.log(obj);
  console.log(eventId);
  return axios
    .put('https://protected-savannah-56742.herokuapp.com/api/events3/'+eventId, obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const deleteEvent = (eventId) => {
  return axios
  .delete('https://protected-savannah-56742.herokuapp.com/api/events/'+eventId)
  // .then(this.props.history.push('/'))
  .catch(err => console.log(err))
}
