import express, { response } from 'express';
import { getRooms } from '../controllers/roomController.js'

const router = express.Router();

router.get('/', getRooms)
router.get('/getRooms', getRooms )
// router.post('/createRoom', createRoom)


export default router;
