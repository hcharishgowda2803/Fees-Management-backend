import express from "express";
import {addAdmins, getAdmins, getByIds, updateAdmin} from "../controllers/admin-controller.js"
import {authenticateToken} from "../controllers/auth-controller.js";

const router = express.Router();




router.get('/',authenticateToken,getAdmins);

router.get('/:id',authenticateToken,getByIds);

router.post('/',authenticateToken,addAdmins);

router.put('/:id',authenticateToken,updateAdmin)

export default router
