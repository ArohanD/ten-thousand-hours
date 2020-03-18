//Server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//DB
const dbConfig = require('../config.js')
const knex = require('knex')(dbConfig)

//Routes

/* 
TODO:
Add row to table
Get count via hourLogID
Get counts via user
Modify count 
Change date
Delete row

Notes:
Must first check that the log being modified belongs to the currently logged in user.
*/

app.use(express.static('dist'));

// ADD ROW TO TABLE
app.post('/addLog', (req, res) => {

  const { user, log_name, remaining } = req.query

  knex('hour_logs').insert({
    user: user,
    log_name: log_name,
    remaining: remaining
  })
    .then(() => {
      res.end(`Row added to table for log ${log_name}`)
    })
    .catch(res.end)

})

// Get count of log
app.get('/logHours', (req, res) => {

  knex.select('remaining').from('hour_logs').where({
    log_id: +req.query.id
  })
    .then((result) => {
      res.send(result);
    })
    .catch(res.end)
})

// Get user logs
app.get('/userLogs', (req, res) => {
  knex.select().from('hour_logs').where({
    user: req.query.user
  })
    .then((result) => {
      res.send(result);
    })
    .catch(res.end)
})

// Verify
// Check if user in query matches user who owns log id needing change
const verifyUser = async (req, log_id) => {
  let rows = await knex.select('user').from('hour_logs').where({
    log_id: +log_id
  })
  return rows.length >= 1 ? rows[0].user === req.query.user : false;
}

// Tests
// let dummyReq = {query: {user: 'mark'}}
// verifyUser(dummyReq, 2).then(console.log)

// Modify Count
app.patch('/modifyCount', (req, res) => {
  verifyUser(req, req.query.log_id)
    .then((veri) => {
      if (!veri) {
        res.status(401).send('Unable to authorize request')
      } else {
        knex('hour_logs')
          .where({ log_id: +req.query.log_id })
          .update({ remaining: +req.query.new_value })
          .then(() => {
            res.end(`Record ${req.query.log_id} was updated`)
          })
          .catch((err) => res.end(err.toString()))
      }
    })
})




// ROUTER (add new routes above)
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`listening from port: ${port}`));