import { joyasQueryHateoas } from "../queries/queries.js";

const hateoas = (req, res) => {
    const result = joyasQueryHateoas();
    res.send(result)
}

export {
    hateoas
}