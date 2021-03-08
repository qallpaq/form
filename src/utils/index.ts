import { validateEmail, validateRequired, validateNumber } from './validateForm'

const isEmpty = (array: string[]): boolean => {
  return array.every(item => item !== '')
}

function GetOnlyNumbers(number: string): string {
  let result: string = ''
  const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  for (let i = 0; i < number.length; i++) {
    if (numbers.includes(number[i]))
      result += number[i]
  }
  return result
}

function phoneMask(value: string): string {
  const numbers = GetOnlyNumbers(value.replace('+7', ''))
  let resultNumber = value[0]

  const changeNumber = (figure: string, from: number, to: number): void => {
    resultNumber += figure + numbers.slice(from, Math.min(to, numbers.length))
  }

  if (numbers.length >= 2) changeNumber('(', 1, 4)
  if (numbers.length >= 5) changeNumber(')', 4, 7)
  if (numbers.length >= 8) changeNumber('-', 7, 9)
  if (numbers.length >= 10) changeNumber('-', 9, 11)

  return resultNumber
}

export { validateEmail, validateRequired, validateNumber, isEmpty, phoneMask }
