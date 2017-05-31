//components unit testing using angular js testing

describe('access SituatieDoc testing', function () {

  it('access SituatieDoc adresses', function () {
  });
  it('check access SituatieDoc adresses', function () {
  });

});

describe("Unit Tests", function () {

  beforeEach(angular.mock.module('front-end'));

  it('SituatieDocControl Controller', function () {
    expect(app.components.situatieDoc).toBeDefined();
  });

  it('must have a SituatieDoc service', inject(['Services',
    function (Services) {
      expect(Services.isValidAdress).not.to.equal(null);


      var AdressIsOk
      [0] = 'http://localhost:9666/app/document';
      /* this is how it should look like */

    }])
  );
});
