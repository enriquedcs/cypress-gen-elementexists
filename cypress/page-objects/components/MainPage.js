export default class MainPage {

    static elExists(text){
        cy.get('body')
            .then($body => {
                if ($body.find(text).length) {
                    return 'text'
            }
            return '.both.text-reset'
            })
            .then(selector => {
            cy.get(selector)
        })
    }

    static elVisible(text){
        cy.get(text)
            .then($body => {
            if ($body.is(':visible')) {
                cy.get(text).click()
            } 
            else{
                return
            }
        })
    }
}