
interface currencyFormatter{
  currency: string,
  value: number
}

export function currencyFormatter({ currency = "COP", value}: currencyFormatter) {
  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency
  })
  return formatter.format(value)
}