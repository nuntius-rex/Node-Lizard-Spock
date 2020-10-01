
$( document ).ready(function(event) {
    $('.hand_gesture').on('click',function(e){
        e.preventDefault();
        var id = $(this).attr("id");
        //console.log(this);

        $.ajax({
            type: 'POST',
            dataType:'json',
            url: '/api?gesture='+id,
            success: function (data){

                /*
                The first object is data to show the gameplay of the hand.
                The second object is to update the statistics display.
                */

                var gameResult=data[0];
                var gameStats=data[1];
                //console.log(gameStats);

                //Populate the user panels with the correct gestures
                $("#p1Panel").html(`<i class='${gameResult.p1GestureFA}' aria-hidden='true'></i><br>${gameResult.p1Gesture}`);
                $("#p2Panel").html(`<i class='${gameResult.p2GestureFA}' aria-hidden='true'></i><br>${gameResult.p2Gesture}`);

                //Write the events of the battle
                $("#battlePanel").html(
                    ` ${gameResult.winnerGesture} ${gameResult.action} ${gameResult.loserGesture}
                     <h2 class="outcome">${gameResult.outcomeText}! </h2>`
                );


                //HTML format the User stats:
                var statHTML=`
                <strong>User Stats:</strong><br>
                Wins: ${gameStats.win}<br>
                Losses: ${gameStats.lose}<br>
                Draws: ${gameStats.draw}<br>
                <br><strong>User Gestures:</strong><br>
                `;

                //HTML format the User gestures history
                var ugest = gameStats.user_gestures;
                for(i=0;i<ugest.length;i++){
                    statHTML+=ugest[i].gesture_count+" "+ugest[i].gesture+"<br>";
                }

                //HTML format the Computer gesture history:
                statHTML+="<br><strong>Computer Gestures:</strong><br>";
                var cgest = gameStats.computer_gestures;
                for(i=0;i<cgest.length;i++){
                    statHTML+=cgest[i].gesture_count+" "+cgest[i].gesture+"<br>";
                }

                //Write all the stats to the stats container
                $("#stats").html(statHTML);


            }

        });



    });
});
