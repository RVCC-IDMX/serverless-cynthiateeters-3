/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.handler = async function (event, context) {
  const POKE_API = ' https://pokeapi.co/api/v2/pokedex/kanto';
  const response = await fetch(POKE_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
