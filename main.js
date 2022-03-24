new Vue({
    el:"#app",
    data : {
        id: 0,//메모의 개인값을 알기 위함. 키값이 0부터나옴
        memo:'',//value값 자동나옴
        memolist : [],//[]""하면 메모나옴
        title : ''
        },//버튼누르면 메모리스트추가됨
    methods :{
        addMemo : function () {
            this.memolist.push({ memo:this.memo,id:this.id,title:this.title});//객체형태로 메모리스트에 넣어줌
            this.id++; //id추가할때마다 1씩증가해서 겹치는 값을 가지지않도록
            this.memo="";//value에 memo값 자동넣어짐
            this.title="";
        },
        deleteMemo :function (id) {
            //memolist의 아이디( inputvalu값)를 지움
            //배열안의 객체안의 아이디값
            let index = 0;
            //foreach구문: 배열의 요소값을 하나씩 함수에 넣어서 실행 
            this.memolist.forEach((element,i) => {//하난면적을시 요소값만요소두벉쨰는 인덱스값를이용해서 배열안의 객체지워지게
               //요소의 id와 가져온id 가동일하다면 index값 할당
                if (element.id == id){//요소id==이벤트id
                index = i;
               }
              
            });
            //원하는메모 x클릭시 요소한개삭제되게 
            this.memolist.splice(index,1);
        }
    }
   
})