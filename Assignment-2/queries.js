const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CarDetails',
  password: '12345678',
  port: 5432,
})


const getUsers = (request, response) => {
  pool.query('SELECT car.id ,car."Name" ,make."MakeName" ,model."ModelName" FROM ((car INNER JOIN make ON car.makeid = make.id)INNER JOIN model ON car.modelid = model.id)', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT car.id ,car."Name" ,make."MakeName" ,model."ModelName" FROM ((car INNER JOIN make ON car.makeid = make.id)INNER JOIN model ON car.modelid = model.id) where car.id = $1;', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
  getUserById,
  // createUser,
  // updateUser,
  // deleteUser,
}
