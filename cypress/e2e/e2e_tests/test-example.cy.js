import config from './config.json'
import MainPage from '../../page-objects/components/MainPage'

describe('Elements Exist', () => {
   
    it('Elements exist across the pages', () =>{
     
        cy.visit(`${config.URL3}`)
        cy.on('window:confirm', cy.stub().as('confirm'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
        return false
        })

        //Element Exists
        cy.get('body')
            .then($body => {
                if ($body.find('.compare-total').length) {
                    return '.compare-total'
            }
            return '.both.text-reset'
            })
            .then(selector => {
            cy.get(selector)
        })

        //Improve Element Exist Method
        MainPage.elExists('.content-products.entry-content.flex-grow-0.order-5.order-md-4 > div > div:nth-of-type(1)')    
    

    })

    it('Element is visible accross the pages', () =>{
     
        cy.visit(`${config.URL3}`)
        cy.on('window:confirm', cy.stub().as('confirm'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
        return false
        })

        //Element is visible
        //cy.get(`div:nth-of-type(1) > img[alt='iPod Nano']`)
        //    .then($body => {
        //    if ($body.is(':visible')) {
        //        cy.get(`div:nth-of-type(1) > img[alt='iPod Nano']`).click()
        //    } 
        //    else{
        //        return
        //    }
        //})

        //Improve Visible Method
        MainPage.elVisible(`div:nth-of-type(1) > img[alt='iPod Nano']`)

    })

})