// ===============================
// nouns.js (PASSIVE: fills #singular and #plural only)
// ===============================

const nounDictionary = {
  "ablad": { singular: "prohibition, refusal", plural: "prohibitions, refusals" },
  "ach":   { singular: "neck, (upper) spine",  plural: "necks, (upper) spines" },
  "achared": { singular: "vengeance",          plural: "vengeances" },
  "acharn": { singular: "vengeance, (an act of) revenge", plural: "vengeances, acts of revenge" },
  "adan": { singular: "Man (as a species)", plural: "Men (as a species)" },
  "adaneth": { singular: "(mortal) woman", plural: "(mortal) women" },
  "adar": { singular: "father", plural: "fathers" },
  "aderthad": { singular: "reuniting", plural: "reunitings" },
  "aduial": { singular: "(evening) twilight, evening", plural: "(evening) twilights, evenings" },
  "advir": { singular: "heirloom", plural: "heirlooms" },
  "aeg": { singular: "sharp", plural: "sharp" },
  "aeglir": { singular: "line of peaks", plural: "lines of peaks" },
  "aeglos": { singular: "icicle, (lit.) snow-point; snowthorn (a plant)", plural: "icicles, (lit.) snow-points; snowthorns" },
  "ael": { singular: "lake, pool", plural: "lakes, pools" },
  "aerlinn": { singular: "hymn, (lit.) holy song", plural: "hymns, (lit.) holy songs" },
  "taur": { singular: "forest, wood", plural: "forests, woods" }
};

function normalizeKey(value) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/-+$/, "");
}

function updateNouns(nounValue) {
  const noun = normalizeKey(nounValue);
  const entry = nounDictionary[noun];

  const singularTargets = document.querySelectorAll(".noun-singular");
  const pluralTargets   = document.querySelectorAll(".noun-plural");

  if (!noun || !entry) {
    singularTargets.forEach(el => (el.textContent = ""));
    pluralTargets.forEach(el => (el.textContent = ""));
    return;
  }

  singularTargets.forEach(el => (el.textContent = entry.singular || ""));
  pluralTargets.forEach(el => (el.textContent = entry.plural || ""));
}
