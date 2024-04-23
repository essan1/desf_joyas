import { joyasQueryHateoas, joyasCategoryQueries } from "../queries/queries.js";

const hateoas = (req, res) => {
    const result = joyasQueryHateoas();
    res.send(result)
}


const joyasCategory = (req, res) => { 
    const { categoria } = req.params;
    const result = joyasCategoryQueries(categoria);
    res.send(result)
}


 

export {
    hateoas,
    joyasCategory
}