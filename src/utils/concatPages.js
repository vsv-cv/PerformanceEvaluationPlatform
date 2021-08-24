export const concatPages = pages => {
  if (!Array.isArray(pages)) return;

  return pages?.reduce((acc, page) => {
    return acc.concat(page);
  }, []);
};
