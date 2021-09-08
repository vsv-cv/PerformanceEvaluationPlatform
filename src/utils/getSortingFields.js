import { getSortingParam } from './getSortingParam';

export const getSortingFields = (sortingFieldsConfig, sortingConfig) =>
  Object.entries(sortingFieldsConfig).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: getSortingParam(sortingConfig, value),
    }),
    {}
  );
