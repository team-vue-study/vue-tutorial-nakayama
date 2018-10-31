var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!'
    }
});

var app2 = new Vue({
    el:'#app-2',
    data: {
        message:new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el:'#demo',
    data:{
        test:"test1"
    }
})

var app4 = new Vue({
    el:'#app-4',
    data: {
        todos: [
            { text:'test1'},
            { text:'test2'},
            { text:'test3'}
        ]
    }
})

var app5 = new Vue({
    el:'#app-5',
    data:{
        results: [
            { text: '1' }
        ]
    },
    methods: {
        plus: function() {
            var i = this.results.length + parseInt('1');
            var a = { text:i };
            console.log(this.results)
            this.results.push(a);
        }
    }
})

Vue.component('todo-item', {
    props:['number','mark'],
    template:'<div>{{ number }}:{{ mark }}</div>'
})

const DataComp = {
    data: ()=> {
        return {
            number:8,
            mark:"heart"
        }
    }
}

var app6 = new Vue({
    el:'#app-6',
    component:{
        'data-component':DataComp
    }
})

Vue.component('card-comp',{
    props: ['card'],
    template:'<div>{{ card.num }}:{{ card.mark }}</div>'
})

var takeCard = new Vue({
    el: '#take-card',
    data:{
        card:{
            num:1,
            mark:"heart"
        }
    },
    methods:{
        takeCard:function(){
            this.card.num = 2
            this.card.mark = "spade"
        }
    }
})
