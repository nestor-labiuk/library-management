import { Router } from 'express'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/', updateUser)
router.delete('/', deleteUser)

export default router