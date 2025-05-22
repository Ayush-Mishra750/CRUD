import express from 'express';
const router =express.Router();
import StudentController from '../controller/studentController.js'

router.get('/',StudentController.getAllDoc)   
router.post('/',StudentController.createDoc)
router.get('/edit/:id',StudentController.editDoc)
router.post('/delete/:id',StudentController.deleteDocByID)
router.post('/update/:id',StudentController.updateDocById)



export default router;