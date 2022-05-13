const sbeve = require('./sbeve.js')

print("Welcome to what is probably the absolute most TEDIOUS program I've written.")
print("Enter an element and I shall tell you it's atomic mass!")

var usersChosenElement = input()

usersChosenElement = usersChosenElement.toLowerCase()

print(usersChosenElement)

if ( usersChosenElement === "h" 
    || usersChosenElement === "hydrogen"
    ) {

    var h = 1.0078

    print("Hydrogen has an atomic mass of "+H)

} else if (usersChosenElement === "he" 
    || usersChosenElement === "helium"
    ) {
    
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
    ) {
    
    var o = 15.999
    
    print("Oxygen has an atomic mass of "+o)
    
} else if (usersChosenElement === "F" 
    || usersChosenElement === "f"
    ) {
    
    var f = 18.998
    
    print("Flourine has an atomic mass of "+f)
    // leaving off at flourine for a bit coming back for a few more at 3:20 on 5-6-22
} else if (usersChosenElement === "Ne" 
    || usersChosenElement === "Neon"
    ) {
    
    var ne = 20.180
    
    print("Neon has an atomic mass of "+ne)
    
} 
else if (usersChosenElement === "Na" 
    || usersChosenElement === "sodium"
    ) {
    
    var na = 22.990
    
    print("Sodium has an atomic mass of "+na)
    
} else if (usersChosenElement === "Mg" 
    || usersChosenElement === "Magnesium"
    ) {
    
    var mg = 24.305
    
    print("Magnesium has an atomic mass of "+mg)
    
} else if (usersChosenElement === "al" 
    || usersChosenElement === "aluminum"
    ) {
    
    var al = 26.982
    
    print("Aluminmum has an atomic mass of "+al)
    
} else if (usersChosenElement === "si" 
    || usersChosenElement === "silicon"
    ) {
    
    var si = 28.084
    
    print("Silicon has an atomic mass of "+si)
    
} else if (usersChosenElement === "p" 
    || usersChosenElement === "phosphorus"
    ) {
    
    var p = 30.974
    
    print("Helium has an atomic mass of "+p)
        //left off at phosphorus at 10-57am at 5-9-22
} else if (usersChosenElement === "s" 
    || usersChosenElement === "sulfur"
    ) {
    
    var s = 32.059
    
    print("Sulfur has an atomic mass of "+s)
    
} else if (usersChosenElement === "cl" 
    || usersChosenElement === "chlorine"
    ) {
    
    var cl = 35.446
    
    print("Chroline has an atomic mass of "+cl)
    
} else if (usersChosenElement === "ar" 
    || usersChosenElement === "argon"
    ) {
    
    var ar = 39.948
    
    print("Argon has an atomic mass of "+ar)
    
} else if (usersChosenElement === "k" 
    || usersChosenElement === "potassium"
    ) {
    
    var k = 39.098
    
    print("Potassium has an atomic mass of "+k)
    
} else if (usersChosenElement === "ca" 
    || usersChosenElement === "calcium"
    ) {
    
    var ca = 40.078
    
    print("Calcium has an atomic mass of "+ca)
    
} else if (usersChosenElement === "sc" 
    || usersChosenElement === "scandium"
    ) {
    
    var sc = 44.956
    
    print("Scandium has an atomic mass of "+sc)
    
} else if (usersChosenElement === "ti" 
    || usersChosenElement === "titanium"
    ) {
    
    var ti = 47.867
    
    print("Titanium has an atomic mass of "+ti)
    
} else if (usersChosenElement === "v" 
    || usersChosenElement === "vanadium"
    ) {
    
    var v = 50.942
    
    print("Helium has an atomic mass of "+v)

} else if (usersChosenElement === "cr" 
    || usersChosenElement === "chromium"
    ) {
    
    var cr = 51.996
    
    print("Chromium has an atomic mass of "+cr)
    
} else if (usersChosenElement === "mn" 
    || usersChosenElement === "manganese"
    ) {
    
    var mn = 54.958
    
    print("Manganese has an atomic mass of "+mn)
    
} else if (usersChosenElement === "fe" 
    || usersChosenElement === "iron"
    ) {
    
    var fe = 55.845
    
    print("Iron has an atomic mass of "+fe)
    //leaving off at iron 4pm 5-11-22
} else if (usersChosenElement === "co" 
    || usersChosenElement === "cobalt"
    ) {
    
    var co = 58.933
    
    print("Cobalt has an atomic mass of "+co)

} else if (usersChosenElement === "ni" 
    || usersChosenElement === "nickel"
    ) {
    
    var ni = 58.693
    
    print("Nickel has an atomic mass of "+ni)
    
} else if (usersChosenElement === "cu" 
    || usersChosenElement === "copper"
    ) {
    
    var cu = 63.546
    
    print("Copper has an atomic mass of "+cu)
    
} else if (usersChosenElement === "zn" 
    || usersChosenElement === "zinc"
    ) {
    
    var zn = 65.38
    
    print("Zinc has an atomic mass of "+zn)
    
} else if (usersChosenElement === "ga" 
        || usersChosenElement === "gallium") {
    
    var ga = 69.723
    
    print("Gallium has an atomic mass of "+ga)
    
} else if (usersChosenElement === "ge" 
    || usersChosenElement === "germanium") {
    
    var ge = 72.63
    
    print("Gernmanium has an atomic mass of "+ge)
    
} else if (usersChosenElement === "as" 
    || usersChosenElement === "arsenic") {
    
    var as = arsenic
    
    print("Arsenic has an atomic mass of "+as)
    
} else if (usersChosenElement === "se" 
    || usersChosenElement === "selenium"
    ) {
    
    var se = 78.96
    
    print("Selenium has an atomic mass of "+se)
    
} else if (usersChosenElement === "br" 
    || usersChosenElement === "bromine"
    ) {
    
    var br = 79.904
    
    print("Bromine has an atomic mass of "+br)
    
} else if (usersChosenElement === "kr" 
    || usersChosenElement === "krypton"
    ) {
    
    var kr = 83.798
    
    print("Krypton has an atomic mass of "+kr)
    
} else if (usersChosenElement === "rb" 
    || usersChosenElement === "rubidium"
    ) {
    
    var rb = 85.456
    
    print("Rubidium has an atomic mass of "+rb)
    
} else if (usersChosenElement === "sr" 
    || usersChosenElement === "strontium"
    ) {
    
    var sr = 87.62
    
    print("Strontium has an atomic mass of "+sr)
    
} else if (usersChosenElement === "y" 
    || usersChosenElement === "yttrium"
    ) {
    
    var y = yttrium
    
    print("Yttrium has an atomic mass of "+y)
    
} else if (usersChosenElement === "zr" 
    || usersChosenElement === "zirconium"
    ) {
    
    var zr = 91.224
    
    print("Zirconium has an atomic mass of "+zr)
    
} else if (usersChosenElement === "nb" 
    || usersChosenElement === "niobium"
    ) {
    
    var nb = 92.906
    
    print("niobium has an atomic mass of "+nb)
    
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