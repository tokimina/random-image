// api from https://waifu.pics/docs
const baseUrl = 'https://api.waifu.pics/';

/**
 *
 * @param {string} type
 * @param {boolean} isSfw
 *
 */

export const getRandomImage = async (type, isSfw) => {
  const respons = await fetch(`${baseUrl}${isSfw ? 'sfw' : 'sfw'}/${type}`);
  const data = await respons.json();

  return data.url;
};
