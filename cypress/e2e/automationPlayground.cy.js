import editPage from "../pages/editPage";
import mainPage from "../pages/mainPage";
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://letcode.in/test');
mainPage.getInputFields().click();
editPage.getFullName().type("Jagannatha");
editPage.getAppendText().type("  Reddy");

editPage.getInsideTextBox().then((getText)=>{
  cy.log(getText.text());});

  })
})