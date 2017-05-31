//components unit testing using angular js testing

describe('access LicentaDoc testing', function () {

  it('access LicentaDoc adresses', function () {
  });
  it('check access LicentaDoc adresses', function () {
  });

});

describe("Unit Tests", function () {

  beforeEach(angular.mock.module('front-end'));

  it('LicentaDocControl Controller', function () {
    expect(app.components.licentaDoc).toBeDefined();
  });

  it('must have a LicentaDoc service', inject(['Services',
    function (Services) {
      expect(Services.isValidAdress).not.to.equal(null);


      var AdressIsOk
      [0] = 'http://localhost:9666/app/document';
      /* this is how it should look like */

    }])
  );
});
