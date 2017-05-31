//components unit testing using angular js testing

describe('access TransportDoc testing', function () {

  it('access TransportDoc adresses', function () {
  });
  it('check access TransportDoc adresses', function () {
  });

});

describe("Unit Tests", function () {

  beforeEach(angular.mock.module('front-end'));

  it('TransportDocControl Controller', function () {
    expect(app.components.transportDoc).toBeDefined();
  });

  it('must have a TransportDoc service', inject(['Services',
    function (Services) {
      expect(Services.isValidAdress).not.to.equal(null);


      var AdressIsOk
      [0] = 'http://localhost:9666/app/document';
      /* this is how it should look like */

    }])
  );
});
