//components unit testing using angular js testing

describe('access RetragereDoc testing', function () {

  it('access RetragereDoc adresses', function () {
  });
  it('check access RetragereDoc adresses', function () {
  });

});

describe("Unit Tests", function () {

  beforeEach(angular.mock.module('front-end'));

  it('RetragereDocControl Controller', function () {
    expect(app.components.retragereDoc).toBeDefined();
  });

  it('must have a RetragereDoc service', inject(['Services',
    function (Services) {
      expect(Services.isValidAdress).not.to.equal(null);


      var AdressIsOk
      [0] = 'http://localhost:9666/app/document';
      /* this is how it should look like */

    }])
  );
});
