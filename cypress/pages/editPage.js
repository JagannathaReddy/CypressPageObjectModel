class editPage{
    getFullName(){
        return cy.get("#fullName");
    }
    getAppendText(){
        return cy.get("#join");
    }

    getInsideTextBox(){
        return cy.get("#getMe");
    }

}

export default new editPage;