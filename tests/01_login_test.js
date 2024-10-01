Feature('Login Test');

// Data untuk login (valid dan invalid)
const loginData = [
  { username: '', password: '', expectedResult: 'Epic sadface: Username is required', isValid: false }, //empty username, empty password
  { username: 'standard_user', password: '', expectedResult: 'Epic sadface: Password is required', isValid: false }, //valid username, empty password
  { username: '', password: 'secret_sauce', expectedResult: 'Epic sadface: Username is required', isValid: false }, //empty username, valid password
  { username: 'standard_user', password: 'coba2', expectedResult: 'Epic sadface: Username and password do not match any user in this service', isValid: false }, //valid username, wrong password
  { username: 'standard_', password: 'secret_sauce', expectedResult: 'Epic sadface: Username and password do not match any user in this service', isValid: false },// wrong username, valid password
  { username: 'standard_', password: 'coba2', expectedResult: 'Epic sadface: Username and password do not match any user in this service', isValid: false }, //wrong username, wrong password
  { username: 'standard_user', password: 'secret_sauce', expectedResult: 'Products', isValid: true }

];

Scenario('Test login dengan berbagai kredensial', ({ I }) => {
  // Looping untuk mencoba beberapa kombinasi login
  loginData.forEach((data) => {
    I.amOnPage('https://www.saucedemo.com/');
    I.wait(1);
    I.fillField('user-name', data.username);
    I.wait(1);
    I.fillField('password', data.password);
    I.wait(1);
    I.click('#login-button');
    I.wait(1);

    // I.wait(5);

    if (data.isValid) {
      // Jika login valid
      I.see(data.expectedResult); // Pesan yang diharapkan setelah login sukses
    } else {
      // Jika login invalid
      I.see(data.expectedResult); // Pesan error yang diharapkan setelah login gagal
    }
    // // Tambahkan logout jika diperlukan untuk mengulangi login
    // if (data.isValid) {
    //   I.click('Logout'); // Ganti dengan aksi logout yang sesuai di aplikasi kamu
    // }

    // Menyimpan cookies setelah login berhasil
    // I.saveCookie('sessionLogin');
    
  });

  
});
