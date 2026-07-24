function sum(a, b) {
    return a + b;
}

function login(msg, err) {
    if (err) {
        console.log("Error is " + err);
    } else {
        console.log("Welcome " + msg);
    }
}

function loginVerification(username, password, clbk) {
    if (username == "yash1610" && password == "XYZ") {
        clbk("Success", null);
    } else {
        clbk(null, "Username or password is incorrect");
    }
}

loginVerification("yash1610", "XYZ", login);