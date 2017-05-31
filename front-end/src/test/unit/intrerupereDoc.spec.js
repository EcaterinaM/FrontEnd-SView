//components unit testing using angular js testing

describe('access IntrerupereDoc testing', function () {

  it('access InrerupereDoc adresses', function () {
  });
  it('check access IntrerupereDoc adresses', function () {
  });

});

describe("Unit Tests", function () {

  beforeEach(angular.mock.module('front-end'));

  it('IntrerupereDocControl Controller', function () {
    expect(app.components.intrerupereDoc).toBeDefined();
  });

  it('must have a IntrerupereDoc service', inject(['Services',
    function (Services) {
      expect(Services.isValidAdress).not.to.equal(null);


      var AdressIsOk
      [0] = 'http://localhost:9666/app/document';
      /* this is how it should look like */

    }])
  );
});
