var app = new Vue({
    el: '#app',
    data: {
      mailListRandom: [],
    },
    mounted(){
        const self = this;
        
        for(let i = 0; i < 10; i++){
        
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function(emailGen){
            
            self.email = emailGen.data.response;
            
            self.mailListRandom.push(self.email);

        });

        }

    }
});