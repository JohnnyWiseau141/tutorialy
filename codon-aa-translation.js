const sbeve = require('../sbeve.js')

var codons = require('./codons.js')

print("Enter an amino acid, START, or STOP and I will tell you it's three-letter mRNA codon!")

var aminoAcidInput = input()

var goodInput

for (var index = 0; index < codons.length; index+=1) {
    
    //Conditional for stop
    if (aminoAcidInput === "STOP" && aminoAcidInput === codons[index][0] ) {
        print("Stop codons are "+codons[index][1]+", "+codons[index][2]+", and "+codons[index][3])
        break
    //conditional for start and methionine which is also a start codon
     } else if ( aminoAcidInput === "START" 
                && index === 1
                ||aminoAcidInput === "methionine" 
                && aminoAcidInput === codons[index][0] 
                || aminoAcidInput === "met"
                && aminoAcidInput === codons[index][1]) {
        print("That's "+codons[index][0]+", which is also a START codon made of "+codons[index][2])
        break
    // normal ish conditionals finally
    } else if (codons[index].length === 4 
                && codons[index][0] !== "STOP" 
                && aminoAcidInput === codons[index][0]
                || aminoAcidInput === codons[index][1]
                && codons[index].length === 4 
                && codons[index][0] !== "STOP") {    

        print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+ " and " +codons[index][3] )
        break
    } else if (aminoAcidInput === codons[index][0] 
                && codons[index].length === 5 
                || aminoAcidInput === codons[index][1] 
                && codons[index].length === 5 ) {
        print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+", " +codons[index][3]+", and "+codons[index][4] )
        break
    } else if (aminoAcidInput === codons[index][0] 
                && codons[index].length === 6 
                || aminoAcidInput === codons[index][1] 
                && codons[index].length === 6) {
            print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+", " +codons[index][3]+", "+codons[index][4]+", and "+codons[index][5] )
            break
    } else if (aminoAcidInput === codons[index][0] 
                && codons[index].length === 8 
                || aminoAcidInput === codons[index][1] 
                && codons[index].length === 8) {
            print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+", " +codons[index][3]+", "+codons[index][4]+", "+codons[index][5]+", "+codons[index][6]+", and "+codons[index][7] )
            break
    } else {
        goodInput = false
    }
}