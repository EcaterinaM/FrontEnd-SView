//components unit testing using angular js testing

describe('access DiplomaDoc testing', function () {

  it('access DiplomaDoc adresses', function () {
  });
  it('check DiplomaDoc adresses', function () {
  });

});

describe("Unit Tests", function () {

  beforeEach(angular.mock.module('front-end'));

  it('DiplomaDocControl Controller', function () {
    expect(app.components.diplomaDoc).toBeDefined();
  });

  it('must have a DiplomaDoc service', inject(['Services',
    function (Services) {
      expect(Services.isValidAdress).not.to.equal(null);


      var AdressIsOk
      [0] = 'http://localhost:9666/app/document';
      /* this is how it should look like */

    }])
  );
});
