// Content of A-stemFuture.js
function conjugateAndDisplayFuture() {
    var baseVerb = document.getElementById('baseVerbFuture').value;
    var personNumber = document.getElementById('personNumberFuture').value;
    
    // Define the pronominal suffixes for the future tense
    var suffixes = {
        '1st Singular': 'thon',
        '1st Plural Exclusive': 'thof',
        '1st Plural Inclusive': 'thab',
        '2nd Singular Formal': 'thol',
        '2nd Plural Formal': 'thodh',
        '2nd Singular Familiar': 'thog',
        '2nd Plural Familiar': 'thogir',
        '3rd Singular': 'tha',
        '3rd Plural': 'thar'
    };

    // Retrieve the suffix based on the person and number
    var suffix = suffixes[personNumber] || '';
    
    // Construct the final conjugated verb
    var conjugatedVerb = baseVerb + suffix;
    
    // Display the conjugated verb
  // Display the conjugated verb
document.getElementById('resultPastFuture').innerHTML = `Conjugated verb: <strong>${conjugatedVerb}</strong>`;
}