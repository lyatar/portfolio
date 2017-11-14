var text_data = [];

// Compare array for matching positive words
function checkPositive(arr) {
    text_data.length = 0;
    var positiveCount = 0;
    var posList = [];

    arr.forEach(function(element) {
        // if(element.toString().toLowerCase() == 'b'pos_words){
        if(pos_words.indexOf(element.toLowerCase()) > -1){
            console.log("Found " + element);
            positiveCount++;
            posList.push(" " + element + " "); //jankily adding spaces

        } else {
            console.log(typeof element);
        }
    });

    $(function() {
     $( ".outputElement" ).text(posList + " " + positiveCount);
         text_data.push(positiveCount);
         console.log(text_data);
    });


}

// Compare array for matching negative words
function checkNegative(arr) {
    var negativeCount = 0;
    var negList = [];

    arr.forEach(function(element) {
        // if(element.toString().toLowerCase() == 'b'pos_words){
        if(neg_words.indexOf(element.toLowerCase()) > -1){
            console.log("Found " + element);
            negativeCount++;
            negList.push(" " + element + " "); //jankily adding spaces

        } else {
            console.log(typeof element);
        }
    });

    $(function() {
     $( ".outputElement2" ).text(negList + " " + negativeCount);
     text_data.push(negativeCount);
     console.log("neg" + negativeCount);
     runD3();
    });
}
