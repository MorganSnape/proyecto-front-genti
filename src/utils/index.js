import moment from 'moment'
moment.locale('es')

import { movementTypes } from "@/models/movements"

export function formatNumberMoney(value, type) {
  let text = ''

  const valueString = formatNumber(Math.abs(value))

  switch (type) {
    case movementTypes.INGRESO:
      text = `+ ${valueString}`
      break;
  
    case movementTypes.EGRESO:
      text =  `- ${valueString}`
      break;
  }

  return text;
}

export function formatNumber(value) {
  return value.toLocaleString('en-US', {minimumFractionDigits: 2, useGrouping: false})
}

export function formatDate(date) {
  return moment(date).format('LL')
}