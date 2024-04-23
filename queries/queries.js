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

export { joyasQueryHateoas };