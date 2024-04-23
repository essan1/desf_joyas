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
    const results = joyas.filter((joya) => joya.category === category)
    return {
        cantidad: results.length,
        data: results
    }
}

export { joyasQueryHateoas, joyasCategoryQueries  };