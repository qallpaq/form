export const validateRequired = (value: string): string => {
  return value === '' ? 'Обязательное поле' : ''
}

export const validateEmail = (value: string): string => {
  if (!value) {
    return 'Обязательное поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Некоректный E-mail'
  } else {
    return ''
  }
}

export const validateNumber = (value: any): string => {
  if (!value) {
    return 'Обязательное поле'
  } else if (isNaN(value)) {
    return 'Введите число'
  } else if (value < 0) {
    return 'Ты еще не родился'
  } else if (value > 120) {
    return 'So funny...'
  } else {
    return ''
  }
}
