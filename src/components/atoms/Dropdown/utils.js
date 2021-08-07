export const getSelectedOptionsTitle = ({ options, keys }) => {
  const selectedOptions = [];

  options.forEach(option => {
    if (keys.includes(option.key)) {
      const title = selectedOptions.length
        ? option.text.toLowerCase()
        : option.text;
      selectedOptions.push(title);
    }
  });

  return selectedOptions.join(', ');
}

const getDropdownContentMaxHeight = bottom => {
  return Math.min(window.innerHeight - bottom - 58, 250);
};

const getElementFontSize = element => {
  const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  const fontSize = parseFloat(style); 
  return `${fontSize}px`
};

const getDropdownContentMaxWidth = left => {
  return window.innerWidth - left - 58;
};

const getDropdownContentOffsetTop = ({ top, height }) => {
  return top + height + 8;
};

export const getDropdownContentStyle = callingComponent => {
  const { width, height, top, left, bottom } = callingComponent.getBoundingClientRect();
  return {
    minWidth: width,
    maxWidth: getDropdownContentMaxWidth(left),maxHeight: getDropdownContentMaxHeight(bottom),
    top: getDropdownContentOffsetTop({ top, height }),
    fontSize: getElementFontSize(callingComponent),
    left
  }
}

export const removeValueFromArray = (value, array) => {
  return array.filter(element => { 
    return element != value; 
});
}