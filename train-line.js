trainLines = {
    
    glenwav : ["Flagstaff","Melbourne Central","Parliament","Richmond","Kooyong","Tooronga"],

    alamein : ["Flinders Street","Richmond","East Richmond","Burnley","Hawthorn","Glenferrie"],

    sandringham: ["Southern Cross","Richmond","South Yarra","Prahran","Windsor"]
}

// origin = "Flagstaff";
// destination = "Flinders Street";

// origin is on line A
// destination is on line B
// Richmond station is the connector (always)
// so if origin and destination are on different lines then 
// start with origin. run mapJourney(origin, "richmond")
//then with destination run mapJourney("richmond",destination)
//concat both arrays

// if richmond is the origin or the destination or if the origin and destination are on the same line, then run the lineJourney function
// if

// var origin = "Southern Cross";
// var destination = "Windsor";

var journeyBtn = document.querySelector('.journey-btn');

function planTrip() {
    var originInput = document.querySelector('.origin-input');
    var destinationInput = document.querySelector('.destination-input');
    var origin = originInput.value;
    var destination = destinationInput.value;
    var originOutput = document.querySelector('.origin-output');
    var destinationOutput = document.querySelector('.destination-output');
    var stopsOutput = document.querySelector('.stops-output');
    var stationsOutput = document.querySelector('.stations-output');
    
    

    function getLine (station) {

        if (trainLines.glenwav.indexOf(station) > -1) {
            return trainLines.glenwav;
        
        } else if (trainLines.alamein.indexOf(station) > -1) {
            return trainLines.alamein;
        
        } else if (trainLines.sandringham.indexOf(station) > -1) {
            return trainLines.sandringham;
        
        }
    
    }

    var originLine = getLine(origin);
    var destinationLine = getLine(destination);
    
    
    function lineJourney(origin, destination, line) {
        originIndex = line.indexOf(origin);
    
        destinationIndex = line.indexOf(destination);
    
        userJourney = [];
    
        if (originIndex > destinationIndex) {
        stops = originIndex - destinationIndex;
        
            for (i = originIndex; i >= destinationIndex; i--) {
                userJourney.push(line[i])
            }
    
        } else {
            stops = destinationIndex - originIndex;
            
            for (i = originIndex; i <= destinationIndex; i++) {
                userJourney.push(line[i])
            }
        }
    
        return userJourney
    }
    

    if (destinationLine === originLine) {
        var journeyOne = lineJourney(origin, destination, originLine);
        originOutput.textContent = `Origin: ${origin}`;
        destinationOutput.textContent = `Destination: ${destination}`;
        stopsOutput.textContent = `There are ${journeyOne.length - 1} stops`;
        var stationsText = ``;
        for ( var i = 0; i < journeyOne.length; i++) {
            
            stationsText = stationsText + `----${journeyOne[i]}----`;
        }
        stationsOutput.textContent = stationsText;
    } else {
        var journeyOne = lineJourney(origin,"Richmond",originLine);
        var journeyTwo = lineJourney("Richmond",destination,destinationLine);
        originOutput.textContent = `Origin: ${origin}`;
        destinationOutput.textContent = `Destination: ${destination}`;
        stopsOutput.textContent = `There are ${journeyOne.length + journeyTwo.length - 2} stops`;
        var stationsText = ``;
        for ( var i = 0; i < journeyOne.length; i++) {
            
            stationsText = stationsText + `----${journeyOne[i]}----`;
        }
        
        for ( var i = 0; i < journeyTwo.length; i++) {
            
            stationsText = stationsText + `----${journeyTwo[i]}----`;
        }
        stationsOutput.textContent = stationsText;   
    }

}

journeyBtn.addEventListener('click',planTrip)









