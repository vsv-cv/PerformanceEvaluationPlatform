export const getSelectedOptionsTitle = ({ options, keys }) => {
  return options
    ?.reduce((acc, option) => {
      return keys?.includes(option.key) ? [...acc, option.text] : acc;
    }, [])
    .join(', ');
};

const getElementFontSize = element => {
  const style = window
    .getComputedStyle(element, null)
    .getPropertyValue('font-size');
  const fontSize = parseFloat(style);
  return `${fontSize}px`;
};

const getDropdownContentMaxWidth = left => {
  return window.innerWidth - left - 58;
};

const getDropdownContentOffsetTop = ({ top, height }) => {
  return top + height + 4;
};

const getTopScroll = () =>
  window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

export const getDropdownContentStyle = callingComponent => {
  const { width, height, top, left } = callingComponent.getBoundingClientRect();
  return {
    minWidth: width,
    maxWidth: getDropdownContentMaxWidth(left),
    top: getDropdownContentOffsetTop({ top, height }) + getTopScroll(),
    fontSize: getElementFontSize(callingComponent),
    left,
  };
};

export const removeValueFromArray = (value, array) => {
  return array.filter(element => {
    return element !== value;
  });
};
