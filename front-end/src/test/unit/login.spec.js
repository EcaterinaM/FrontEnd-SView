//components unit testing using angular js testing

describe('login page testing', function () {

  it('invalid e-mail adresses', function () {
  });
  it('check valid e-mail adresses', function () {
  });
  it('check invalid password ', function () {
  });
  it('check valid password', function () {
  });
  it('corectly submitting', function () {
  });

});

describe("Unit Tests", function () {

  beforeEach(angular.mock.module('front-end'));

  it('LoginControl Controller', function () {
    expect(app.components.login).toBeDefined();
  });

  it('must have a login service', inject(['Services',
    function (Services) {
      expect(Services.isValidEmail).not.to.equal(null);


      var EmailIsOk
      [0] = 'alinapopescu@info.uaic.ro';
      /* this is how it should look like */
      +
      var EmailIsOk
      [1] = 'simina.covatariu@gmail.com';



    }])
  );
});
