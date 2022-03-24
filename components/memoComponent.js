Vue.component('memo-component',{
   
    props :['id','title'],//부모로부터값받아오기 v-bind속성값바꿔줌 속성의값을 vue인스턴스에있는 data에 메모리스트에 id값으로 바꿔줌
   
    template:`
    <div>
        <h3>
        <button @click="deletememo">X</button></h3>
        
        <!--메모내용 슬로위치지정가능 time밑이 두면 메모가 타임밑으로 감-->
        <slot></slot>
        <hr></hr>
        <p>{{dayNum}}</p>

    </div>
    `,
    data :function (){
    
        return{
            
            time: new Date()
        
        }
    },
    computed: {
        // 계산된 getter
        dayNum : function() {
            
            return this.time.getFullYear()+'년'+
            (this.time.getMonth()+1)+'월' +this.time.getDate()+'일'

          }
      
    },
    methods : {
        deletememo: function () {
            //delete라는 이벤트만들어주고 
            this.$emit("delete",this.id);
        }
    }
  
   
})

