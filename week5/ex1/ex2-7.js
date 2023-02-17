var app = new Vue({
    el: '#app',
    data: {
        number_runner: 0, // ค่าเริ่มต้นจะเป็น 0
        arrNum: [false,false,false,false,false,false],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        week: [
            {
                title: 'Sunday',
                color: '#ff0000'
            },
            {
                title: 'Monday',
                color: '#ffcc00'
            },
            {
                title: 'Tuesday',
                color: '#ff66ff'
            },
            {
                title: 'Wendesday',
                color: '#009933'
            },
            {
                title: 'Thursday',
                color: '#ff6600'
            },
            {
                title: 'Friday',
                color: '#3399ff'
            },
            {
                title: 'Saturday',
                color: '#9900ff'
            },
        ],
        counter: 0,
        classArr:['dropdown', 'is-active'],
        switch2:-1,
        madara:"Month Selection"
    },

    // *** SPOIL เนื้อหาสัปดาห์ถัด ๆ ไป***

    mounted() {
        // วนไปเรื่อย ๆ ทุก ๆ 1 วินาที
        setInterval(() => {
            // แสดงค่าหลักสุดท้ายของวินาที
            this.number_runner = new Date().getSeconds() % 6;
            
            if(this.number_runner == 0){
                this.arrNum[0] = true
                this.arrNum[5] = false
            }else{
                this.arrNum[this.number_runner-1] = false
                this.arrNum[this.number_runner] = true
            }
                
            
            
           
            
        }, 1000);
    },
    
})