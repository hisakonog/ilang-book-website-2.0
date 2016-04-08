function showVowel(vowel){
	var v = vowel.children;
	document.getElementById('vowel-photo-large').style.backgroundImage = "url(' "+v[0].src+" ')";
	document.getElementById('vowel-photo-profile-large').style.backgroundImage = "url(' "+v[1].src+" ')";
	document.getElementById('vowel-feature').innerHTML = v[0].alt;
	document.getElementById('vowel-orth-large').innerHTML = v[2].innerHTML;
	document.getElementById('vowel-ipa-large').innerHTML = v[3].innerHTML;
	document.getElementById('vowel-wave-large').style.backgroundImage = "url(' "+v[4].src+" ')";
	vowel.style.backgroundColor = "rgba(255,153,227,0.4)"
}

function playVowel(vowel){
	var v = vowel.children; 
	v[5].play();
}

function fadeColor(vowel){
	vowel.style.backgroundColor = "rgba(255,153,227,0.2)"
}

