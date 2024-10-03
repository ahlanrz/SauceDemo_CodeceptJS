Feature('checkout');

Scenario('TCC003-checkout',  ({ I }) => {

    I.amOnPage('/cart.html');

    I.click("//button[@id='checkout']");
    I.see("Checkout: Your Information");

    I.fillField('firstName', 'Ahlan');
    I.fillField('lastName', 'Rezki');
    I.fillField('postalCode', '14123');

    I.click("//input[@id='continue']");
    I.see('Checkout: Overview');

    I.click("//button[@id='finish']");
    I.see('Thank you for your order!');

    I.click("//button[@id='back-to-products']");

    }
);