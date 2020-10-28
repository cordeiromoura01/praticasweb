module.exports = app => {

    app.get('/usuario', (req, res) =>
      res.send('Get novo Agendamento Fujioka')
    )
  
    app.post('/usuario', (req, res) => {
      console.log(req.body);
      res.send('Post novo Agendamento Fujioka')
    })
  
  }
  