const getNameInitials = (name: any) => {
  const arrayName = name?.split(' ');

  if(arrayName?.length > 1 && !!arrayName[1][0]){
    return arrayName[0][0] + arrayName[1][0]
  }
  return arrayName[0][0]
}

export default getNameInitials;
