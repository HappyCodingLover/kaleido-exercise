interface User {
    firstName: string,
    lastName: string,
    email: string
}

const displayUser = (user: User, format: true) => {
    if( format === true) {
        return `email: ${user.email} name: ${user.firstName}' '${user.lastName}`;
    } else {
        return `name: ${user.firstName}' '${user.lastName} email: ${user.email}`;
    }
}

let res : string = displayUser({
    firstName: 'Jeffrey',
    lastName: 'Wilson',
    email: 'test@test.com'
}, true);
