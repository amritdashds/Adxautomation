class Portalset
{
clickportals() 
{
    cy.get('a[href="/portal-settings"]').click()
}
ClickEmail()   
{
    cy.contains('Configure Email Template').click();
    cy.get('img[src="assets/images/back-arrow.svg"]').click(); 
}
clickservicelevel()
{
    cy.get('/portal-settings/service-level/set').click();
    cy.get("//img[@src='assets/images/back-arrow.svg']").click();
}
clickinternalusers()
{
    cy.get('a[href="/manage-users/internal-users"]').click() 
    cy.get("//img[@src='assets/images/back-arrow.svg']").click(); 
}
Clickdocuments()
{
    cy.get('a[href="/documents"]').click() 
    cy.get("//img[@src='assets/images/back-arrow.svg']").click();     
}
Clickemail()   
{
    cy.get('a[href="/email-history"]').click() 
}
Clickclients()           
{
    cy.get('a[href="/clients"]').click()
}
Clickpayments()   
{
    cy.get('a[href="/payment-history"]').click()  
}     
clickHelp()         
{
    cy.get('a[href="/helpandsupport"]').click()
}
scrollit()  
{
    cy.get('.main-sidebar.main-sidebar-new.d-flex.flex-column').scrollTo('bottom') 
}              
clickaccount()
{
    cy.get('a[href="/account/my-account"]').click() 
}
clickbusiness()
{
    cy.get('a[href="/manage-business-account"]').click()
}  
  }
export default Portalset;