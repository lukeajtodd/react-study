import { atom } from 'recoil'

const books = atom({
  key: 'books',
  default: []
})

export default books