// Rutas para hacer requests
// No necesita estar loggeado → no auth
const LOGIN = 'http://api.meetinguvg.me/free/login';
const SIGNUP = 'http://api.meetinguvg.me/free/signup';
const SEARCH_CAREER = 'http://api.meetinguvg.me/free/carrera';
const SEARCH_HOBBY = 'http://api.meetinguvg.me/free/hobby';
const SEARCH_COURSE = 'http://api.meetinguvg.me/free/curso';

// Necesita estar loggeado
const AUTH = 'http://api.meetinguvg.me/auth/ping';
const ASSIGN_SECTION = 'http://api.meetinguvg.me/auth/seccion';
const ASSIGN_HOBBY = 'http://api.meetinguvg.me/auth/hobby';

const PASSWORD_RESET = 'http://api.meetinguvg.me/request/passwordReset'
const ACCEPT_PASSWORD_RESET = 'http://api.meetinguvg.me/request/acceptPasswordRese'

module.exports = {LOGIN, SIGNUP, SEARCH_CAREER, SEARCH_COURSE, SEARCH_HOBBY, AUTH, ASSIGN_SECTION, ASSIGN_HOBBY,
PASSWORD_RESET, ACCEPT_PASSWORD_RESET}
