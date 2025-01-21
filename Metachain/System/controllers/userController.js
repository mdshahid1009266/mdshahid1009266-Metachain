import userSchema from "../database/userSchema.js";
import souportSchema from "../database/souport.js";
const createUser = async (req, res) => {
    const user = req.body;
    const newuser = userSchema(user);
    try {
        await newuser.save();
        res.status(201).json(newuser);

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const creaSouport = async (req, res) => {
    const user = req.body;
    console.log(user);

    const newuser = souportSchema(user);
    try {
        await newuser.save();
        res.status(201).json(newuser);

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const login = async (req, res) => {
    const user = req.body;
    try {
        const User = await userSchema.findOne({ email: user.email });
        if (User) {
            if (User.password != user.password) {
                res.status(401).json("your email and password doesnot match");
            } else {
                const { password, ...others } = User._doc;
                res.status(201).json(others);
            }
        } else {
            res.status(401).json("There is no user");
        }
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

const readUsers = async (req, res) => {
    try {
        const users = await userSchema.find(); // Fetch all users
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const readUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userSchema.findById(id); // Fetch user by ID
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedUser = await userSchema.findByIdAndUpdate(id, updates, {
            new: true, // Return the updated document
            runValidators: true, // Validate before updating
        });

        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await userSchema.findByIdAndDelete(id);
        res.status(200).json(deletedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createUser, login, readUsers, readUserById, updateUser, deleteUser, creaSouport }


