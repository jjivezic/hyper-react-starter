import httpService from './http.service'

class UserService {
  async login(data) {
    console.log('User', data)
    // return httpService.apiRequest('post', 'user/login', user);
    return {
      email: 'Jelena',
      token: 'to79472hsf%#&hHFFOS'
    }
  }

  async logout() {
    localStorage.removeItem('user')
  }

  async register(data) {
    return httpService.apiRequest('post', 'user/register', data)
  }

  async getAll() {
    return httpService.apiRequest('get', 'user/all')
  }

  async get(id) {
    return httpService.apiRequest('get', `user/${id}`)
  }

  async create(data) {
    return httpService.apiRequest('post', 'user/create', data)
  }

  async update(id, data) {
    return httpService.apiRequest('post', `user/${id}`, data)
  }

  async delete(id) {
    return httpService.apiRequest('delete', `user/${id}`)
  }
}

export default new UserService()
