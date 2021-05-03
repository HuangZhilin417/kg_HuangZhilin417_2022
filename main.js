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
