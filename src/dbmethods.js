import config from "./config";
import { client, account, database } from "./db";
import { ID } from "appwrite";
import user from "./usermodel";

class AppwriteMethods {
    async createAccount(email, password, name) {
        try {
            const res = await account.create(ID.unique(), email, password, name);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            const res = await account.createEmailSession(email, password);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            const res = await account.deleteSession("current");
            return res;
        } catch (error) {
            throw error;
        }
    }

    async createDocument(id, email, password, name) {
        try {
            const res = await database.createDocument("6568779dde76b842457b", "656877b61e7bb86434f6", id, {
                'email': email,
                'password': password,
                'name': name,
            }
            );
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async createReminder(desc, email, number, sms, date, select) {
        try {
            const res = await database.createDocument("6568779dde76b842457b", "6568803d41e4421a078e", ID.unique(), {
                'desc': desc,
                'email': email,
                'number': number,
                'sms': sms,
                'date': date,
                'select': select,
                'enabled': true,
            }
            );
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    }
    async updateReminder(id, desc, email, number, sms, date, select) {
        try {
            const res = await database.updateDocument("6568779dde76b842457b", "6568803d41e4421a078e", id, {
                'desc': desc,
                'email': email,
                'number': number,
                'sms': sms,
                'date': date,
                'select': select,
            }
            );
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async enableReminder(id) {
        try {
            const res = await database.updateDocument("6568779dde76b842457b", "6568803d41e4421a078e", id, {
                'enabled': true,
            }
            );
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async disableReminder(id) {
        try {
            const res = await database.updateDocument("6568779dde76b842457b", "6568803d41e4421a078e", id, {
                'enabled': false,
            }
            );
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async deleteReminder(id) {
        try {
            const res = await database.deleteDocument("6568779dde76b842457b", "6568803d41e4421a078e", id);
            console.log(res);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async getReminders() {
        try {
            const res = await database.listDocuments("6568779dde76b842457b", "6568803d41e4421a078e");
            return res.documents;
        } catch (error) {
            throw error;
        }
    }
    async getReminder(id) {
        try {
            const res = await database.getDocument("6568779dde76b842457b", "6568803d41e4421a078e", id);
            return res;
        } catch (error) {
            throw error;
        }
    }
    async getAccount() {
        try {
            const res = await account.get();
            return res;
        } catch (error) {
            throw error;
        }
    }

}

const appwriteMethods = new AppwriteMethods();

export default appwriteMethods;
