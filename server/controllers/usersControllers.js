class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userRepository.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    getUserById = async (req, res) => {
        const userId = req.params.id;
        try {
            const user = await this.userRepository.getUserById(userId);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    createUser = async (req, res) => {
        const { username, email } = req.body;
        try {
            const newUser = await this.userRepository.createUser(username, email);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    updateUser = async (req, res) => {
        const userId = req.params.id;
        const { username, email } = req.body;
        try {
            const updatedUser = await this.userRepository.updateUser(userId, username, email);
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    deleteUser = async (req, res) => {
        const userId = req.params.id;
        try {
            await this.userRepository.deleteUser(userId);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(404).json({ error: 'User not found' });
        }
    };
}

module.exports = UserController;