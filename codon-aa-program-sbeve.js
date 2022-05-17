const sbeve = require('./sbeve.js')

var codons = require('./codon-aa-array.js')

function printCodons (aa) {
  var codons = aa[2];
  for (var index = 3; index < aa.length; index += 1) {
    codons += " " + aa[index];
  }
  print("Codons: " + codons);
}

function matchesCodons (aaInput, aa) {
  for (var index = 2; index < aa.length; index += 1) {
    if (aaInput === aa[index].toLowerCase()) {
      return true;
    }
  }
  return false;
}

print("Enter an amino acid, START, or STOP and I will tell you it's three-letter mRNA codon, or codons!")
print("NOTE: 'start' and 'stop' SHOULD work now but report BUGS")

var aminoAcidInput = input().toLowerCase()


var found = false;

for (var index = 0; index < codons.length; index += 1) {
  var aa = codons[index];
  var name = aa[0];
  var abbrev = aa[1];
  if (aminoAcidInput === "stop" && aminoAcidInput === name || matchesCodons(aminoAcidInput, aa) && name === "stop" || aminoAcidInput === "uaa" && abbrev === "UAA" ) {
    print("Amino Acid: N/A for "+name+" codon");
    printCodons(aa);
    print("and "+abbrev)
    found = true;
    break;
  } else if (aminoAcidInput === name && name === "methionine" || aminoAcidInput === abbrev && name === "methionine" || matchesCodons(aminoAcidInput, aa) && name === "methionine" || aminoAcidInput === "start" && name === "methionine") {
    print("Amino acid: " + name);
    print("Abbreviation: " + abbrev);
    printCodons(aa);
    print("This is also a start codon. Every single sequence always starts with this amino acid!")
    found = true;
    break;
  } else if (aminoAcidInput === name || aminoAcidInput === abbrev || matchesCodons(aminoAcidInput, aa)) {
    print("Amino acid: " + name);
    print("Abbreviation: " + abbrev);
    printCodons(aa);
    found = true;
    break;
  }
}

if (!found) {
    print("No good!")
}
