import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/games'

const getByID = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const getByName = (name) => {
    const request = axios.get(`${baseUrl}/byname/${name}`)
    return request.then(response => response.data)
}


export default { getByID,getByName  }