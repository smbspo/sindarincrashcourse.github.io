function conjugateIstemPresent() {
    var verb = document.getElementById('Present').value;
    var personNumber = document.getElementById('personNumber').value;
    
    // Special exception for the verb "covada"
    if (verb === 'covada') {
        const covadaConjugationMap = {
            '1st Singular': 'covadan',
            '2nd Singular Familiar': 'covadag',
            '2nd Singular Formal': 'covadal',
            '3rd Singular': 'covod',
            '1st Plural Inclusive': 'covadab',
            '1st Plural Exclusive': 'covadaf',
            '2nd Plural Familiar': 'covadagir',
            '2nd Plural Formal': 'covadadh',
            '3rd Plural': 'covadar'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${covadaConjugationMap[personNumber]}`;
        return;
    }

    // Special exception for the verb "adbannada"
    if (verb === 'adbannada') {
        const adbannadaConjugationMap = {
            '1st Singular': 'adbannadan',
            '2nd Singular Familiar': 'adbannadag',
            '2nd Singular Formal': 'adbannadal',
            '3rd Singular': 'adbannod',
            '1st Plural Inclusive': 'adbannadab',
            '1st Plural Exclusive': 'adbannadaf',
            '2nd Plural Familiar': 'adbannadar',
            '2nd Plural Formal': 'adbannadadh',
            '3rd Plural': 'adbannadar'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${adbannadaConjugationMap[personNumber]}`;
        return;
    }

    // Special exception for the verb "lathrada"
    if (verb === 'lathrada') {
        const lathradaConjugationMap = {
            '1st Singular': 'lathradan',
            '2nd Singular Familiar': 'lathradag',
            '2nd Singular Formal': 'lathradal',
            '3rd Singular': 'lathrod',
            '1st Plural Inclusive': 'lathradab',
            '1st Plural Exclusive': 'lathradaf',
            '2nd Plural Familiar': 'lathradar',
            '2nd Plural Formal': 'lathradadh',
            '3rd Plural': 'lathradar'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${lathradaConjugationMap[personNumber]}`;
        return;
    }

    // Special exception for the verb "limmida"
    if (verb === 'limmida') {
        const limmidaConjugationMap = {
            '1st Singular': 'limmidan',
            '2nd Singular Familiar': 'limmidag',
            '2nd Singular Formal': 'limmidal',
            '3rd Singular': 'limmid',
            '1st Plural Inclusive': 'limmidab',
            '1st Plural Exclusive': 'limmidaf',
            '2nd Plural Familiar': 'limmidar',
            '2nd Plural Formal': 'limmidadh',
            '3rd Plural': 'limmidar'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${limmidaConjugationMap[personNumber]}`;
        return;
    }

    // Special exception for the verb "gannada"
    if (verb === 'gannada') {
        const gannadaConjugationMap = {
            '1st Singular': 'gannadan',
            '2nd Singular Familiar': 'gannadag',
            '2nd Singular Formal': 'gannadal',
            '3rd Singular': 'gannod',
            '1st Plural Inclusive': 'gannadab',
            '1st Plural Exclusive': 'gannadaf',
            '2nd Plural Familiar': 'gannadar',
            '2nd Plural Formal': 'gannadadh',
            '3rd Plural': 'gannadar'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${gannadaConjugationMap[personNumber]}`;
        return;
    }

    // Special exception for the verb "nimmida"
    if (verb === 'nimmida') {
        const nimmidaConjugationMap = {
            '1st Singular': 'nimmidan',
            '2nd Singular Familiar': 'nimmidag',
            '2nd Singular Formal': 'nimmidal',
            '3rd Singular': 'nimmid',
            '1st Plural Inclusive': 'nimmidab',
            '1st Plural Exclusive': 'nimmidaf',
            '2nd Plural Familiar': 'nimmidar',
            '2nd Plural Formal': 'nimmidadh',
            '3rd Plural': 'nimmidar'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${nimmidaConjugationMap[personNumber]}`;
        return;
    }

    // Special exception for the verb "pannada"
    if (verb === 'pannada') {
        const pannadaConjugationMap = {
            '1st Singular': 'pannadan',
            '2nd Singular Familiar': 'pannadag',
            '2nd Singular Formal': 'pannadal',
            '3rd Singular': 'pannod',
            '1st Plural Inclusive': 'pannadab',
            '1st Plural Exclusive': 'pannadaf',
            '2nd Plural Familiar': 'pannadar',
            '2nd Plural Formal': 'pannadadh',
            '3rd Plural': 'pannadar'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${pannadaConjugationMap[personNumber]}`;
        return;
    }

    // Special exception for the verb "tangada"
    if (verb === 'tangada') {
        const tangadaConjugationMap = {
            '1st Singular': 'tangadan',
            '2nd Singular Familiar': 'tangadag',
            '2nd Singular Formal': 'tangadal',
            '3rd Singular': 'tangod',
            '1st Plural Inclusive': 'tangadab',
            '1st Plural Exclusive': 'tangadaf',
            '2nd Plural Familiar': 'tangadar',
            '2nd Plural Formal': 'tangadadh',
            '3rd Plural': 'tangadar'
        };
        document.getElementById('resultPresent').textContent = `Conjugated verb: ${tangadaConjugationMap[personNumber]}`;
        return;
    }

    // Suffixes for each person and number for regular verbs
    var suffixes = {
        '1st Singular': 'on',
        '2nd Singular Familiar': 'og',
        '2nd Singular Formal': 'ol',
        '3rd Singular': '',
        '1st Plural Inclusive': 'ab',
        '1st Plural Exclusive': 'of',
        '2nd Plural Familiar': 'ogir',
        '2nd Plural Formal': 'odh',
        '3rd Plural': 'ar'
    };

    // Remove the final 'a' from the verb, if present, except for the 3rd person singular
    if (verb.endsWith('a') && personNumber !== '3rd Singular') {
        verb = verb.slice(0, -1);
    }

    // Add the appropriate suffix based on the person and number
    var conjugatedVerb = verb + suffixes[personNumber];

    // Display the conjugated verb
    document.getElementById('resultPresent').textContent = `Conjugated verb: ${conjugatedVerb}`;
}

