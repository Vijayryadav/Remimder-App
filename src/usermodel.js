class User {
    constructor(email, password, name) {
        this.email = email;
        this.password = password;
        this.name = name;

    }

    toJSON() {
        return {
            email: this.email,
            password: this.password,
            name: this.name,
        };
    }
}

const user = new User();

export default user;