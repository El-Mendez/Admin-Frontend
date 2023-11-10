// Rutas para hacer requests
// No necesita estar loggeado → no auth
const server = process.env.BACKEND_URL || 'api.meetinguvg.me';

const LOGIN = `http://${server}/free/login`;
const SIGNUP = `http://${server}/free/signup`;
const SEARCH_CAREER = `http://${server}/free/carrera`;
const SEARCH_HOBBY = `http://${server}/free/hobby`;
const SEARCH_COURSE = `http://${server}/free/curso`;
const USER_INFO = `http://${server}/free/profile/`;
const SEARCH_USERH = `http://${server}/free/profile/hobbies`;
const SEARCH_USERS = `http://${server}/free/profile/secciones`;

// Necesita estar loggeado
const AUTH = `http://${server}/auth/ping`;
const ASSIGN_SECTION = `http://${server}/auth/seccion`;
const ASSIGN_HOBBY = `http://${server}/auth/hobby`;
const SUGGESTIONS_COURSES = `http://${server}/auth/suggestions/courses`;
const SUGGESTIONS_HOBBIES = `http://${server}/auth/suggestions/hobbies`;
const SUGGESTIONS_FRIENDS = `http://${server}/auth/suggestions/friends`;
const USER_INFO_AUT = `http://${server}/auth/profile`;
const UPLOAD_IMG = `http://${server}/auth/profile/image`;
const REPORT = `http://${server}/auth/report`;
const HELP = `http://${server}/auth/help`;
const SEARCH_IMG = 'http://meetinguvg.me/public/assets';

// REQUESTS
const PASSWORD_RESET = `http://${server}/request/passwordReset`;
const ACCEPT_PASSWORD_RESET = `http://${server}/request/acceptPasswordReset`;
const ACCOUNT_REQUEST = `http://${server}/request/signup`;
const ACCEPT_ACCOUNT_REQUEST = `http://${server}/request/acceptSignUp`;
// AMISTADES
const SEND_REQUEST = `http://${server}/auth/friends/sendRequest`;
const ACCEPT_REQUEST = `http://${server}/auth/friends/acceptRequest`;
const CANCEL_REQUEST = `http://${server}/auth/friends/cancelRequest`;
const GET_FRIENDS = `http://${server}/auth/friends/getFriends`;
const RECEIVED_REQUEST = `http://${server}/auth/friends/receivedRequests`;
const SENT_REQUESTS = `http://${server}/auth/friends/sentRequests`;
const DELETE_FRIEND = `http://${server}/auth/friends/deleteFriend`;

module.exports = {
  LOGIN,
  SIGNUP,
  SEARCH_CAREER,
  SEARCH_COURSE,
  SEARCH_HOBBY,
  SEARCH_USERH,
  SEARCH_USERS,
  AUTH,
  ASSIGN_SECTION,
  ASSIGN_HOBBY,
  PASSWORD_RESET,
  ACCEPT_PASSWORD_RESET,
  SUGGESTIONS_COURSES,
  SUGGESTIONS_HOBBIES,
  ACCOUNT_REQUEST,
  ACCEPT_ACCOUNT_REQUEST,
  USER_INFO,
  USER_INFO_AUT,
  SEND_REQUEST,
  ACCEPT_REQUEST,
  CANCEL_REQUEST,
  GET_FRIENDS,
  RECEIVED_REQUEST,
  SENT_REQUESTS,
  DELETE_FRIEND,
  SUGGESTIONS_FRIENDS,
  REPORT,
  UPLOAD_IMG,
  SEARCH_IMG,
  HELP,
};
