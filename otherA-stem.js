function conjugateAndDisplay() {
    var baseVerb = document.getElementById("baseVerbOtherVerbs").value;
    var tense = document.getElementById("tenseOtherVerbs").value;
    var conjugatedVerb;

    switch (tense) {
        case "Infinitive":
        case "Gerund":
            conjugatedVerb = baseVerb + "d";
            break;
        case "Imperative":
            conjugatedVerb = baseVerb.slice(0, -1) + "o";
            break;
        case "Active Present Participle":
            conjugatedVerb = baseVerb.slice(0, -1) + "ol";
            break;
        case "Active Past Participle":
            if (baseVerb.match(/(ae|ai|ei|oe|œ|ui|au|eu)/)) {
                conjugatedVerb = baseVerb.slice(0, -1) + "iel";
            } else {
                var vowelChangeMap = { a: "e", o: "e", u: "y" };
                var modifiedVerb = baseVerb.replace(/(dh|th|ph|lh|rh)/g, "X");
                var firstVowelIndex = modifiedVerb.search(/[aeiou]/);
                var lastVowelIndex = modifiedVerb.slice(0, -1).lastIndexOf(baseVerb.match(/[aeiou]/g).pop());

                if (firstVowelIndex !== -1 && firstVowelIndex !== lastVowelIndex) {
                    conjugatedVerb = baseVerb.replace(/[ao]/g, function(match, offset) {
                        if (offset === lastVowelIndex) {
                            return match === "a" ? "ó" : "ú";
                        }
                        return vowelChangeMap[match];
                    }).replace(/u/g, "ú").slice(0, -1) + "iel";
                } else {
                    conjugatedVerb = baseVerb.replace(/[aou]/g, function(match) {
                        return match === "a" ? "ó" : match === "o" ? "ú" : "ú";
                    }).slice(0, -1) + "iel";
                }
            }
            break;
        case "Passive Participle Singular":
            conjugatedVerb = baseVerb + "nnen";
            break;
        case "Passive Participle Plural":
            if (baseVerb.match(/(ae|ai|ei|oe|œ|ui|au|eu)/)) {
                conjugatedVerb = baseVerb.slice(0, -1) + "e" + "nnin";
            } else {
                conjugatedVerb = baseVerb.replace(/[ao]/g, function(match) {
                    return { a: "e", o: "e" }[match];
                }).replace(/u/g, "y") + "nnin";
            }
            break;
        default:
            conjugatedVerb = "Invalid tense";
    }

    document.getElementById("resultOtherVerbs").innerHTML = `Conjugated verb: <strong>${conjugatedVerb}</strong>`;
}
