class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }

    getAllUsers = async () => {
        try {
            const result = await this.userModel.getAllUsers();
            return result.rows;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    getUserById = async (userId) => {
        try {
            const result = await this.userModel.getUserById(userId);
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    };

    createUser = async (username, email) => {
        try {
            const result = await this.userModel.createUser(username, email);
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    };

    updateUser = async (userId, username, email) => {
        try {
            const result = await this.userModel.updateUser(userId, username, email);
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    };

    deleteUser = async (userId) => {
        try {
            await this.userModel.deleteUser(userId);
        } catch (error) {
            throw new Error(error.message);
        }
    };
}

module.exports = UserRepository;