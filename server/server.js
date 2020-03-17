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
Reduce count 
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


// ROUTER (add new routes above)
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`listening from port: ${port}`));