function conjugateIstemPresent() {
    var verb = document.getElementById('Present').value;
    var personNumber = document.getElementById('personNumber').value;
    
     if (verb === 'gwae') {
        const gwaeConjugationMap = {
            '1st Singular': 'gwaen',
            '2nd Singular Familiar': 'gwaeg',
            '2nd Singular Formal': 'gwael',
            '3rd Singular': 'gwae',
            '1st Plural Inclusive': 'gwaeb',
            '1st Plural Exclusive': 'gwaef',
            '2nd Plural Familiar': 'gwaegir',
            '2nd Plural Formal': 'gwaedh',
            '3rd Plural': 'gwaener'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${gwaeConjugationMap[personNumber]}`;
        return;
    }

    // Special exception for the verb "gwaew"
    if (verb === 'gwaew') {
        const gwaewConjugationMap = {
            '1st Singular': 'gwaewin',
            '2nd Singular Familiar': 'gwaewig',
            '2nd Singular Formal': 'gwaewil',
            '3rd Singular': 'gwaew',
            '1st Plural Inclusive': 'gwaewib',
            '1st Plural Exclusive': 'gwaewif',
            '2nd Plural Familiar': 'gwaewigir',
            '2nd Plural Formal': 'gwaewidh',
            '3rd Plural': 'gwaewir'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${gwaewConjugationMap[personNumber]}`;
        return;
    }
    
    // Special exception for the verb "iav"
    if (verb === 'iav') {
        const gwaewConjugationMap = {
            '1st Singular': 'ievin',
            '2nd Singular Familiar': 'ievig',
            '2nd Singular Formal': 'ievil',
            '3rd Singular': 'iâv',
            '1st Plural Inclusive': 'ievib',
            '1st Plural Exclusive': 'ievif',
            '2nd Plural Familiar': 'ievir',
            '2nd Plural Formal': 'ievidh',
            '3rd Plural': 'ievir'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${gwaewConjugationMap[personNumber]}`;
        return;
    }


// Vowel changes for verbs with one vowel
    const vowelChangesOneVowel = {
        '3rd Singular': { a: 'â', e: 'ê', i: 'î', o: 'ô', u: 'û' },
        'All Others': { a: 'e', e: 'e', i: 'i', o: 'e', u: 'y' }
    };

    // Vowel changes for verbs with two vowels, except in the 3rd person singular
    const vowelChangesTwoVowels = { a: 'e', o: 'e', u: 'y' };
    
    // Vowel changes for verbs with three vowels
    const vowelChangesThreeVowels = { a: 'e', e: 'e', i: 'i', o: 'e', u: 'y' };

    // Suffixes for each person and number
    var suffixes = {
        '1st Singular': 'in',
        '2nd Singular Familiar': 'ig',
        '2nd Singular Formal': 'il',
        '3rd Singular': '',
        '1st Plural Inclusive': 'ib',
        '1st Plural Exclusive': 'if',
        '2nd Plural Familiar': 'igir',
        '2nd Plural Formal': 'idh',
        '3rd Plural': 'ir'
    };

    // Check the number of vowels in the verb
    const vowelCount = verb.match(/[aeiou]/g)?.length;

    if (vowelCount === 1) {
        // Apply the appropriate vowel change
        let vowelChange = personNumber === '3rd Singular' ? vowelChangesOneVowel['3rd Singular'] : vowelChangesOneVowel['All Others'];
        for (const [vowel, replacement] of Object.entries(vowelChange)) {
            verb = verb.replace(new RegExp(vowel), replacement);
        }
        // Add the corresponding suffix
        verb += suffixes[personNumber];
    } else if (vowelCount === 2) {
        // Apply the vowel changes for verbs with two vowels, except in the 3rd person singular
        if (personNumber !== '3rd Singular') {
            for (const [vowel, replacement] of Object.entries(vowelChangesTwoVowels)) {
                verb = verb.replace(new RegExp(vowel, 'g'), replacement);
            }
        }
        // Add the corresponding suffix
        verb += suffixes[personNumber];
    } else if (vowelCount === 3) {
        // Apply the vowel changes for verbs with three vowels, except in the 3rd person singular
        if (personNumber !== '3rd Singular') {
            for (const [vowel, replacement] of Object.entries(vowelChangesThreeVowels)) {
                verb = verb.replace(new RegExp(vowel, 'g'), replacement);
            }
        }
        // Add the corresponding suffix
        verb += suffixes[personNumber];
    }

    // Special handling for verbs ending in "v" in the 3rd person singular
    if (verb.endsWith('v') && personNumber === '3rd Singular') {
        verb = verb.slice(0, -1) + 'f'; // Replace the final "v" with "f"
    }

    // Display the conjugated verb
    document.getElementById('resultPresent').innerHTML = `Conjugated verb: <strong>${verb}</strong>`;
}