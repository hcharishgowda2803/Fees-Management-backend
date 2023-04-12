import express from "express";
import {addAdmins, getAdmins, getByIds, updateAdmin} from "../controllers/admin-controller.js"

const router = express.Router();


router.get('/',getAdmins);

router.get('/:id',getByIds);

router.post('/',addAdmins);

router.put('/:id',updateAdmin)

export default router
