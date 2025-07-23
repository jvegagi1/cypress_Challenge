import registerData from '../fixtures/data.json';
import loginSelectors from '../support/elements/login-elements'
//const path = 'login';

beforeEach(() => {
  cy.fixture('data').as('userData');
  cy.visit('/auth/login');
});

describe('Login Test Scenario', () => {
  it('Successful Login : ', function () {
  cy.get(loginSelectors.EMAIL).type(this.userData.validUser.email);
  cy.get(loginSelectors.PASSWORD).type(this.userData.validUser.password);
  cy.wait(5000);
  cy.get(loginSelectors.LOGIN_BUTTON).click();
  cy.wait(5000);
  cy.get(loginSelectors.MICUENTA).should('be.visible')
  });

  it('Invalid Login : ', function () {
  cy.get(loginSelectors.EMAIL).type(this.userData.invalidUser.email);
  cy.get(loginSelectors.PASSWORD).type(this.userData.invalidUser.password);
  cy.wait(5000);
  cy.get(loginSelectors.LOGIN_BUTTON).click();
  cy.wait(5000);
  cy.get(loginSelectors.POPUP).should('be.visible');
  cy.get(loginSelectors.XMARK).should('be.visible');
  cy.get(loginSelectors.POPUP_TITLE).should('be.visible').and('contain.text',"Error");
  cy.get(loginSelectors.MENSAJE).should('be.visible').and('contain.text',"No pudimos iniciar sesión con estas credenciales. Intenta de nuevo.");
  cy.get(loginSelectors.CTA_POPUP).should('be.visible').and('contain.text',"Volver");
  });

  it('Forgot Password valid : ', function () {
  cy.get(loginSelectors.FORGOT).click();
  cy.get(loginSelectors.POPUP).should('be.visible');
  cy.get(loginSelectors.POPUP_TITLE).should('be.visible').and('contain.text',"Ingresa tu dirección email");
  cy.get(loginSelectors.POPUP_INPUT).type(this.userData.validUser.email);
  cy.get(loginSelectors.CTA_POPUP).should('be.visible').and('contain.text',"Recuperar contraseña");
  cy.get(loginSelectors.CTA_POPUP).click();
  cy.get(loginSelectors.POPUP).should('be.visible');
  cy.get(loginSelectors.POPUP_TITLE).should('be.visible').and('contain.text',"Token enviado");
  cy.get(loginSelectors.MENSAJE).should('be.visible').and('contain.text',"Revisa tu correo para recuperar tu contraseña");
  cy.get(loginSelectors.CTA_POPUP).should('be.visible').and('contain.text',"OK");
  });


  it('Forgot Password invalid : ', function () {
  cy.get(loginSelectors.FORGOT).click();
  cy.get(loginSelectors.POPUP).should('be.visible');
  cy.get(loginSelectors.POPUP_TITLE).should('be.visible').and('contain.text',"Ingresa tu dirección email");
  cy.get(loginSelectors.POPUP_INPUT).type(this.userData.invalidUser.email);
  cy.get(loginSelectors.CTA_POPUP).should('be.visible').and('contain.text',"Recuperar contraseña");
  cy.get(loginSelectors.CTA_POPUP).click();
  cy.get(loginSelectors.POPUP).should('be.visible');
  cy.get(loginSelectors.POPUP_TITLE).should('be.visible').and('contain.text',"Ingresa tu dirección email");
  cy.get(loginSelectors.MENSAJE2).should('be.visible').and('contain.text',"Usuario no está en la base de datos Error: User not found");
  cy.get(loginSelectors.CTA_POPUP).should('be.visible').and('contain.text',"Recuperar contraseña");
  });

});