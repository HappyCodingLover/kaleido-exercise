var displayUser = function (user, format) {
    if (format === true) {
        return "email: ".concat(user.email, " name: ").concat(user.firstName, "' '").concat(user.lastName);
    }
    else {
        return "name: ".concat(user.firstName, "' '").concat(user.lastName, " email: ").concat(user.email);
    }
};
var res = displayUser({
    firstName: 'Jeffrey',
    lastName: 'Wilson',
    email: 'test@test.com'
}, true);
