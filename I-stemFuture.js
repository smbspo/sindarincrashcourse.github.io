// Content of I-stemFuture.js
function conjugateAndDisplayFuture() {
    var baseVerb = document.getElementById('baseVerbFuture').value;
    var personNumber = document.getElementById('personNumberFuture').value;
    
    // Define the pronominal suffixes for the future tense
    var suffixes = {
        '1st Singular': 'athon',
        '1st Plural Exclusive': 'athof',
        '1st Plural Inclusive': 'athab',
        '2nd Singular Formal': 'athol',
        '2nd Plural Formal': 'athodh',
        '2nd Singular Familiar': 'athog',
        '2nd Plural Familiar': 'athogir',
        '3rd Singular': 'atha',
        '3rd Plural': 'athar'
    };

    // Retrieve the suffix based on the person and number
    var suffix = suffixes[personNumber] || '';
    
    // Construct the final conjugated verb
    var conjugatedVerb = baseVerb + suffix;
    
    // Display the conjugated verb
  // Display the conjugated verb
document.getElementById('resultPastFuture').innerHTML = `Conjugated verb: <strong>${conjugatedVerb}</strong>`;
}
