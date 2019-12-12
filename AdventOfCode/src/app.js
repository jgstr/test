// Advent of Code - Day 2

const intCodesStrings = "1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,6,1,19,2,19,13,23,1,23,10,27,1,13,27,31,2,31,10,35,1,35,9,39,1,39,13,43,1,13,43,47,1,47,13,51,1,13,51,55,1,5,55,59,2,10,59,63,1,9,63,67,1,6,67,71,2,71,13,75,2,75,13,79,1,79,9,83,2,83,10,87,1,9,87,91,1,6,91,95,1,95,10,99,1,99,13,103,1,13,103,107,2,13,107,111,1,111,9,115,2,115,10,119,1,119,5,123,1,123,2,127,1,127,5,0,99,2,14,0,0";
const intCodes = intCodesStrings.split(',').map(code => parseFloat(code));

const startIntComputer = (codes) => {

    const ADD = 1; const MULTIPLY = 2; const STOP = 99;

    for(let opcodePosition = 0; 
        (opcodePosition + 4) <= (codes.length - 1); 
        opcodePosition += 4)
        {
            if(codes[opcodePosition] === 99) break;

            const pos1Value = codes[codes[opcodePosition + 1]];
            const pos2Value = codes[codes[opcodePosition + 2]];
            const whereUpdateGoes = codes[opcodePosition + 3];
            const update = 0;
            
            if(codes[opcodePosition] === ADD) { 
                update = pos1Value + pos2Value;
                codes[whereUpdateGoes] = update;
             };

            if(codes[opcodePosition] === MULTIPLY) { 
                update = pos1Value * pos2Value;
                codes[whereUpdateGoes] = update;
             };
    }
    return codes;
};

intCodes[1] = 12;
intCodes[2] = 2;
const updatedIntCodes = startIntComputer(intCodes);
console.log("Answer Position 1:", updatedIntCodes[0]);

// const test = [1,0,0,0,99]; // should be 2,0,0,0,99 (1 + 1 = 2).
// const test2 = [2,3,0,3,99]; // should be 2,3,0,6,99 (3 * 2 = 6).

// const updatedTest = startIntComputer(test)
// console.log("Test Results: ", updatedTest);
// console.log(" ");
// const updatedTest2 = startIntComputer(test2)
// console.log("Test Results: ", updatedTest2);

