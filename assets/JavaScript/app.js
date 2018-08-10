 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCOr9rDu2FnkLKjd6-wJ6glHAD5zoMwH8w",
    authDomain: "train-scheduler-60f12.firebaseapp.com",
    databaseURL: "https://train-scheduler-60f12.firebaseio.com",
    projectId: "train-scheduler-60f12",
    storageBucket: "",
    messagingSenderId: "765331666323"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#addTrainButton").on("click", () => {
     // save user input data
  var gate = $("#GateNumber").val().trim();
  var destination = $("#Destination").val().trim();
  var departure = $("#Departure").val().trim();
  var arrival = $("#Arrival").val().trim();
  var trainTime = $("#TrainTime").val().trim();


    var appendedTrain = {

      gate: gate,
      destination: destination,
      departure: departure,
      arrival: arrival,
      trainTime: trainTime

    };

    database.ref().push(appendedTrain);

    $("#GateNumber").val("");
    $("#Destination").val("");
    $("#Departure").val("");
    $("#Arrival").val("");
    $("#TrainTime").val("");
  });

    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
   var gateDatabase = childSnapshot.val().gate;
   var destinationDatabase = childSnapshot.val().destination;
   var departureDatabase = childSnapshot.val().departure;
   var arrivalDatabase = childSnapshot.val().arrival;
   var trainTimeDatabse = childSnapshot.val().trainTime;

    $("#trainScheduleData").append("<tr><td>" + gateDatabase + "</td><td>" + destinationDatabase + "</td><td>" +
    departureDatabase + "</td><td>" + arrivalDatabase + "</td><td>" + trainTimeDatabse + "</td></tr>");

    
  });