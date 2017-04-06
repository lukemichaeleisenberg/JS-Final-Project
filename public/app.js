// Initialize Firebase
var config = {
  apiKey: "AIzaSyBTJz3HSNdSPsX3GnxyGgbAuFwzCnho31o",
  authDomain: "jsd-final-project.firebaseapp.com",
  databaseURL: "https://jsd-final-project.firebaseio.com",
  projectId: "jsd-final-project",
  storageBucket: "jsd-final-project.appspot.com",
  messagingSenderId: "622753755987"
};
firebase.initializeApp(config);

// https://firebase.google.com/docs/reference/js/firebase.database
var messageAppReference = firebase.database();


$(document).ready(function() {
  /*
  $.ajax({
    url: '/getApiData',
    method: "GET",
    success: function(response) {
      console.log(response);
      return response;
    },
    error: function (obj, string, error) {
      console.log(obj);
      console.log(string);
      console.log(error);
    }
  });*/

});
