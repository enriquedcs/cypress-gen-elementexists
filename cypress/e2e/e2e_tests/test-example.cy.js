import config from './config.json'
import MainPage from '../../page-objects/components/MainPage'

describe('Elements Exist', () => {
   
    it('Elements exist accross the pages', () =>{
     
        cy.visit(`${config.URL2}`)
        cy.on('window:confirm', cy.stub().as('confirm'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
        return false
        })

        //Element Exists
        cy.get('body')
            .then($body => {
                if ($body.find('.flex-md-nowrap .search-category').length) {
                    return '.flex-md-nowrap .search-category';
            }
            return '.dropdown';
            })
            .then(selector => {
            cy.get(selector)
        })

        //Element is visible
        cy.get('.flex-md-nowrap .search-category')
            .then($body => {
            if ($body.is(':visible')) {
                cy.get('.flex-md-nowrap .search-category').click()
            } 
            else{
                return
            }
        })

        //Improve Method Find Search Button
        MainPage.elExists('.type-text')    
    

    })

    it('Element is visible accross the pages', () =>{
     
        cy.visit(`${config.URL2}`)
        cy.on('window:confirm', cy.stub().as('confirm'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
        return false
        })

        //Element is visible
        cy.get('.flex-md-nowrap .search-category')
            .then($body => {
            if ($body.is(':visible')) {
                cy.get('.flex-md-nowrap .search-category').click()
            } 
            else{
                return
            }
        })
    

    })

})