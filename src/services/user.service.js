import { request } from './http.service'

class UserService {
  async login(user) {
    return request('post', 'api/auth', {
      mode: 'login',
      data: {
        user,
        socialType: 'base'
      }
    })
    // return {
    //   email: 'Jelena',
    //   token: 'to79472hsf%#&hHFFOS'
    // }
  }

  async logout() {
    localStorage.removeItem('user')
  }

  async register(user) {
    return request('post', 'user/register', user)
  }

  async getUserById(id) {
    return request('get', `user/${id}`)
  }

  async listAllCompanyUsers(companyId) {
    return request('get', `user/company/${companyId}`)
  }

  async updateUser(user) {
    return request('put', `user/${user._id}`, user)
  }
}

export default new UserService()
