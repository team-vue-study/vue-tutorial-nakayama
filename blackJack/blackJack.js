Vue.component('card-comp',{
    props: ['card'],
    template:'<div>{{ card.number }}:{{ card.mark }}</div>'
})

var takeCard = new Vue({
    el: '#take-card',
    data:{
        card:{},
        cards:[],
        cardNumber:[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "10",
            "10",
            "10"
        ],
        cardMark:[
            "♡",
            "♤",
            "♧",
            "♢"
        ]
    },
    methods:{
        takeCard:function(){
            var random = Math.random()
            var sheet = Math.floor( Math.random() * this.cards.length)            
            this.card = this.cards.splice(sheet,1)[0]
        },
        initCards:function(){
            for(var i = 0; i < this.cardNumber.length; i++){
                for(var j = 0; j < this.cardMark.length; j++){
                    this.cards.push({
                        number: this.cardNumber[i],
                        mark:this.cardMark[j]
                    })
                }
            }
        },
        plusCard:function(){
            
        }
    }
})