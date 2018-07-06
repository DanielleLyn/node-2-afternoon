module.exports={
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const{name,description,price,imageurl} = req.body;

    dbInstance.create_product([name,description,price,imageurl])
        .then( () => res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage: "Oops! error in create"});
        console.log(err)
        });
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');

    dbInstace.read_product([params.id])
        .then ( () => res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage: "oops! error in read"});
            console.log(err)
        });
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err=>{
            res.status(500).send({errorMessage: "oops! error in getall"});
            console.log(err)
        });

    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product([params.id, query.desc])
        .then( () =>res.sendStatus(200) )
        .catch(err=>{
            res.status(500).send({errorMessage: "oops! error in update"});
            console.log(err)
        })
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product([params.id])
        .then( () =>res.sendStatus(200) )
        .catch(err=>{
            res.status(500).send({errorMessage: "oops! error in delete"});
            console.log(err)
        })
    },

}