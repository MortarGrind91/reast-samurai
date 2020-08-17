import * as axios from "axios";

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  // withCredentials: true,
  // headers: {
  //   'API-KEY': process.env.REACT_APP_API_KEY
  // }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 6) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  follow(userId) {
    return instanse.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instanse.delete(`follow/${userId}`);
  }

}

export const profileAPI = {
  getProfile(userId = 8654) {
    return instanse.get(`profile/${userId}`)
      .then(response => {
        return response.data;
      });
  },

  getStatus(userId = 8654) {
    return instanse.get(`profile/status/${userId}`).then(r => {
      return r.data;
    });
  },

  updateStatus(status) {
    return instanse.put('profile/status/', { status });
  }

}

export const authAPI = {
  getMyData() {
    return instanse.get(`/auth/me`).then(response => {
      return response.data;
    });
  }
}