function conjugateIstemPast(verb, personNumber) {
    // Define patterns for vowels
    const longVowels = /[íéáóýú]/;
    const shortVowels = /[iyeaou]/;
    const diphthongs = /(?:ae|ai|ei|oe|ui|au|eu)/;

    // Define single consonants and special consonant groups
    const specialConsonantGroups = {
        'th': 'θ',
        'dh': 'ð',
        'ch': 'x',
        'ph': 'ɸ',
    };

    // Define vowel changes
    const vowelChangeMap = {
        'i': { '3rd Singular': 'i', 'other': 'í' },
        'e': { '3rd Singular': 'i', 'other': 'í' },
        'o': { '3rd Singular': 'u', 'other': 'ú' },
        'u': { '3rd Singular': 'u', 'other': 'ú' },
        'a': { '3rd Singular': 'o', 'other': 'ó' },
        'y': { '3rd Singular': 'y', 'other': 'ú' }
    };

    // Define special cases for vowels following "g"
    const specialGVowelMap = {
        'i': { '3rd Singular': 'i', 'other': 'í' },
        'e': { '3rd Singular': 'e', 'other': 'í' },
        'o': { '3rd Singular': 'o', 'other': 'ú' },
        'u': { '3rd Singular': 'u', 'other': 'ú' },
        'a': { '3rd Singular': 'au', 'other': 'ó' },
    };

    // Define pronominal suffixes
    const pronominalSuffixes = {
        '1st Singular': 'en',
        '2nd Singular Familiar': 'eg',
        '2nd Singular Formal': 'el',
        '3rd Singular': '', // No suffix
        '1st Plural Inclusive': 'eb',
        '1st Plural Exclusive': 'ef',
        '2nd Plural Familiar': 'egir',
        '2nd Plural Formal': 'edh',
        '3rd Plural': 'er'
    };

    // Define soft mutations
    const mutations = {
        'p': 'b',
        't': 'd',
        'c': 'g',
        'b': 'v',
        'd': 'dh',
        'g': '', // Note: This removes the 'g' entirely
        'mb': 'mm',
        'nd': 'nn',
        'ng': 'ng', // Note: This mutation doesn't change 'ng'
        'ñg': 'ñg', // Note: This mutation doesn't change 'ñg'
        'm': 'v',
        'th': 'th', // Note: This mutation doesn't change 'th'
        'h': 'ch',
        's': 'h',
        'rh': 'thr',
        'lh': 'thl',
        'hw': 'chw',
        'gw': 'w',
        'gl': 'l',
        'gr': 'r', // Note: This mutation doesn't change 'r'
        'br': 'vr',
        'dr': 'dhr',
        'bl': 'vl'
    };

    // Initialize the conjugated verb
    let conjugatedVerb = verb;
    
    // Special exception for the verb "sedh"
    if (verb === 'sedh') {
        const nidhConjugationMap = {
            '1st Singular': 'eidhen',
            '2nd Singular Familiar': 'eidheg',
            '2nd Singular Formal': 'eidhel',
            '3rd Singular': 'aidh',
            '1st Plural Inclusive': 'eidheb',
            '1st Plural Exclusive': 'eidhef',
            '2nd Plural Familiar': 'eidhegir',
            '2nd Plural Formal': 'eidhedh',
            '3rd Plural': 'eidher'
        };
        return nidhConjugationMap[personNumber];
    }

    // Special exception for the verb "sav"
    if (verb === 'sav') {
        const savConjugationMap = {
            '1st Singular': 'óven',
            '2nd Singular Familiar': 'óveg',
            '2nd Singular Formal': 'óvel',
            '3rd Singular': 'aw',
            '1st Plural Inclusive': 'óveb',
            '1st Plural Exclusive': 'óvef',
            '2nd Plural Familiar': 'óvegir',
            '2nd Plural Formal': 'óvedh',
            '3rd Plural': 'óver'
        };
        return savConjugationMap[personNumber];
    }

    // Special exception for the verb "nidh"
    if (verb === 'nið') {
        const nidhConjugationMap = {
            '1st Singular': 'enidhen',
            '2nd Singular Familiar': 'enidheg',
            '2nd Singular Formal': 'enidhel',
            '3rd Singular': 'enidh',
            '1st Plural Inclusive': 'enidheb',
            '1st Plural Exclusive': 'enidhef',
            '2nd Plural Familiar': 'enidhegir',
            '2nd Plural Formal': 'enidhedh',
            '3rd Plural': 'enidher'
        };
        return nidhConjugationMap[personNumber];
    }
    
    

    // Special exception for the verb "run"
    if (verb === 'run') {
        const runConjugationMap = {
            '1st Singular': 'orúnen',
            '2nd Singular Familiar': 'orúneg',
            '2nd Singular Formal': 'orúnel',
            '3rd Singular': 'orun',
            '1st Plural Inclusive': 'orúneb',
            '1st Plural Exclusive': 'orúnef',
            '2nd Plural Familiar': 'orúnegir',
            '2nd Plural Formal': 'orúnedh',
            '3rd Plural': 'orúner'
        };
        return runConjugationMap[personNumber];
    }

    // Special exception for the verb "caw"
    if (verb === 'caw') {
        const cawConjugationMap = {
            '1st Singular': 'agówen',
            '2nd Singular Familiar': 'agóweg',
            '2nd Singular Formal': 'agówel',
            '3rd Singular': 'agaw',
            '1st Plural Inclusive': 'agóweb',
            '1st Plural Exclusive': 'agówef',
            '2nd Plural Familiar': 'agówegir',
            '2nd Plural Formal': 'agówedh',
            '3rd Plural': 'agówer'
        };
        return cawConjugationMap[personNumber];
    }

    // Special exception for the verb "gal"
    if (verb === 'gal') {
        const galConjugationMap = {
            '1st Singular': 'ólenen',
            '2nd Singular Familiar': 'óleneg',
            '2nd Singular Formal': 'ólenel',
            '3rd Singular': 'ólen',
            '1st Plural Inclusive': 'óleneb',
            '1st Plural Exclusive': 'ólenef',
            '2nd Plural Familiar': 'ólenegir',
            '2nd Plural Formal': 'ólenedh',
            '3rd Plural': 'ólener'
        };
        return galConjugationMap[personNumber];
    }

    // Special exception for the verb "iav"
    if (verb === 'iav') {
        const iavConjugationMap = {
            '1st Singular': 'aióven',
            '2nd Singular Familiar': 'aióveg',
            '2nd Singular Formal': 'aióvel',
            '3rd Singular': 'iavof',
            '1st Plural Inclusive': 'aióveb',
            '1st Plural Exclusive': 'aióvef',
            '2nd Plural Familiar': 'aióvegir',
            '2nd Plural Formal': 'aióvedh',
            '3rd Plural': 'aióver'
        };
        return iavConjugationMap[personNumber];
    }

    // Special exception for the verb "gwae"
    if (verb === 'gwae') {
        const gwaeConjugationMap = {
            '1st Singular': 'waen',
            '2nd Singular Familiar': 'waeg',
            '2nd Singular Formal': 'wael',
            '3rd Singular': 'wae',
            '1st Plural Inclusive': 'waeb',
            '1st Plural Exclusive': 'waef',
            '2nd Plural Familiar': 'waegir',
            '2nd Plural Formal': 'waedh',
            '3rd Plural': 'waener'
        };
        return gwaeConjugationMap[personNumber];
    }

    // Special exception for the verb "gwaew"
    if (verb === 'gwaew') {
        const gwaewConjugationMap = {
            '1st Singular': 'waewen',
            '2nd Singular Familiar': 'waeweg',
            '2nd Singular Formal': 'waewel',
            '3rd Singular': 'waew',
            '1st Plural Inclusive': 'waeweb',
            '1st Plural Exclusive': 'waewef',
            '2nd Plural Familiar': 'waewegir',
            '2nd Plural Formal': 'waewedh',
            '3rd Plural': 'waewer'
        };
        return gwaewConjugationMap[personNumber];
    }

    // Special exception for the verb "raph"
    if (verb === 'raph') {
        const raphConjugationMap = {
            '1st Singular': 'aró̥en',
            '2nd Singular Familiar': 'aró̥eneg',
            '2nd Singular Formal': 'aró̥enel',
            '3rd Singular': 'aro̥',
            '1st Plural Inclusive': 'aró̥eneb',
            '1st Plural Exclusive': 'aró̥enef',
            '2nd Plural Familiar': 'aró̥enegir',
            '2nd Plural Formal': 'aró̥enedh',
            '3rd Plural': 'aró̥ener'
        };
        return raphConjugationMap[personNumber];
    }
    
    // Special exception for the verb "tiph"
    if (verb === 'tiph') {
        const raphConjugationMap = {
            '1st Singular': 'idimmen',
            '2nd Singular Familiar': 'idimmeg',
            '2nd Singular Formal': 'idimmnel',
            '3rd Singular': 'idímp',
            '1st Plural Inclusive': 'idimmeb',
            '1st Plural Exclusive': 'idimmef',
            '2nd Plural Familiar': 'idimmegir',
            '2nd Plural Formal': 'idimmedh',
            '3rd Plural': 'idimmer'
        };
        return raphConjugationMap[personNumber];
    }
    
     // Replace internal representations of special consonant groups back to their original form
    for (const [group, internal] of Object.entries(specialConsonantGroups)) {
        conjugatedVerb = conjugatedVerb.replace(new RegExp(internal, 'g'), group);
    }
 
    
  // Check if the verb has one vowel and one consonant
if (verb.length === 2 && verb.match(/[aeiouy]/)) {
    // Verbs with one vowel and one consonant (e.g., "en")
    const vowel = verb.match(/[aeiouy]/)[0];
    const newVowel = vowelChangeMap[vowel][personNumber === '3rd Singular' ? '3rd Singular' : 'other'];
    conjugatedVerb = newVowel + verb[1];
    // Apply pronominal suffixes
    if (pronominalSuffixes[personNumber]) {
        conjugatedVerb += pronominalSuffixes[personNumber];
    }
}

if (verb.match(/[aeiouy]/) && verb.length >= 3) {
    // Use a temporary placeholder for special consonant groups
    var modifiedVerb = verb.replace(/(dh|th|ph|ch)/g, "X");

    // Identify the base vowel
    const vowel = modifiedVerb.match(/[aeiouy]/)[0];
    let newVowel = vowelChangeMap[vowel][personNumber === '3rd Singular' ? '3rd Singular' : 'other'];
    let mutatedConsonant = mutations[modifiedVerb.slice(0, 2)] || mutations[modifiedVerb[0]] || modifiedVerb[0];
    let ending = modifiedVerb.slice(-1); // Default to the last letter

    // Special handling when the base vowel is "i"
    let prependVowel = vowel; // Normally, use the base vowel
    if (vowel === 'i') {
        prependVowel = 'e'; // Change prepending vowel to 'e' if the base vowel is 'i'
    }

    // Construct the conjugated verb
    conjugatedVerb = prependVowel + mutatedConsonant + newVowel + ending;

    // Check if the verb ends in 'g', 'b', 'd', or 'ph'
    if (['g', 'b', 'd', 'ph'].includes(modifiedVerb.slice(-1))) {
        const bdgEndingMap = {
            'd': { '3rd Singular': 'nt', 'other': 'nn' },
            'g': { '3rd Singular': 'nc', 'other': 'ng' },
            'b': { '3rd Singular': 'mp', 'other': 'mm' },
            'ph': { '3rd Singular': 'mp', 'other': 'mm' }
        };
        ending = bdgEndingMap[modifiedVerb.slice(-1)][personNumber === '3rd Singular' ? '3rd Singular' : 'other'];
        newVowel = vowel; // Keep the original vowel if the verb ends in these consonants
        conjugatedVerb = prependVowel + mutatedConsonant + newVowel + ending;
    }

    // Replace the temporary placeholder with the original consonant group
    conjugatedVerb = conjugatedVerb.replace(/X/g, function(match) {
        return verb.match(/(dh|th|ph|ch)/)[0];
    });

    // Apply pronominal suffixes
    if (pronominalSuffixes[personNumber]) {
        conjugatedVerb += pronominalSuffixes[personNumber];
    }
}



    // Special exception for verbs starting with "g" and having only one vowel
    if (verb.startsWith('g') && verb.length === 3 && verb.match(/[aeiouy]/)) {
        const nextVowel = verb[1];
        const mutatedVowel = specialGVowelMap[nextVowel][personNumber === '3rd Singular' ? '3rd Singular' : 'other'];
        conjugatedVerb = mutatedVowel + verb.slice(2) + pronominalSuffixes[personNumber];
    }

// Special handling for verbs ending in "v" in the 3rd person singular
    if (verb.endsWith('v') && personNumber === '3rd Singular') {
        conjugatedVerb = conjugatedVerb.slice(0, -1) + 'f'; // Replace the final "v" with "f"
    }


// Check if the verb has two vowels and ends in 'b', 'd', 'g', or 'ph'
if (verb.match(/[aeiouy]/g) && verb.match(/[aeiouy]/g).length === 2 && ['b', 'd', 'g', 'ph'].includes(verb.slice(-1))) {
    const vowels = verb.match(/[aeiouy]/g);
    const firstVowel = vowels[0];
    const secondVowel = vowels[1];
    let base = verb.slice(0, verb.lastIndexOf(vowels[1]) + 1); // Verb up to and including the second vowel

    const bdgEndingMap = {
        'd': { '3rd Singular': 'nt', 'other': 'nn' },
        'g': { '3rd Singular': 'nc', 'other': 'ng' },
        'b': { '3rd Singular': 'mp', 'other': 'mm' },
        'ph': { '3rd Singular': 'mp', 'other': 'mm' }
    };
    conjugatedVerb = base + bdgEndingMap[verb.slice(-1)][personNumber === '3rd Singular' ? '3rd Singular' : 'other'];

    // Add the suffix
    if (pronominalSuffixes[personNumber]) {
        conjugatedVerb += pronominalSuffixes[personNumber];
    }
}

// Check if the verb has two vowels and does not end in 'b', 'd', 'g', or 'ph'
if (verb.match(/[aeiouy]/g) && verb.match(/[aeiouy]/g).length === 2 && !['b', 'd', 'g', 'ph'].includes(verb.slice(-1))) {
    const vowels = verb.match(/[aeiouy]/g);
    const firstVowel = vowels[0];
    let secondVowel = vowelChangeMap[vowels[1]][personNumber === '3rd Singular' ? '3rd Singular' : 'other'];
    let indexOfSecondVowel = verb.indexOf(vowels[1], verb.indexOf(vowels[0]) + 1);
    let base = verb.slice(0, indexOfSecondVowel); // Verb up to but not including the second vowel

    conjugatedVerb = base + secondVowel + verb.slice(indexOfSecondVowel + 1); // Add the part after the second vowel
    if (pronominalSuffixes[personNumber]) {
        conjugatedVerb += pronominalSuffixes[personNumber];
    }
}

// Check if the verb has three vowels and ends in 'b', 'd', 'g', or 'ph'
if (verb.match(/[aeiouy]/g) && verb.match(/[aeiouy]/g).length === 3 && ['b', 'd', 'g', 'ph'].includes(verb.slice(-1))) {
    const bdgEndingMap = {
        'd': { '3rd Singular': 'nt', 'other': 'nn' },
        'g': { '3rd Singular': 'nc', 'other': 'ng' },
        'b': { '3rd Singular': 'mp', 'other': 'mm' },
        'ph': { '3rd Singular': 'mp', 'other': 'mm' }
    };
    conjugatedVerb = verb.slice(0, -1) + bdgEndingMap[verb.slice(-1)][personNumber === '3rd Singular' ? '3rd Singular' : 'other'];

    // Add the suffix
    if (pronominalSuffixes[personNumber]) {
        conjugatedVerb += pronominalSuffixes[personNumber];
    }
}


return conjugatedVerb;
}

function conjugateAndDisplayPast() {
    const verb = document.getElementById('Past').value.trim();
    const personNumber = document.getElementById('personNumberPast').value;
    document.getElementById('resultPast').innerHTML = `Conjugated verb: <strong>${conjugateIstemPast(verb, personNumber)}</strong>`;
}
