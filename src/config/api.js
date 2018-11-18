import AuthService from '../components/Auth/AuthService';
const Auth = new AuthService();

export const vods = 'http://localhost:8080/api/vods'
export const timestamps = 'http://localhost:8080/api/timestamps'
export const users = 'http://localhost:8080/api/users'
export const login = 'http://localhost:8080/auth/login'

export const addTimestamp = (timestamp, topic, category, vodId, vod) =>
  fetch(`${timestamps}?access_token=${Auth.getToken()}`, {
    method: 'post',
    body: JSON.stringify({
      timestamp: timestamp,
      topic: topic,
      category: category,
      vodId: vodId,
      vod: vod,
      uid: Auth.getProfile()._id
    }),
    headers: {
      'Content-Type': 'application/json',
      'access_token': Auth.getToken()
    }
  })
  .then(response => response.json())
  .then(response =>
    fetch(`${vods}/${vod}?access_token=${Auth.getToken()}`, {
      method: 'put',
      body: JSON.stringify({
        timestamp: response._id
      }),
      headers: {
        'Content-Type': 'application/json',
        'access_token': Auth.getToken()
      }
    })
  )
  .catch((err) => console.log(err))

