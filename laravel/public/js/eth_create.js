// var passphrase = randomString(15) ;
var accounts = new Accounts();
var newAccount = accounts.new(); //passphrase.value
// console.log(JSON.stringify(newAccount, null, 2));
console.log(newAccount.address);
console.log(newAccount.private);

$('#wname').val(newAccount.address) ;
$('#kname').val(newAccount.private) ;