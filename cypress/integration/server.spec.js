const server = 'localhost:3000'

//TODO: add verification tests

describe('Server Tests', () => {
  it('Is able to add new items to the DB', () => {

    const options = {
      url: `${server}/addLog?user=${'cypress'}&log_name=${'biting humans'}&remaining=${10000}`,
      method: 'POST'
    }
    cy.request(options)

    cy.request(`${server}/userLogs?user=cypress`).then((res) => {
      const { user, log_name, remaining } = res.body[0];
      expect(user).to.eql('cypress')
      expect(log_name).to.eql('biting humans')
      expect(remaining).to.eql(10000)
    })
  })

  it('Is able to retrieve the time remaining for a single log', () => {
    cy.request(`${server}/userLogs?user=cypress`)
    .then((res) => {
      const { log_id } = res.body[0];
      return cy.request(`${server}/logHours?id=${ log_id }`)
    })
    .then((res) => {
      expect(res.body[0].remaining).to.eql(10000)
    })
  })

  it('Is able to retrieve all the logs from a given user', () => {
    const postOptions = {
      url: `${server}/addLog?user=${'cypress'}&log_name=${'scratching the couch'}&remaining=${9000}`,
      method: 'POST'
    }
    cy.request(postOptions)

    const getOptions = {
      url: `${server}/userLogs?user=${'cypress'}`,
      method: 'GET'
    }
    cy.request(getOptions)
    .then((res) => {
      const logs = res.body;
      expect(logs[0].log_name).to.eql('biting humans')
      expect(logs[1].log_name).to.eql('scratching the couch')
    })

  })

  xit('Should modify hours in a log')
  xit('Should delete a log on request')

  it('Clearing test data', () => {
    cy.request(`${server}/clearTests`)
  })


})