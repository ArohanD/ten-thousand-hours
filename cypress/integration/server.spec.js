const server = 'localhost:3000'

describe('Server Tests', () => {
  it('Is able to add new items to the DB', () => {
    cy.visit(server)

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
})