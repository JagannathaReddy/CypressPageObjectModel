class mainPage{
    getInputFields(){
        return cy.get(".card-footer-item[href='/edit']");
    }
}
export default new  mainPage;
