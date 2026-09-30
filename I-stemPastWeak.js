function conjugateIstemPastWeak(verb, personNumber) {
    // Step 1: Check if the verb is an I-stem with two vowels
// Convert to lowercase to ensure consistent processing
    verb = verb.toLowerCase();

 // Step 2: Change the final consonant based on person and number
const finalConsonant = verb.slice(-1);
const isThirdSingular = personNumber === '3rd Singular';
const isSingular = personNumber.includes('Singular');
const isPlural = personNumber.includes('Plural');

const finalConsonantChanges = {
    'b': isThirdSingular ? 'mp' : 'mm',
    'd': isThirdSingular ? 'nt' : 'nn',
    'dh': isThirdSingular ? 'nt' : 'nn',
    'g': isThirdSingular ? 'nc' : 'ng',
    'l': 'll', // L remains LL in all tenses
    'm': isThirdSingular ? 'mp' : 'mm',
    'p': isThirdSingular ? 'mp' : 'mm',
    'ph': isThirdSingular ? 'mp' : 'mm',
    'r': 'rn', // R remains RN in all tenses
    'v': isThirdSingular ? 'mp' : 'mm',
    'f': isThirdSingular ? 'mp' : 'mm',
    'w': isThirdSingular ? 'wn' : 'wm',
};

// Apply the final consonant changes
if (finalConsonantChanges[finalConsonant] !== undefined) {
    // If it's not 3rd person singular but it's either singular or plural (which includes 1st and 2nd person sg/pl and 3rd person pl), then use the regular plural changes.
    if (!isThirdSingular && (isSingular || isPlural)) {
        verb = verb.slice(0, -1) + finalConsonantChanges[finalConsonant];
    } else if (isThirdSingular) {
        // If it's 3rd person singular, use the specific 3rd person singular changes.
        verb = verb.slice(0, -1) + finalConsonantChanges[finalConsonant];
    }
}

    // Step 3: Apply i-affection if applicable
    // Implement i-affection based on your language's grammatical rules.

    // Apply vowel changes for specific persons
    if (!personNumber.includes('3rd Singular')) {
        // Apply changes
        verb = verb.replace(/a/g, 'e').replace(/o/g, 'e');
        // For 'e' and 'i', no change needed as per your rule "Vowel changes e → e" and "Vowel changes i → i"
    }

    // Step 4: Append pronominal suffixes based on person and number
    const pronominalSuffixes = {
        '1st Singular': 'in',
        '1st Plural Exclusive': 'if',
        '1st Plural Inclusive': 'ib',
        '2nd Singular Formal': 'il',
        '2nd Plural Formal': 'idh',
        '2nd Singular Familiar': 'ig',
        '2nd Plural Familiar': 'igir',
        '3rd Singular': '', // No vowel change indicates no suffix for 3rd person singular
        '3rd Plural': 'ir',
    };

    // Construct the final conjugated verb
    return verb + (pronominalSuffixes[personNumber] || '');
}

// In I-stemPastWeak.js
function conjugateAndDisplayPastWeak() {
    const verb = document.getElementById('baseVerbPastWeak').value.trim();
    const personNumber = document.getElementById('personNumberPast').value; // Make sure this ID is unique if needed
    const conjugatedVerb = conjugateIstemPastWeak(verb, personNumber); // Ensure this function is implemented
    document.getElementById('resultPastWeak').innerText = `Conjugated verb: ${conjugatedVerb}`;
}
// Be sure to bind conjugateAndDisplayPastWeak function to the correct button in your HTML.
