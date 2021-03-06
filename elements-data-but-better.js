const sbeve = require('./sbeve.js')

var elements = [ 
['hydrogen', 1.0078, 'h'],
['helium', 4.0026, 'he'],
['lithium', 6.938, 'li'],
['beryllium', 9.0122, 'be'],
['boron', 10.806, 'b'],
['carbon', 12.009, 'c'],
['nitrogen', 14.004, 'n'],
['oxygen', 15.999, 'o'],
['flourine', 18.998, 'f'],
['neon', 20.180, 'ne'], 
['sodium', 22.990, 'na'], 
['magnesium', 24.305, 'mg'], 
['aluminum', 26.982, 'al'], 
['silicon', 28.084, 'si'], 
['phosphorus', 30.974, 'p'], 
['sulfur', 32.059, 's'], 
['chlorine', 35.446, 'cl'], 
['argon', 39.948, 'ar'], 
['potassium', 39.098, 'k'], 
['calcium', 40.078, 'ca'], 
['scandium', 44.956, 'sc'], 
['titanium', 47.867, 'ti'], 
['vanadium', 50.942, 'v'], 
['chromium', 51.996, 'cr'], 
['manganese', 54.938, 'mn'], 
['iron', 55.845, 'fe'], 
['cobalt', 58.933, 'co'], 
['nickel', 58.693, 'ni'], 
['copper', 63.546, 'cu'], 
['zinc', 63.38, 'zn'], 
['gallium', 69.723, 'ga'], 
['germanium', 72.640, 'ge'], 
['arsenic', 74.922, 'as'], 
['selenium', 78.960, 'se'], 
['bromine', 79.904, 'br'], 
['krypton', 83.798, 'kr'], 
['rubidium', 85.468, 'rb'], 
['strontium', 87.620, 'sr'], 
['yttrium', 88.906, 'y'], 
['zirconium', 97.224, 'zr'], 
['niobium', 92.906, 'nb'], 
['Molybdenum', 95.950, 'mo'], 
['technetium', 98, 'tc'], 
['ruthenium', 101.07, 'ru'], 
['rhodium', 102.91, 'rh'], 
['palladium', 106.42, 'pd'], 
['silver', 107.87, 'ag'], 
['cadmium', 112.41, 'cd'], 
['indium', 114.82, 'in'], 
['tin', 118.71, 'sn'], 
['antimony', 121.76, 'sb'], 
['tellurium', 127.60, 'te'], 
['iodine', 126.90, 'i'], 
['xenon', 131.29, 'xe'], 
['caesium', 132.91, 'cs'], 
['barium', 137.33, 'ba'], 
['lanthanum', 138.91, 'la'],
['cerium', 140.12, 'ce'], 
['praseodymium', 140.91, 'pr'], 
['neodymium', 144.24, 'nd'], 
['promethium', 145, 'pm'], 
['samarium', 150.36, 'sm'], 
['europium', 151.96, 'eu'], 
['gadolinium', 157.25, 'gd'], 
['terbium', 158.93, 'tb'], 
['dysprosium', 162.5, 'dy'], 
['holmium', 164.93, 'ho'], 
['erbium', 167.26, 'er'], 
['thulium', 168.93, 'tm'], 
['ytterbium', 173.04, 'yb'], 
['lutetium', 174.97, 'lu'],  
['hafnium', 178.49, 'hf'], 
['tantalum', 180.95, 'ta'], 
['tungsten', 183.84, 'w'], 
['renium', 186.21, 're'], 
['osmium', 190.23, 'os'], 
['iridium', 192.22, 'ir'], 
['plantinum', 195.08, 'pt'], 
['gold', 196.97, 'au'], 
['mercury', 200.59, 'hg'], 
['thallium', 204.38, 'tl'], 
['lead', 207.20, 'pb'], 
['bismuth', 208.98, 'bi'], 
['polonium', 209, 'po'], 
['astatine', 210, 'at'], 
['radon', 222, 'rn'], 
['francium', 223, 'fr'], 
['radium', 226, 'ra'], 
['actinium', 227, 'ac'], 
['thorium', 232.04, 'th'], 
['protactinium', 231.04, 'pa'], 
['uranium', 238.03, 'u'], 
['neptunium', 237.05, 'np'], 
['plutonium', 244, 'pu'], 
['americium', 243, 'am'], 
['curium', 247, 'cm'], 
['berkelium', 247, 'bk'], 
['californium', 251, 'cf'], 
['einsteinium', 252, 'es'], 
['fermium', 257, 'fm'], 
['mendelevium', 258, 'md'], 
['nobelium', 259, 'no'], 
['lawrencium', 262, 'lr'], 
['rutherfordium', 261, 'rf'], 
['dubnium', 262, 'db'], 
['seaborgium', 269.128, 'sg'], 
['bohrium', 264, 'bh'], 
['hassium', 269.1336, 'hs'], 
['meitnerium', 278, 'mt'], 
['darmstadtium', 282.166, 'ds'], 
['roentgenium', 282.169, 'rg'], 
['copernicium', 286.179, 'cn'], 
['nihonium', 286.182, 'nh'], 
['flerovium', 290.192, 'fl'], 
['moscovium', 290.196, 'mc'], 
['livermorium', 293.205, 'lv'], 
['tennessine', 294.211, 'ts'], 
['oganesson', 295.216, 'og']
]



// user inputs an element, and the program prints atomic mass of that element

// yell at user if they don't put in the element

print("Enter an element (wip) below!")
print("The computer will tell you the atomic mass:")

var elementalInput = input()


var isElemental =  false

for (var index = 0; index < elements.length; index+=1) {
    
    if (elements[index][0] === elementalInput || elements[index][2] === elementalInput ) {
        var daAbbreve
        
        daAbbreve = elements[index][2]

        if (daAbbreve.length > 1) {
            var splitFirst
            var splitSecond
            splitFirst = daAbbreve[0]
            splitSecond = daAbbreve[1]

            daAbbreve = splitFirst.toUpperCase() + splitSecond
        } else {
            daAbbreve = daAbbreve.toUpperCase()
        }

        
        print("The atomic mass of "+elements[index][0]+" is: "+elements[index][1]+" which is abbreviated as "+daAbbreve)
        isElemental = true
        break
    }
}

if (!isElemental) {
    print("You didn't type an element!")
}