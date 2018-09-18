import startsWith from 'lodash/startsWith';

const parseCurrencyToNumber = (value) => {
  if (!value) {
    return null;
  }

  let negative = false;
  if (startsWith(value, "-")) {
    negative = true;
  }

  let cleanedValue = value.replace(/[^0-9]/g, '');

  if (!cleanedValue) {
    return null;
  }

  if (negative) {
    cleanedValue = "-" + cleanedValue;
  }

  return parseFloat(cleanedValue);
};

export default parseCurrencyToNumber;
