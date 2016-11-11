// when users mouse-over a vowelbox, highlight the background and show the 
// details of the vowel in the large box 
function showVowel(vowel){
	var v = vowel.children; 
	document.getElementById('vowel-photo-large').style.backgroundImage = "url(' "+v[0].src+" ')";
	document.getElementById('vowel-photo-profile-large').style.backgroundImage = "url(' "+v[1].src+" ')";
	document.getElementById('vowel-feature').innerHTML = v[0].alt;
	// document.getElementById('vowel-feature').innerHTML = v[6].innerHTML;
	document.getElementById('vowel-orth-large').innerHTML = v[2].innerHTML;
	document.getElementById('vowel-ipa-large').innerHTML = v[3].innerHTML;
	document.getElementById('vowel-wave-large').style.backgroundImage = "url(' "+v[4].src+" ')";
	vowel.style.backgroundColor = "rgba(255,153,227,0.4)"
}

// when users click a vowel box, play the vowel sound
function playVowel(vowel){
	var v = vowel.children; 
	v[5].play();
}

// when users mouse-out from the vowel box, chang ethe background color back to the original 
function fadeColor(vowel){
	vowel.style.backgroundColor = "rgba(255,153,227,0.2)"
}

// -- For the feature selector -- // 

function highlightMatchingVowels(event){
    var height = document.getElementById('height').value; 
    var backness = document.getElementById('backness').value; 
    var roundness = document.getElementById('roundness').value; 
    
    var options= {
    	height: height,
    	backness: backness,
    	roundness: roundness
    };

    highlightVowels(options);
}

// making a model of each vowel using feature matrix 
var VOWEL_I = {
	ipa: "i",
	id: "vowel-I",
	height: "high",
	backness: "nonback",
	roundness: "nonround"
};

var VOWEL_A = {
	ipa: "a",
	id: "vowel-A",
	height: "nonhigh",
	backness: "back",
	roundness: "nonround"
};

// making a vowel inventory by putting the models of vowels into an array 
var VOWELS = [
	VOWEL_I,
	VOWEL_A
];

// var VOWELS = {
// 	VOWEL_I: VOWEL_I
// };



function highlightVowels(featureBundle){
    console.log(featureBundle);   

    // To find matching vowels, we use .map function 
    // .map function on an array lets you map input to output. You need to specify which input to map to which output. 
    // Here the input parameter is a vowel, it compares against the featureMartix and if it matches returns the vowel
    // if it doesn't match returns null 
    // mapVowelToSeeIfItMatches function accepts a vowel and compares it against the featureBundle
    // run .map over the array "VOWLES" (= containing models of vowels)
    // output is an array "matchingVowels" that contains the matching vowels and null elements
    var matchingVowels = VOWELS.map(function mapVowelToSeeIfItMatches(vowel){ 
    	// the problem of mapVowelToSeeIfItMatches is that it will return null every time user 
    	// selects "unspecified" because no vowel model has the feature unspecified. 
    	// We want to ignore "unspecified" and return vowels
    	console.log(vowel);
    	// this part is doing the intersection	
    	if (vowel.height === featureBundle.height && 
    		vowel.backness === featureBundle.backness && 
    		vowel.roundness === featureBundle.roundness){
    		return vowel;
    	} else { // if the 
    		return null;
    	}
    })

	// 
    matchingVowels = matchingVowels.reduce(function(vowel){
	    if (vowel) {
	    	return vowel;
	    } else {
	    	// removes empty/null elements from the array
	    	return false;
	    }
    });

    console.log(matchingVowels); // showing matching vowels in the console, it shouw be an array
	
// 	matchingVowels.map(function(vowel){
// 	var element = document.getElementById(vowel.id)
// })

    // if(document.getElementsByClassName('height').innerHTML == options.height){
    //   console.log(document.getElementsByClassName('height').innerHTML);
    // }
}



