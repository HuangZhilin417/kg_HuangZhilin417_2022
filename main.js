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

//print out the final result in stdout
process.stdout.write(finalPrintResult)