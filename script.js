//your JS code here. If required.
function functionName() {
    alert(arguments.callee.name);
}

// Examples
functionName(); // Alerts "functionName"

// Another example with a different function name
function AccioJob() {
    alert(arguments.callee.name);
}

AccioJob(); // Alerts "AccioJob"
