const sbeve = require('../sbeve.js')

var codons = require('./codons.js')

print("Enter an amino acid, START, or STOP and I will tell you it's three-letter mRNA codon!")

var aminoAcidInput = input()


for (var index = 0; index < codons.length; index+=1) {
    
    //Conditional for stop codons
    if (aminoAcidInput === "STOP" && aminoAcidInput === codons[index][0] ) {
        print("Stop codons are "+codons[index][1]+", "+codons[index][2]+", and "+codons[index][3])
        break
    //conditional for start
    } else if (aminoAcidInput === "START" && index === 1 ) {
        print("That's "+codons[index][0]+", which is also a START codon consisting of "+codons[index][2])
        break
    // conditional for methionine which is also a start codon
    } else if (aminoAcidInput === "methionine" && aminoAcidInput === codons[index][0]) {
        print("That's "+codons[index][0]+", which is also a START codon consisting of "+codons[index][2])
        break
    //conditional for methionione when put in abbreviated
    } else if (aminoAcidInput === "met" && aminoAcidInput === codons[index][1]) {
        print("That's "+codons[index][0]+", a START codon consisting of "+codons[index][2])
        break
    } else if (codons[index].length === 4 && codons[index][0] !== "STOP" && aminoAcidInput === codons[index][0]) {    
        print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+ " and " +codons[index][3] )
    } else if (aminoAcidInput === codons[index][0] && codons[index].length === 5 || aminoAcidInput === codons[index][1] && codons[index].length === 5 ) {
        print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+", " +codons[index][3]+", and "+codons[index][4] )
    }
}