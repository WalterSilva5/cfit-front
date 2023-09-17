const getNameInitials = (name: string): string => {
  const arrayName = name.split(' ')

  if (arrayName.length > 1 && arrayName[1][0] !== '') {
    return arrayName[0][0] + arrayName[1][0]
  }

  return arrayName[0][0]
}

export default getNameInitials
