// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '4 Jonsept, Footscray',
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj}
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value; 
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const newObj = {...obj}
    delete newObj[key];
    return newObj;

}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}