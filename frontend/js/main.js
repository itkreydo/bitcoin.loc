Vue.config.devtools = true;
var app = new Vue({
    el: '#app',
    data: {
        access: true,
        login: '',
        name: "Регистрация",
        private_key: '',
        public_key: '',
    },
    methods: {
        
        enterAction(){
            window.location.href = "account.php";
            
        }, 
        
        key_generation(){
            this.private_key = "3cm84c8334uc3c48839cmm34cm34";
            this.public_key = "rlrg455545g4gdfl45344bffgb5b";
            
        },

    }
});
