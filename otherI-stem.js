document.addEventListener('DOMContentLoaded', function () {
    const resultDiv = document.getElementById('resultOtherVerbs');

    window.conjugateAndDisplay = function () {
        const baseVerb = document.getElementById('baseVerbOtherVerbs').value;
        const selectedTense = document.getElementById('tenseOtherVerbs').value;
        const conjugatedVerb = conjugateVerb(baseVerb, selectedTense);
        displayResult(conjugatedVerb);
    };

  function conjugateActivePastParticiple(verb) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const diphthongs = ['ae', 'ai', 'oe', 'œ', 'ui', 'au', 'eu'];
    const singleConsonants = ['b', 'd', 'f', 'g', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'z', 'θ', 'ð']; // Includes 'th' (θ), 'dh' (ð), 'ch' (x) as single consonants
    const vowelCount = verb.split('').filter(char => vowels.includes(char)).length;

    // Special exception for the verb "iav"
    if (verb === 'iav') {
        return 'ióviel';
    }

    // Helper function to check if the last vowel is followed by a single consonant
    function isLastVowelFollowedBySingleConsonant(verb) {
        for (let i = verb.length - 2; i >= 0; i--) {  // Start from the end of the string
            if (vowels.includes(verb[i])) {
                const nextChars = verb.slice(i + 1, i + 3);
                if (singleConsonants.some(consonant => nextChars.startsWith(consonant))) {
                    return i;
                }
            }
        }
        return -1;
    }

    const lastVowelIndex = isLastVowelFollowedBySingleConsonant(verb);

    if (diphthongs.some(diphthong => verb.includes(diphthong))) {
        return verb + 'l';
    } else if (vowelCount === 1 || lastVowelIndex !== -1) {
        // Vowel lengthening mutation for the last vowel
        let transformedVerb = verb.slice(0, lastVowelIndex) + verb[lastVowelIndex].replace(/[aeo]/, match => ({ 'a': 'ó', 'e': 'í', 'o': 'ú' }[match]))
                                          .replace(/u/, 'ú') + verb.slice(lastVowelIndex + 1);

        // Change other vowels ('a' -> 'e', 'o' -> 'e')
        transformedVerb = transformedVerb.split('').map((char, index) => {
            if (vowels.includes(char) && index !== lastVowelIndex) {
                return char.replace(/[ao]/, match => ({ 'a': 'e', 'o': 'e' }[match]));
            }
            return char;
        }).join('');

        return transformedVerb + 'iel';
    } else {
        // Apply vowel changes if no single consonant follows the last vowel
        return verb.replace(/[ao]/g, 'e').replace(/u/, 'y') + 'iel';
    }
}

    function conjugatePassiveParticipleSingular(verb) {
        const diphthongs = ['ae', 'ai', 'oe', 'œ', 'ui', 'au', 'eu'];
        const consonantChanges = {
            'b': 'mm', 'd': 'nn', 'dh': 'nn', 'f': 'mm', 'g': 'ng', 'l': 'll',
            'n': 'nn', 'r': 'rn', 'th': 'nn', 'v': 'mm', 'w': 'wn', 'ph': 'mm'
        };

        if (diphthongs.some(diphthong => verb.includes(diphthong))) {
            return verb + 'n';
        }

        let endingConsonantOrGroup = verb.match(/(ph|th|dh|ng|[bdgflnrwv])$/)[0];
        let changedEnding = consonantChanges[endingConsonantOrGroup] || endingConsonantOrGroup;
        let changedVerb = verb.slice(0, -endingConsonantOrGroup.length) + changedEnding;

        return changedVerb + 'en';
    }

    function conjugatePassiveParticiplePlural(verb) {
        const diphthongs = ['ae', 'ai', 'oe', 'œ', 'ui', 'au', 'eu'];
        const consonantChanges = {
            'b': 'mm', 'd': 'nn', 'dh': 'nn', 'f': 'mm', 'g': 'ng', 'l': 'll',
            'n': 'nn', 'r': 'rn', 'th': 'nn', 'v': 'mm', 'w': 'wn', 'ph': 'mm'
        };

        if (diphthongs.some(diphthong => verb.includes(diphthong))) {
            return verb + 'n';
        }

        let endingConsonantOrGroup = verb.match(/(ph|th|dh|ng|[bdgflnrwv])$/)[0];
        let changedEnding = consonantChanges[endingConsonantOrGroup] || endingConsonantOrGroup;
        let changedVerb = verb.slice(0, -endingConsonantOrGroup.length) + changedEnding;
        changedVerb = changedVerb.replace(/[ao]/g, 'e').replace(/u/, 'y');

        return changedVerb + 'in';
    }

    function conjugateVerb(verb, tense) {
        const diphthongs = ['ae', 'ai', 'oe', 'œ', 'ui', 'au', 'eu'];

        switch (tense) {
            case "Infinitive":
            case "Gerund":
                if (diphthongs.some(diphthong => verb.includes(diphthong))) {
                    return verb + "d";
                } else {
                    return verb + "ed";
                }
                break;
            case "Imperative":
                return verb + "o";
            case "Active Present Participle":
                return verb + "ol";
            case "Active Past Participle":
                return conjugateActivePastParticiple(verb);
            case "Passive Participle Singular":
                return conjugatePassiveParticipleSingular(verb);
            case "Passive Participle Plural":
                return conjugatePassiveParticiplePlural(verb);
            default:
                return "Invalid tense";
        }
    }

    function displayResult(result) {
        resultDiv.innerHTML = `<p>Conjugated Verb: <strong>${result}</strong></p>`;
    }
});
