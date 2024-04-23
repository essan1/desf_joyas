import {
  joyasQueryHateoas,
  joyasCategoryQueries,
  joyasFieldQuery,
  joya,
} from "../queries/queries.js";

const hateoas = (req, res) => {
  const result = joyasQueryHateoas();
  res.send(result);
};

const joyasCategory = (req, res) => {
  const { categoria } = req.params;
  const result = joyasCategoryQueries(categoria);
  res.send(result);
};

const joyasFieldControl = (req, res) => {
  const { id } = req.params;
  const { campos } = req.query;

  if (campos)
    return res.send({
      joya: joyasFieldQuery(joya(id), campos.split(",")),
    });
  joya(id)
    ? res.send({ joya: joya(id) })
    : res.status(404).send({ error: "joya no encontrada" });
};

export { hateoas, joyasCategory, joyasFieldControl };
