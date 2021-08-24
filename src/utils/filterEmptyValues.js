const isValueEmpty = value => {
  return value === '' || value === null || value?.length === 0;
};

export const filterEmptyValues = object => {
  return Object.entries(object).reduce((acc, [key, value]) => {
    return isValueEmpty(value) ? acc : { ...acc, [key]: value };
  }, {});
};
