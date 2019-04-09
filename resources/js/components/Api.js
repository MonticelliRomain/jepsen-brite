import axios from 'axios';

//Users
export const logUser = (obj) => {
  return axios({
    method: 'post',
    url:'/api/login',
    config : {headers:{'Content-Type' : "application/json"}},
    data:obj
  })
    .catch(err => console.log(err))
}

export const unLogUser = () => {
  return axios
    .post('/api/logout')
    .catch(err => console.log(err))
}

export const registerUser = (obj) => {
  return axios({
  method: 'post',
  url:'/api/register',
  config : {headers:{'Content-Type' : "application/json"}},
  data:obj
  })
  .catch(err => console.log(err))
}
export const userSession = () => {
  return axios
    .get('/api/user')
    .catch(err => console.log(err))
}

//Events participation
export const registerEvent = (eventId) => {
  return axios
  .get('/api/events/'+eventId+'/inscription')
  .catch(err => console.log(err))
}

export const unregisterEvent = (eventId) => {
  return axios
  .get('/api/events/'+eventId+'/desinscription')
  .catch(err => console.log(err))
}

//crud events
export const createEvent = (obj) => {
  return axios
    .post('/api/events/create', obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const getAllEvents = () => {
  return axios
    .get('/api/events')
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getOldEvents = () => {
  return axios
    .get('/api/events/1/5')
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const getOneEvent = (eventId) => {
  return axios
    .get('/api/events/'+eventId)
    .then(response => response.data)
    .catch(err => console.log(err))
}

export const editEvent = (eventId, obj) => {
  console.log(obj);
  console.log(eventId);
  return axios
    .put('/api/events/'+eventId, obj)
    // .then(this.props.history.push('/'))
    .catch(err => console.log(err))
}

export const deleteEvent = (eventId) => {
  return axios
  .delete('/api/events/'+eventId)
  // .then(this.props.history.push('/'))
  .catch(err => console.log(err))
}
