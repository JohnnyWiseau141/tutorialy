const sbeve = require('./sbeve.js')

print("Welcome to what is probably the absolute most TEDIOUS program I've written.")
print("Enter an element and I shall tell you it's atomic mass!")

var usersChosenElement = input()

if ( usersChosenElement === "h" 
    || usersChosenElement === "hydrogen"
    || usersChosenElement ==="H"
    || usersChosenElement === "Hydrogen") {

    var h = 1.0078

    print("Hydrogen has an atomic mass of "+H)

} else if (usersChosenElement === "he" 
    || usersChosenElement === "helium"
    || usersChosenElement ==="He"
    || usersChosenElement === "Helium") {
    
    var he = 4.0026

    print("Helium has an atomic mass of "+He)

} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Lithium") {

    var li = 6.938

    print("Helium (He) has an atomic mass of "+Li)

} else if (usersChosenElement === "be" 
    || usersChosenElement === "beryllium"
    || usersChosenElement ==="Be"
    || usersChosenElement === "Beryllium") {

    var be = 9.0122

    print("Beryllium (Be) has an atomic mass of "+Be)
//left off at Beryllium picking up 5-6-2022
} else if (usersChosenElement === "B" 
    || usersChosenElement === "Boron"
    || usersChosenElement ==="b"
    || usersChosenElement === "boron") {
    
    var b = 10.806
    
    print("Boron has an atomic mass of "+b)
    
} else if (usersChosenElement === "C" 
    || usersChosenElement === "carbon"
    || usersChosenElement ==="C"
    || usersChosenElement === "Carbon") {
    
    var c = 12.009
    
    print("Carbon has an atomic mass of "+c)
    
} else if (usersChosenElement === "N" 
    || usersChosenElement === "n"
    || usersChosenElement ==="Nitrogen"
    || usersChosenElement === "nitrogen") {
    
    var n = 6.938
    
    print("Nitrogen has an atomic mass of "+n)
    
} else if (usersChosenElement === "O" 
    || usersChosenElement === "o"
    || usersChosenElement ==="Oxygen"
    || usersChosenElement === "oxygen") {
    
    var o = 15.999
    
    print("Oxygen has an atomic mass of "+o)
    
} else if (usersChosenElement === "F" 
    || usersChosenElement === "f"
    || usersChosenElement ==="Flourine"
    || usersChosenElement === "flourine") {
    
    var f = 18.998
    
    print("Flourine has an atomic mass of "+f)
    // leaving off at flourine for a bit coming back for a few more at 3:20 on 5-6-22
} else if (usersChosenElement === "Ne" 
    || usersChosenElement === "Neon"
    || usersChosenElement ==="ne"
    || usersChosenElement === "neon") {
    
    var ne = 20.180
    
    print("Neon has an atomic mass of "+ne)
    
} 
else if (usersChosenElement === "Na" 
    || usersChosenElement === "sodium"
    || usersChosenElement ==="na"
    || usersChosenElement === "sodium") {
    
    var na = 22.990
    
    print("Sodium has an atomic mass of "+na)
    
} else if (usersChosenElement === "Mg" 
    || usersChosenElement === "Magnesium"
    || usersChosenElement ==="mg"
    || usersChosenElement === "magnesium") {
    
    var mg = 24.305
    
    print("Magnesium has an atomic mass of "+mg)
    
} else if (usersChosenElement === "al" 
    || usersChosenElement === "aluminum"
    || usersChosenElement ==="Al"
    || usersChosenElement === "Aluminum") {
    
    var al = 26.982
    
    print("Aluminmum has an atomic mass of "+al)
    
} else if (usersChosenElement === "si" 
    || usersChosenElement === "silicon"
    || usersChosenElement === "Si"
    || usersChosenElement === "Silicon") {
    
    var si = 28.084
    
    print("Silicon has an atomic mass of "+si)
    
} else if (usersChosenElement === "p" 
    || usersChosenElement === "phosphorus"
    || usersChosenElement ==="P"
    || usersChosenElement === "Phosphorus") {
    
    var p = 30.974
    
    print("Helium has an atomic mass of "+p)
        //left off at phosphorus at 10-57am at 5-9-22
} else if (usersChosenElement === "s" 
    || usersChosenElement === "sulfur"
    || usersChosenElement ==="S"
    || usersChosenElement === "Sulfur") {
    
    var s = 32.059
    
    print("Sulfur has an atomic mass of "+s)
    
} else if (usersChosenElement === "cl" 
    || usersChosenElement === "chlorine"
    || usersChosenElement ==="Cl"
    || usersChosenElement === "Chroline") {
    
    var cl = 35.446
    
    print("Chroline has an atomic mass of "+cl)
    
} else if (usersChosenElement === "ar" 
    || usersChosenElement === "argon"
    || usersChosenElement ==="Ar"
    || usersChosenElement === "Argon") {
    
    var ar = 39.948
    
    print("Argon has an atomic mass of "+ar)
    
} else if (usersChosenElement === "k" 
    || usersChosenElement === "potassium"
    || usersChosenElement ==="K"
    || usersChosenElement === "Potassium") {
    
    var k = 39.098
    
    print("Potassium has an atomic mass of "+k)
    
} else if (usersChosenElement === "ca" 
    || usersChosenElement === "calcium"
    || usersChosenElement ==="Ca"
    || usersChosenElement === "Calcium") {
    
    var ca = 40.078
    
    print("Calcium has an atomic mass of "+ca)
    
} else if (usersChosenElement === "sc" 
    || usersChosenElement === "scandium"
    || usersChosenElement ==="Sc"
    || usersChosenElement === "Scandium") {
    
    var sc = 44.956
    
    print("Scandium has an atomic mass of "+sc)
    
} else if (usersChosenElement === "ti" 
    || usersChosenElement === "titanium"
    || usersChosenElement ==="Ti"
    || usersChosenElement === "Titanium") {
    
    var ti = 47.867
    
    print("Titanium has an atomic mass of "+ti)
    
} else if (usersChosenElement === "v" 
    || usersChosenElement === "vanadium"
    || usersChosenElement ==="V"
    || usersChosenElement === "Vanadium") {
    
    var v = 50.942
    
    print("Helium has an atomic mass of "+v)

} else if (usersChosenElement === "cr" 
    || usersChosenElement === "chromium"
    || usersChosenElement ==="Cr"
    || usersChosenElement === "Chromium") {
    
    var cr = 51.996
    
    print("Chromium has an atomic mass of "+cr)
    
} else if (usersChosenElement === "mn" 
    || usersChosenElement === "manganese"
    || usersChosenElement ==="Mn"
    || usersChosenElement === "Manganese") {
    
    var mn = 54.958
    
    print("Manganese has an atomic mass of "+mn)
    
} else if (usersChosenElement === "fe" 
    || usersChosenElement === "iron"
    || usersChosenElement ==="Fe"
    || usersChosenElement === "Iron") {
    
    var fe = 55.845
    
    print("Iron has an atomic mass of "+fe)
    //leaving off at iron 4pm 5-11-22
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else if (usersChosenElement === "li" 
    || usersChosenElement === "lithium"
    || usersChosenElement ==="Li"
    || usersChosenElement === "Litium") {
    
    var Li = 6.938
    
    print("Helium has an atomic mass of "+He)
    
} else {
    print("You didn't enter an element, ya fool!")
}