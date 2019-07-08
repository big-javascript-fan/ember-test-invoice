module.exports = function(app, db){
 
    var fields = ["id", "amount", "createdDate"];
 
    console.log("Registering endpoint: /invoices");
 
    app.get('/api/invoices', function(req, res){
        console.log("get all rows");
        db.all("SELECT " + fields.join(", ") + " FROM invoices", function(err, rows) {
            return res.send({ invoice: rows} );
        });
    });

    app.get('/api/invoices/:id', function(req, res) {
        console.log("get one rows");
        var id = req.params.id;
        db.all("SELECT * FROM invoices where rowid=" + id, function(err, rows) {
            return res.send({ invoice: rows });
        });
    });

    app.post('/api/invoices', function(req, res) {
        console.log("insert rows");
        var {invoice} = req.body;
        var sql = 'INSERT INTO invoices(amount, createdDate) VALUES(' + invoice.amount + ', "' + invoice.createdDate +'")';

        db.run(sql, function(err) {
            return res.send({invoice: {id: this.lastID}});
        });
    });

    app.put('/api/invoices/:id', function(req, res) {
        console.log("update rows");
        var { invoice } = req.body;
        var id = req.params.id;

        var sql = 'UPDATE invoices SET amount='+ invoice.amount+', createdDate='+invoice.createdDate+' WHERE rowid=' + invoice.rowid;
        db.run(sql, function(err) {
            return res.send({invoice: {id: this.lastID}});
        });
    });

    app.delete('/api/invoices/:id', function(req, res) {
        console.log("delete one rows");
        var id = req.params.id;
        db.run('DELETE FROM invoices WHERE rowid=' + id, function(error) {
            return res.send(true);
        });
    });
}