function conjugateAndDisplayPastI() {
    // Get the verb and person/number selection from the form
    var baseVerb = document.getElementById("PastI").value;
    var personNumber = document.getElementById("personNumberPastI").value;
    
    // Define the pronominal suffixes for the Past Tense
    var suffixes = {
        '1st Singular': 'ssen',
        '1st Plural Exclusive': 'ssef',
        '1st Plural Inclusive': 'sseb',
        '2nd Singular Formal': 'ssol',
        '2nd Plural Formal': 'ssodh',
        '2nd Singular Familiar': 'ssog',
        '2nd Plural Familiar': 'ssogir',
        '3rd Singular': 's(t)',
        '3rd Plural': 'sser'
    };

    // Retrieve the suffix based on the person and number
    var suffix = suffixes[personNumber] || '';
    
    // Construct the final conjugated verb
    var conjugatedVerb = baseVerb + suffix;
    
    // Display the conjugated verb
    document.getElementById('resultPastI').innerHTML = `Conjugated verb: <strong>${conjugatedVerb}</strong>`;
}
