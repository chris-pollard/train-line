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
    var stationsChange = document.querySelector('.stations-change');
    var stationsAfter = document.querySelector('.stations-after-change')
    stationsOutput.textContent = '';
    stationsChange.textContent = '';
    stationsAfter.textContent = '';
    
    

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

        if (journeyOne.length - 1 === 1) {
            stopsOutput.textContent = `There is ${journeyOne.length - 1} stop`;
        } else {
            stopsOutput.textContent = `There are ${journeyOne.length - 1} stops`;
        }
        
        var stationsText = ``;
        var stationOne = `${journeyOne[0]} `
        var stationLast = ` ----> ${journeyOne[journeyOne.length - 1]}`
        if (journeyOne.length > 2) {
            for ( var i = 1; i < journeyOne.length - 1; i++) {
            
                stationsText = stationsText + ` ----> ${journeyOne[i]}`;
            }
        }
        
        stationsOutput.textContent = stationOne + stationsText + stationLast;

    } else {
        var journeyOne = lineJourney(origin,"Richmond",originLine);
        var journeyTwo = lineJourney("Richmond",destination,destinationLine);
        var stationsAfterText = ``;
        originOutput.textContent = `Origin: ${origin}`;
        destinationOutput.textContent = `Destination: ${destination}`;
        stopsOutput.textContent = `There are ${journeyOne.length + journeyTwo.length - 2} stops`;
        
        
        var stationsText = ``;
        var stationOne = `${journeyOne[0]} `
        var stationLast = ` ----> ${journeyOne[journeyOne.length - 1]}`
        if (journeyOne.length > 2) {
            for ( var i = 1; i < journeyOne.length - 1; i++) {
            
                stationsText = stationsText + ` ----> ${journeyOne[i]}`;
            }
        }
        
        stationsOutput.textContent = stationOne + stationsText + stationLast;
        stationsChange.textContent = '-- change --';  
        
        var stationsAfterText = ``;
        var stationChange = `${journeyTwo[0]} `
        var stationChangeLast = ` ----> ${journeyTwo[journeyTwo.length - 1]}`
        if (journeyTwo.length > 2) {
            for ( var i = 1; i < journeyTwo.length - 1; i++) {
            
                stationsAfterText = stationsAfterText + ` ----> ${journeyTwo[i]}`;
            }
        }

        
        stationsAfter.textContent = stationChange + stationsAfterText + stationChangeLast;
        
        


    }

}

journeyBtn.addEventListener('click',planTrip)









