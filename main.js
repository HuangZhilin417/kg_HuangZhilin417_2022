// Parsing input from command line
var myArgs = process.argv.slice(2);

// Valid inputs from the command line, and also contains negative sign
let intMap = new Map([
    ['0', 'Zero'],
    ['1', 'One'],
    ['2', 'Two'],
    ['3', 'Three'],
    ['4', 'Four'],
    ['5', 'Five'],
    ['6', 'Six'],
    ['7', 'Seven'],
    ['8', 'Eight'],
    ['9', 'Nine'],
    ['-', 'Negative']
]);

// Initialize the final output result and the converted array of strings
var finalPrintResult = '';
var finalArray = []

// Going through the input integers and parsing it to valid phonteic version of the string
for (i = 0; i < myArgs.length; i++) {
    var parsed = numberToString(myArgs[i]);
    finalPrintResult += parsed
    finalArray.push(parsed)
    if (i != myArgs.length - 1) {
        finalPrintResult += ',';
    }
}

// Print out the final result in stdout
process.stdout.write(finalPrintResult)

// Helper function to check the input integers to see if they are valid and if 
//  returning the phonetic string
function numberToString(validString) {
    var result = ''
    for (j = 0; j < validString.length; j++) {
        if (intMap.has(validString[j])) {
            if (j != 0 && validString[j] == '-') {
                throw new Error('invalid integer ' + validString + ', detected negative sign but not in the front of the numbers');
            }
            if ((j == 0 && validString.length != 1 && validString[j] == 0)
                || (validString.length > 1 && validString[0] == '-' && validString[1] == '0')) {
                throw new Error('invalid integer ' + validString + ', detected zero infront of integers');
            }
            result += intMap.get(validString[j]);
        } else {
            throw new Error('invalid integer ' + validString + ', it should be an integer');
        }
    }
    return result;
}