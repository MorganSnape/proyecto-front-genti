import { movementTypes } from '@/models/movements'
import { categoriesMock } from './categories'

export const movementsMock = [
  {
    id: 0,
    type: movementTypes.INGRESO,
    value: 156,
    date: Date('2024-02-25'),
    account: {
      name: 'Efectivo',
      id: 0
    },
    category: categoriesMock[0]
  },
  {
    id: 1,
    type: movementTypes.EGRESO,
    value: 450,
    date: Date('2024-02-25'),
    account: {
      name: 'Efectivo',
      id: 0
    },
    category: categoriesMock[2]
  },
  {
    id: 2,
    type: movementTypes.INGRESO,
    value: 156,
    date: Date('2024-02-25'),
    account: {
      name: 'Efectivo',
      id: 0
    },
    category: categoriesMock[1]
  },
  {
    id: 3,
    type: movementTypes.EGRESO,
    value: 45,
    date: Date('2024-02-25'),
    account: {
      name: 'Efectivo',
      id: 0
    },
    category: categoriesMock[0]
  },
  // {
  //   id: 4,
  //   type: movementTypes.EGRESO,
  //   value: 156,
  //   date: Date('2024-02-25'),
  //   account: {
  //     name: 'Efectivo',
  //     id: 0
  //   },
  //   category: categoriesMock[5]
  // },
  // {
  //   id: 5,
  //   type: movementTypes.EGRESO,
  //   value: 16,
  //   date: Date('2024-02-25'),
  //   account: {
  //     name: 'Efectivo',
  //     id: 0
  //   },
  //   category: categoriesMock[2]
  // }
]
