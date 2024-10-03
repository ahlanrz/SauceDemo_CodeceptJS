Feature('add_to_cart');

Scenario('TCC002-Add to Cart',  ({ I }) => {

    I.amOnPage('/inventory.html');
    // // I.loadCookie('sessionLogin');// Memuat cookie yang sudah disimpan
    // I.refreshPage(); // Segarkan halaman untuk menggunakan cookie

    // Test lanjutan dari halaman setelah login
    I.see('Products');

    I.click('#add-to-cart-sauce-labs-backpack'); //pilih item pertama
    I.click('#add-to-cart-sauce-labs-bike-light'); //pilih item kedua
    I.click('//*[@id="shopping_cart_container"]/a'); //click icon keranjang
    I.see('Your Cart');
}
);