$(document).ready(function() {
    $('#action').click(function() {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        var myFavoriteThings = [];
            myFavoriteThings.push("Space");   
            myFavoriteThings.push("Modern-Art"); 
            myFavoriteThings.push("International-Travel"); 
            myFavoriteThings.push("Kevin-Bacon"); 

        //Write your decision structure between this comment...
        if(letterGrade == 'A') {
            $('#decision-holder').text('The Grade range for A: 90%-100%');
        } else if(letterGrade == 'B') { 
            $('#decision-holder').text('The Grade range for B: 80%-90%');
        } else if (letterGrade == 'C'){
            $('#decision-holder').text('The Grade range for C: 70%-80%');
        } else if (letterGrade == 'D'){
            $('#decision-holder').text('The Grade range for D: 60%-70%');
        } else if (letterGrade == 'F'){ 
            $('#decision-holder').text('The Grade range for F less than 60%');
        } else { 
            $('#decision-holder').text('Error! Invalid Value entered');
        }
        //...and this comment

        //Now, write a for, while, OR do-while loop between this comment...
            for (var i = 0; i < myFavoriteThings.length; i++) {
                $('#loop-output').append(myFavoriteThings[i] + '<br>');
        }       
        //...and this comment

        //Use the jQuery .each() method to loop through
        //the myFavoriteThings array between this comment...
                $.each(myFavoriteThings, function(i){
                $('#each-output').append(myFavoriteThings[i] +'<br>');
        }
        //...and this comment

    )});
});


