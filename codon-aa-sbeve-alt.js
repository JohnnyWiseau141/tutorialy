const sbeve = require('./sbeve.js')

var aminoAcids = require('./amino-acids-alt.js')

function matchesCodons (aaInput, codons) {
  for (var index = 0; index < codons.length; index += 1) {
    if (aaInput === codons[index].toLowerCase()) {
      return true;
    }
  }
  return false;
}

function printCodons (codons) {
  var codonsString = codons[0];
  for (var index = 1; index < codons.length; index += 1) {
    codonsString += " " + codons[index];
  }
  print("Codons: " + codonsString);
}

print("Enter an amino acid, START, or STOP and I will tell you it's three-letter mRNA codon, or codons!")
print("NOTE: 'start' and 'stop' don't work yet.")

var aminoAcidInput = input().toLowerCase()

//var stop = ["UAA", "UAG", "UGA"]

var found = false;

for (var index = 0; index < aminoAcids.length; index += 1) {
  var aminoAcid = aminoAcids[index];
  if (aminoAcidInput === aminoAcid.name || aminoAcidInput === aminoAcid.abbrev || matchesCodons(aminoAcidInput, aminoAcid.codons)) {
    print("Amino acid: " + aminoAcid.name);
    print("Abbreviation: " + aminoAcid.abbrev);
    printCodons(aminoAcid.codons);
    found = true;
    break;
  }
}

if (!found) {
    print("No good!")
}
