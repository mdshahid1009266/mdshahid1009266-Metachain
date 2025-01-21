import express from "express"
const router = express.Router()


import { createTransaction, getAllTransaction } from "../controllers/Transaction.js";


router.post('/createTransaction', createTransaction);
router.get('/getAllTransaction', getAllTransaction);

export default router;
