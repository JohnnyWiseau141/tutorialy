const sbeve = require('./sbeve.js')

var codons = require('./codon-aa-array.js')

print("Enter an amino acid, START, or STOP and I will tell you it's three-letter mRNA codon, or codons!")

var aminoAcidInput = input()

if (aminoAcidInput.length === 3 
     && aminoAcidInput !== "met"
     && aminoAcidInput !== "phe" 
     && aminoAcidInput !== "ile" 
     && aminoAcidInput !== "pro" 
     && aminoAcidInput !== "leu" 
     && aminoAcidInput !== "arg" 
     && aminoAcidInput !== "ala" 
     && aminoAcidInput !== "asn" 
     && aminoAcidInput !== "asp" 
     && aminoAcidInput !== "val" 
     && aminoAcidInput !== "ser" 
     && aminoAcidInput !== "thr"
     && aminoAcidInput !== "tyr"
     && aminoAcidInput !== "his"
     && aminoAcidInput !== "gln"
     && aminoAcidInput !== "lys"
     && aminoAcidInput !== "glu"
     && aminoAcidInput !== "cys"
     && aminoAcidInput !== "trp"
     && aminoAcidInput !== "gly") {
        aminoAcidInput = aminoAcidInput.toUpperCase()
    } else {
    aminoAcidInput = aminoAcidInput.toLowerCase()
    }

var goodInput

for (var index = 0; index < codons.length; index+=1) {
    goodInput = true
    //Conditional for stop
    if (aminoAcidInput === "stop" && aminoAcidInput === codons[index][0] 
        || aminoAcidInput === codons[index][1] && aminoAcidInput === "UAA"
        || aminoAcidInput === codons[index][2] && aminoAcidInput === "UAG"
        || aminoAcidInput === codons[index][3] && aminoAcidInput === "UGA") {
                print("Stop codons are "+codons[index][1]+", "+codons[index][2]+", and "+codons[index][3])
        goodInput = true
        break
    //conditional for start and methionine which is also a start codon
     } else if ( aminoAcidInput === "start" 
                && index === 1
                ||aminoAcidInput === "methionine" 
                && aminoAcidInput === codons[index][0] 
                || aminoAcidInput === "met"
                && aminoAcidInput === codons[index][1]
                || aminoAcidInput === "AUG"
                && aminoAcidInput === codons[index][2]) {
        print("That's "+codons[index][0]+", which is also a START codon made of "+codons[index][2])
        break
    // normal ish conditionals finally
    } else if (codons[index].length === 3 
                && codons[index][0] !== "methionine" 
                && aminoAcidInput === codons[index][0]
                || aminoAcidInput === codons[index][1]
                && codons[index].length === 3 
                && codons[index][1] !== "met"
                || aminoAcidInput === codons[index][2]) {    
                
        print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codon "+codons[index][2])
        break
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
                && codons[index].length === 5 
                || aminoAcidInput === codons[index][2]
                || aminoAcidInput === codons[index][3]
                || aminoAcidInput === codons[index][4]) {
        print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+", " +codons[index][3]+", and "+codons[index][4] )
        break
    } else if (aminoAcidInput === codons[index][0] 
                && codons[index].length === 6 
                || aminoAcidInput === codons[index][1] 
                && codons[index].length === 6
                || aminoAcidInput === codons[index][2]
                || aminoAcidInput === codons[index][3]
                || aminoAcidInput === codons[index][4]
                || aminoAcidInput === codons[index][5]) {
            print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+", " +codons[index][3]+", "+codons[index][4]+", and "+codons[index][5] )
            break
    } else if (aminoAcidInput === codons[index][0] 
                && codons[index].length === 8 
                || aminoAcidInput === codons[index][1] 
                && codons[index].length === 8
                || aminoAcidInput === codons[index][2]
                || aminoAcidInput === codons[index][3]
                || aminoAcidInput === codons[index][4]
                || aminoAcidInput === codons[index][5]
                || aminoAcidInput === codons[index][6]
                || aminoAcidInput === codons[index][7]) {
            print("You entered "+codons[index][0]+" which is abbreviated as " +codons[index][1]+ " and made up of codons "+codons[index][2]+", " +codons[index][3]+", "+codons[index][4]+", "+codons[index][5]+", "+codons[index][6]+", and "+codons[index][7] )
            break
    } else {
        goodInput = false
        
    }
}

if (!goodInput) {
    print("You entered "+aminoAcidInput)
    print("I guess you shoulda entered a valid AA or simple STOP or START string. Woe is you.")
}