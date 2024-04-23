import { joyas } from "../data/joyas.js";

const joyasQueryHateoas = () => {
  const consulta = joyas.map((joya) => {
    return {
      name: joya.name,
      model: joya.model,
      category: joya.category,
      metal: joya.metal,
      href: `/joyas/${joya.id}`,
    };
  });

  return {
    cantidad: consulta.length,
    data: consulta,
  };
};

const joyasCategoryQueries = (category) => {
  const results = joyas.filter((joya) => joya.category === category);
  return {
    cantidad: results.length,
    data: results,
  };
};

const joya = (id) => {
  return results.find(
    (e) => e.id === Number(id));
};

const joyasFieldQuery = (joya, campo) => {
  for (const propiedad in joya) {
    if (!campo.includes(propiedad)) delete joyas[propiedad];
  }
  return joya;
};

export { joyasQueryHateoas, joyasCategoryQueries, joya, joyasFieldQuery };
