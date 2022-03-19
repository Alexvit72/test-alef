const getValidAgeString = (age) => {
  if (age.length > 1 && age[0] === '1') {
    return 'лет';
  } else {
    if(age[age.length - 1] === '1') {
      return 'год';
    } else if(+age[age.length - 1] > 1 && +age[age.length - 1] < 5) {
      return 'года';
    } else {
      return 'лет';
    }
  }
};

export default getValidAgeString;
