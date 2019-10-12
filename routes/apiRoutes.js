const db = require("../models");

module.exports = app => {
    app.post("/api/new", (request, response) => {
        const book = request.body;
        db.Book.create(book).then((inserted, error) => {
            if (error) {
                console.log(error);
                response.status(503).end();
            }
            console.log(inserted);
            response.status(200).end();
        })
    });

    app.post("/api/delete/:id", (request, response) => {
        db.Book.deleteOne({_id: request.params.id}).then(results => {
            response.status(200).end()
        }).catch(error => {
            console.log(error)
            response.status(503).end()
        })
    })

    app.get("/api", (request, response) => {
        db.Book.find({}).then(results => {
            response.json(results);
        }).catch(error => {
            console.log(error);
            response.status(503).end()
        })
    })

    return app
}