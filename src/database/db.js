const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
 db.serialize(() => {
    //criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
// `   
//     const values = [
//         "https://images.unsplash.com/photo-1536082839069-8e24be86021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Igreja Matriz",
//         "Luar do Sertão, Jd. Valo Velho",
//         "Número 260",
//         "São Paulo",
//         "Itapecerica da Serra",
//         "Alimentos, Roupas, Brinquedos, Remédios"
//     ]

//     function afterInsertData(err){
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

// db.run(query, values, afterInsertData)

   //consultar os dados da tabela
//    db.all(`SELECT name FROM places`, function(err, rows) {
//     if(err) {
//         return console.log(err)
//     }
//     console.log("Aqui estão os seus registros: ")
//     console.log(rows)
// })


    //deletar um dado da tabela

   //  db.run(`DELETE FROM places WHERE id = ?`, [6], function(err) {
   //      if(err) {
   //          return console.log(err)
   //      }
   //      console.log("Registro deletado com sucesso")
   //  })

 })