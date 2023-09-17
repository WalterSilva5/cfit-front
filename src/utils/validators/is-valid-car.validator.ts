// UF-1302405-E6D3.395B.6D27.4F42.AE22.DD56.987C.DD52
// UF1302405E6D3395B6D274F42AE22DD56987CDD52

const ufs = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO'
]

function isValidCAR (sicar: string): any {
  sicar = sicar.replace(/[^a-zA-Z0-9 ]/g, '')

  sicar = sicar.replace(
    /([a-zA-Z])([0-9]{7})([a-zA-Z-0-9]{4})([a-zA-Z-0-9]{4})([a-zA-Z-0-9]{4})([a-zA-Z-0-9]{4})([a-zA-Z-0-9]{4})([a-zA-Z-0-9]{4})([a-zA-Z-0-9]{4})([a-zA-Z-0-9]{4})/,
    '$1-$2-$3.$4.$5.$6.$7.$8.$9.$10'
  )

  const isValid = ufs.some(uf => {
    console.log(sicar, 'dentro is valid')
    const newRegex = new RegExp(
      `([${uf[0]}][${uf[1]}])-([0-9]{7})-([a-zA-Z-0-9]{4}).([a-zA-Z-0-9]{4}).([a-zA-Z-0-9]{4}).([a-zA-Z-0-9]{4}).([a-zA-Z-0-9]{4}).([a-zA-Z-0-9]{4}).([a-zA-Z-0-9]{4}).([a-zA-Z-0-9]{4})`
    )

    return newRegex.test(sicar)
  })

  return { isValid, sicar }
}

export default isValidCAR
