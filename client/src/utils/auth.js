// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// creates a new class to instantiate for a user
class AuthService {
  // gets user data
  getProfile() {
    return decode(this.getToken());
  }

  // checks if user logged in and token section
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving token here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}
//export
export default new AuthService();
