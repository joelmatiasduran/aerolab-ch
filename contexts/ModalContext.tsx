import { createContext } from 'react'

interface ModalContextTypes {
  modalValue: string
  setModalValue: (value: string) => void
}

export const ModalContext = createContext<ModalContextTypes>({
  modalValue: 'Welcome!!',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setModalValue: () => {},
})
