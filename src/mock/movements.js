import { movementTypes } from '@/models/movements'

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
    category: {
      name: 'Casa',
      id: 0
    }
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
    category: {
      name: 'Casa',
      id: 0
    }
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
    category: {
      name: 'Casa',
      id: 0
    }
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
    category: {
      name: 'Casa',
      id: 0
    }
  },
  {
    id: 4,
    type: movementTypes.EGRESO,
    value: 156,
    date: Date('2024-02-25'),
    account: {
      name: 'Efectivo',
      id: 0
    },
    category: {
      name: 'Casa',
      id: 0
    }
  },
  {
    id: 5,
    type: movementTypes.EGRESO,
    value: 16,
    date: Date('2024-02-25'),
    account: {
      name: 'Efectivo',
      id: 0
    },
    category: {
      name: 'Casa',
      id: 0
    }
  }
]
