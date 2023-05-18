export const capitalizeFirstLetter = string => {
  const str = string;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
};

export const getWindScale = value => {
  if (value < 1) {
    return 'Calm';
  }
  if (value >= 1 && value <= 3) {
    return 'Light air';
  }
  if (value >= 4 && value <= 7) {
    return 'Light breeze';
  }
  if (value >= 8 && value <= 12) {
    return 'Gentle breeze';
  }
  if (value >= 13 && value <= 18) {
    return 'Moderate breeze';
  }
  if (value >= 19 && value <= 24) {
    return 'Fresh breeze';
  }
  if (value >= 25 && value <= 31) {
    return 'Strong breeze';
  }
  if (value >= 32 && value <= 38) {
    return 'High wind';
  }
  if (value >= 39 && value <= 46) {
    return 'Gale';
  }
  if (value >= 47 && value <= 54) {
    return 'Strong gale';
  }
  if (value >= 55 && value <= 63) {
    return 'Storm';
  }
  if (value >= 64 && value <= 72) {
    return 'Violent storm';
  }
  if (value >= 73) {
    return 'Hurricane';
  }
};
