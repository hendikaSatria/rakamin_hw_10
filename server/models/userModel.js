class UserModel {
    constructor(db) {
        this.db = db;
    }

    getAllUsers = async () => {
        return await this.db.query('SELECT * FROM users');
    };

    getUserById = async (userId) => {
        return await this.db.query('SELECT * FROM users WHERE id = $1', [userId]);
    };

    createUser = async (username, email) => {
        return await this.db.query('INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *', [username, email]);
    };

    updateUser = async (userId, username, email) => {
        return await this.db.query('UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *', [username, email, userId]);
    };

    deleteUser = async (userId) => {
        return await this.db.query('DELETE FROM users WHERE id = $1', [userId]);
    };
}

module.exports = UserModel;