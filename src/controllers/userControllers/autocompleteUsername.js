import UserService from "../../services/userService.js";

const autocompleteUsername = async (req, res) => {
    const username = req.params.username.toLowerCase();
    const userService = new UserService();
    const isAvailable = await userService.autocompleteUsername(username);

    return res.status(200).json({
        message: "Users with given usernames fetched successfully",
        data: isAvailable,
        success: true
    });
};

export default autocompleteUsername;
