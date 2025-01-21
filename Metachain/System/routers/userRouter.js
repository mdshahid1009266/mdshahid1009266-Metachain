import express from "express"
const router = express.Router()


import { createUser, login, creaSouport, readUsers, readUserById, updateUser, deleteUser } from "../controllers/userController.js";

// router.get('/allUsers', readUsers);
// router.get('/user/:id', readUserById);
// router.put('/updateUser/:id', updateUser);
// router.delete('/deleteUsers/:id', deleteUser);


router.post('/createUser', createUser);
router.get('/getAllUser', readUsers);
router.get('/getUser/:id', readUserById);
router.put('/updateUser/:id', updateUser);
router.put('/deleteUser/:id', deleteUser);
router.post('/login', login);
router.post('/creaSouport', creaSouport);
export default router;
