function checkVowel() {
    const vowels = 'aeiouAEIOU';
    let char = document.getElementById('letter').value;

    if (vowels.includes(char)) {
        document.getElementById('result').innerHTML = `'${char}' is a vowel.`;
        document.getElementById('result').style.color = 'green';
    } 
    else if (char.match(/[a-zA-Z]/)) {
        document.getElementById('result').innerHTML = `'${char}' is a consonant!`;
        document.getElementById('result').style.color = 'blue';
    }
    else {
        document.getElementById('result').innerHTML = 'Please enter a valid letter.';
        document.getElementById('result').style.color = 'red';
    }
}