const formatCurrency = (num, currency, lang = undefined) => {
   return new Intl.NumberFormat(lang, {style: 'currency', currency}).format(num)

}
export default formatCurrency