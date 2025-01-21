import transactionSchema from "../database/transactionschema.js";

const createTransaction = async (req, res) => {
    const data = req.body;

    const newdata = transactionSchema(data);
    try {
        await newdata.save();
        res.status(201).json(newdata);

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
const getAllTransaction = async (req, res) => {

    try {
        const newdata = await transactionSchema.find();
        res.status(201).json(newdata);

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

export { createTransaction, getAllTransaction }
