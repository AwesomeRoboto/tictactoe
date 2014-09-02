var tictactoeApp = angular.module('tictactoeApp', ["firebase"]);
tictactoeApp.controller('tttController', ["$scope", "$firebase", function ($scope, $firebase) {
	//Here you are declaring the variable tictactoe and setting it 
	//equal to angular so that you can do the ng-app so that 
	//anguar can run in your webpage. 

	// this is creating new Firebase connection using the Firebase object
	var ref = new Firebase("https://tictracktoe.firebaseio.com/");
	//pass the firebase connection/object to angularfire
	var sync = $firebase(ref); //firebase binding
	var firebase = sync.$asObject();
	firebase.$bindTo($scope, 'db').then(function(){
		$scope.db = newGame;
	})

	var newGame = {
 		squares: ["","","","","","","","",""],
 		players: ["playerOne", "playerTwo"],
 		gameInProgress: "true",
	};
	//Here you are setting var new game to objects which you 
	//will use to pull form later in later code 
          

	$scope.squares = ["","","","","","","","",""];
	// declared a variable in order to switch from P1 to P2
	var playerOne = true;
	//function to identify which squares the player (1 or 2) are selected
	$scope.placeMarker = function(squaresindex) {
		if ($scope.squares[squaresindex] == "") {
			if (playerOne == true) {
				$scope.squares[squaresindex] = 1;
				winConditions();
			} else {
				$scope.squares[squaresindex] = -1;
				winConditions();
			}
		} else {
			alert("Choose another!");
		}
	}
	//This is setting the playing conditions for when the player(s)
	//are ready to play and will set up the board so that they 
	//dont occupy the same space. 
	



	function winConditions() {
		if (($scope.squares[0] == 1 && $scope.squares[1] == 1 && $scope.squares[2] == 1) || 
		($scope.squares[3] == 1 && $scope.squares[4] == 1 && $scope.squares[5] == 1) ||
		($scope.squares[6] == 1 && $scope.squares[7] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[0] == 1 && $scope.squares[3] == 1 && $scope.squares[6] == 1) ||
		($scope.squares[1] == 1 && $scope.squares[4] == 1 && $scope.squares[7] == 1) ||
		($scope.squares[2] == 1 && $scope.squares[5] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[0] == 1 && $scope.squares[4] == 1 && $scope.squares[8] == 1) ||
		($scope.squares[2] == 1 && $scope.squares[4] == 1 && $scope.squares[6] == 1)) {
			$scope.booya=true;
		} else if (
			($scope.squares[0] == -1 && $scope.squares[1] == -1 && $scope.squares[2] == -1) || 
			($scope.squares[3] == -1 && $scope.squares[4] == -1 && $scope.squares[5] == -1) ||
			($scope.squares[6] == -1 && $scope.squares[7] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[0] == -1 && $scope.squares[3] == -1 && $scope.squares[6] == -1) ||
			($scope.squares[1] == -1 && $scope.squares[4] == -1 && $scope.squares[7] == -1) ||
			($scope.squares[2] == -1 && $scope.squares[5] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[0] == -1 && $scope.squares[4] == -1 && $scope.squares[8] == -1) ||
			($scope.squares[2] == -1 && $scope.squares[4] == -1 && $scope.squares[6] == -1)) {
				$scope.iRanOutofWordsHere=true;
		// add reset game
		} else if (
			($scope.squares[0] == 1 || $scope.squares[0] == -1) && ($scope.squares[1] == 1 || $scope.squares[1] == -1) && 
		 	($scope.squares[2] == 1 || $scope.squares[2] == -1) && ($scope.squares[3] == 1 || $scope.squares[3] == -1) && 
		 	($scope.squares[4] == 1 || $scope.squares[4] == -1) && ($scope.squares[5] == 1 || $scope.squares[5] == -1) &&
		 	($scope.squares[6] == 1 || $scope.squares[6] == -1) && ($scope.squares[7] == 1 || $scope.squares[7] == -1) &&
		 	($scope.squares[8] == 1 || $scope.squares[8] == -1)) {
		 		$scope.itsatie=true;
		 }
		

			if (playerOne == true) {
				playerOne = false; 
			}
			else {
				playerOne = true;// =assigns; ==evaluates
				}
	}
}]);

//Need to figure out how to make a reset function 







//			This was another formula to win instead of using if,
//			probably way better than using if's. 

// 			for (var i = 0 ; i <= 7 ; i+=3) {  ==> rows
// 				if ($scope.board[i].p1owns==true && $scope.board[i+1].p1owns && $scope.board[i+2].p1owns) {
// 					alert("winner");
// 			 	}
// 			}
// 			for (var i = 0 ; i <= 2 ; i++) { // ==> columns
// 				if ($scope.board[i].p1owns==true && $scope.board[i+3].p1owns && $scope.board[i+6].p1owns) {
// 				alert("winner");
// 			 	}
// 			}								 // ==> diagonals
// 			if ($scope.board[0].p1owns==true && $scope.board[4].p1owns && $scope.board[8].p1owns) {
// 				alert("winner");
// 			}   
// 			if 	($scope.board[2].p1owns==true && $scope.board[4].p1owns && $scope.board[6].p1owns) {
// 				alert("winner");	
// 			}

// 		} else {
			
// 			box.active = true;
// 			box.p2owns = true;
			
// 			$scope.playCounter++;
			
			
// 			for (var i = 0 ; i <= 7 ; i+=3) {  ==> rows
// 				if ($scope.board[i].p2owns==true && $scope.board[i+1].p2owns && $scope.board[i+2].p2owns) {
// 				alert("winner");
// 			 	}
// 			}
// 			for (var i = 0 ; i <= 2 ; i++) { // ==> columns
// 				if ($scope.board[i].p2owns==true && $scope.board[i+3].p2owns && $scope.board[i+6].p2owns) {
// 				alert("winner");
// 			 	}
// 			}	
// 			if ($scope.board[0].p2owns==true && $scope.board[4].p2owns && $scope.board[8].p2owns) {
// 				alert("winner");
// 			} 
// 			if 	($scope.board[2].p2owns==true && $scope.board[4].p2owns && $scope.board[6].p2owns) {
// 				alert("winner");	
// 			}		
// 		}
// 	} else {
// 		alert('taken')
// 	}
// }
// })