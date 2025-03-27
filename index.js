// Write your solution in this file!
// Define the employee object
let employee = {
    name: "Sam"
};

//Non-destructively updates an employee object with a key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Returns a new object with updated key-value pair
}

//Destructively updates the employee object with a key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modifies the original object
    return employee;
}

//Non-destructively deletes a key from the employee object
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Creates a copy of the employee object
    delete newEmployee[key]; // Removes the key from the new object
    return newEmployee;
}

//Destructively deletes a key from the employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Modifies the original object
    return employee;
}

// Export functions 
module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
    employee
};
