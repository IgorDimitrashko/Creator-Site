var MAINET_RPC_URL = 'https://mainnet.infura.io/metamask' ;
var ROPSTEN_RPC_URL = 'https://ropsten.infura.io/metamask' ;
var KOVAN_RPC_URL = 'https://kovan.infura.io/metamask' ;
var RINKEBY_RPC_URL = 'https://rinkeby.infura.io/metamask' ;

var CURRENT_URL = ROPSTEN_RPC_URL ;

$( document ).ready(function() {
    web3 = new Web3(new Web3.providers.HttpProvider(CURRENT_URL));

    var wallet = '0xCA95a8AF80F9EE59c12E3509DE363dbBD512669f' ;

   getBalance(wallet) ;


    function getBalance(address) {
        if (address.length <= 3) {
            alert("Wallet address is incorrect") ;
            return 0 ;
        }

        web3.eth.getBalance(address, function(error, result){
            console.log('yes') ;
            if(!error) {
                balance = result.toString(10) ;
                setBalance(balance) ;
            } else {
                alert('Some error happens. Please, try again.') ;
                console.error(error);
            }
        });
    }

    function setBalance(wei) {
        eth = web3.fromWei(wei, 'ether') ;
        $('#balance').html(eth) ;
    }
});