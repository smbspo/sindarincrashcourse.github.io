  function conjugateAndDisplayPastT() {
    // Get the verb and person/number selection from the form
    let verb = document.getElementById("Past").value;
    let personNumber = document.getElementById("personNumberPast").value;

    console.log("Verb:", verb);
    console.log("Person/Number:", personNumber);

    let conjugatedVerb;

    // Special exceptions for certain verbs
    if (verb === 'bachanna') {
        const bachannaConjugationMap = {
            '1st Singular': 'bachónen',
            '1st Plural Exclusive': 'bachónef',
            '1st Plural Inclusive': 'bachóneb',
            '2nd Singular Formal': 'bachónel',
            '2nd Plural Formal': 'bachónedh',
            '2nd Singular Familiar': 'bachóneg',
            '3rd Singular': 'bachón',
            '3rd Plural': 'bachóner'
        };
        conjugatedVerb = bachannaConjugationMap[personNumber];
    } else if (verb === 'suilanna') {
        const suilannaConjugationMap = {
            '1st Singular': 'suilónen',
            '1st Plural Exclusive': 'suilónef',
            '1st Plural Inclusive': 'suilóneb',
            '2nd Singular Formal': 'suilónel',
            '2nd Plural Formal': 'suilónedh',
            '2nd Singular Familiar': 'suilóneg',
            '2nd Plural Familiar': 'suilónegir',
            '3rd Singular': 'suilÃ³n',
            '3rd Plural': 'suilÃ³ner'
        };
        conjugatedVerb = suilannaConjugationMap[personNumber];
    } else if (verb === 'anna') {
        const suilannaConjugationMap = {
            '1st Singular': 'ónen',
            '1st Plural Exclusive': 'ónef',
            '1st Plural Inclusive': 'óneb',
            '2nd Singular Formal': 'ónel',
            '2nd Plural Formal': 'ónedh',
            '2nd Singular Familiar': 'óneg',
            '2nd Plural Familiar': 'ónegir',
            '3rd Singular': 'ón',
            '3rd Plural': 'óner'
        };
        conjugatedVerb = suilannaConjugationMap[personNumber];
    } else {
        // Define the suffixes for different persons/numbers
        const suffixes = {
            '1st Singular': 'nnen',
            '1st Plural Exclusive': 'nnef',
            '1st Plural Inclusive': 'nneb',
            '2nd Singular Formal': 'nnel',
            '2nd Plural Formal': 'nnedh',
            '2nd Singular Familiar': 'nneg',
            '2nd Plural Familiar': 'nnegir',
            '3rd Singular': 'nt',
            '3rd Plural': 'nner'
        };

        // Define special endings and their lengths
        const specialEndings = ["na", "nna", "ada"];
        const endingLengths = {
            'na': 2,
            'nna': 3,
            'ada': 2  // Changed from 3 to 2 to only remove "da"
        };

        // Find the longest matching special ending
        let longestEnding = "";
        for (let ending of specialEndings) {
            if (verb.endsWith(ending) && ending.length > longestEnding.length) {
                longestEnding = ending;
            }
        }

        console.log("Longest Ending:", longestEnding);

        // Remove the longest special ending if present
        if (longestEnding) {
            verb = verb.slice(0, -endingLengths[longestEnding]);
        }

        console.log("Verb after removing ending:", verb);

        // Get the suffix for the selected person/number
        const suffix = suffixes[personNumber] || '';

        console.log("Suffix:", suffix);

        // Construct the conjugated verb
        conjugatedVerb = verb + suffix;
    }

    console.log("Conjugated Verb:", conjugatedVerb);

    // Display the conjugated verb
    document.getElementById('resultPastT').innerHTML = `Conjugated verb: <strong>${conjugatedVerb}</strong>`;
}