const moduleWeights = [92349, 57040, 64079, 121555, 143735, 64642, 104858, 144446, 88871, 62338, 113424, 59960, 53999, 86867, 67224, 124130, 108921, 130492, 120361, 74426, 70397, 88106, 125442, 74237, 137818, 66633, 71756, 143276, 143456, 135698, 121124, 67739, 112861, 78572, 73565, 111899, 57543, 130314, 121605, 121426, 117143, 129957, 98042, 104760, 144846, 131238, 101076, 53328, 83592, 104077, 101952, 54137, 115363, 60556, 133086, 113361, 117829, 75003, 93729, 140022, 126219, 59907, 140589, 91812, 50485, 56232, 92858, 106820, 123423, 98553, 135315, 95583, 72278, 98702, 55709, 146773, 89719, 134752, 79562, 70455, 88468, 139824, 138646, 117516, 123267, 113754, 120353, 139145, 53219, 63053, 131434, 91705, 53650, 145234, 78461, 119587, 108976, 113613, 121790, 120366];

const getRequiredFuel = moduleWeight => Math.floor(moduleWeight / 3) - 2;

const getRequiredFuelRecursive = (moduleWeight, count) => {
    let totalWeight = moduleWeight;
    const requiredFuel = getRequiredFuel(moduleWeight);
    if(count < 1) {
        throw new Error("You ran over your allowed stack.");
    } else if(requiredFuel <= 0) {
        return moduleWeight;
    } else {
        return totalWeight = totalWeight + getRequiredFuelRecursive(requiredFuel, count--);
    }
};

const requiredFuelRecursive = moduleWeights.reduce((accumulator, current) => {
    const totalModuleFuel = getRequiredFuelRecursive(current, 120) - current;
    return accumulator + totalModuleFuel;
}, 0);

console.log("*** Total Fuel Requirements Recursively: ", requiredFuelRecursive);

/* Tests 
const testModuleWeight = 100756;
const testModuleWeights = [100756, 100756, 100756];
console.log("*** Required fuel for ONE TEST module (non recursive) is: ", getRequiredFuel(testModuleWeight));
console.log("*** Required fuel for ONE TEST module (REcursive) is: ", getRequiredFuelRecursive(testModuleWeight, 20) - testModuleWeight);
const requiredFuelRecursiveTest = testModuleWeights.reduce((accumulator, current) => {
    const totalModuleFuel = getRequiredFuelRecursive(current, 120) - current;
    return accumulator + totalModuleFuel;
}, 0);

console.log("*** Total Fuel Requirements Recursively for ALL TEST Modules: ", requiredFuelRecursiveTest);

*/