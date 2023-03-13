export const calcPercent = (currentValue: number ,total: number) => {

  if(currentValue === 0 && total === 0) {
    return -1;
  }

  if(currentValue === 0){
    return 0;
  };

  return Math.round((currentValue / total) * 100);
};
