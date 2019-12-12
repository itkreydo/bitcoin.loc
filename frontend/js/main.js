Vue.config.devtools = true;
var app = new Vue({
    el: '#app',
    data: {
        access: true,
        login: '',
        name: "Регистрация",
        private_key: 'c56c65c4w345v6b65evv45c54',
        public_key: 'rtghtdreffr45g4g5j7i9ky7j7',
        balance: '0.00567 BTC'
    },
    methods: {
        enterAction(){
            window.location.href = "account.php";
            
        }, 
        
        generateKey(){
            this.private_key = "3cm84c8334uc3c48839cmm34cm34";
            this.public_key = "rlrg455545g4gdfl45344bffgb5b";
            
        },

    }
});
