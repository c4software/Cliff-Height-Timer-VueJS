<template>
  <v-container class="middle-centered deep-purple lighten-1">
    <div class="home">
      <h1>{{ time }} s</h1>
      <h3>{{ m }} m</h3>
      <h3>{{ ft }} ft</h3>
    </div>

    <v-btn v-on:click="action" v-bind:class="state_class" dark fixed bottom right fab>
        <v-icon>{{ state_icon }}</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
    name: 'home',
    data: () => {
        return {
            running: false,
            time: 0,
            m: "0",
            ft: "0"
        }
    },
    computed:{
      state_icon() {
          if(this.running){
              return "stop";
          }else{
              return "play_arrow";
          }
      },
      state_class() {
          if(this.running){
              return "red";
          }else{
              return "green";
          }
      }
    },
    methods:{
        action(){
            this.start = new Date().getTime();

            if (!this.running){
                this.running = true;
                this.timerId = setInterval(() => {
                    this.compute();
                }, 10);
            }else{
                this.running = false;
                clearInterval(this.timerId);
                this.saveHistory({time: this.time,m: this.m,ft: this.ft});
            }

        },
        saveHistory(item){
          let history = JSON.parse(localStorage.getItem("history"));
          if (!Array.isArray(history)){
            history = [];
          }
          history.unshift(item);
          localStorage.setItem("history", JSON.stringify(history));
        },
        compute(){
            let fallTime = new Date().getTime() - this.start;
            let height = 16*Math.pow((fallTime/1000), 2);
            let numberDigits = 1;
            if(height < 1){
                numberDigits = 2;
            }

            this.time   = (fallTime/1000).toFixed(2);
            this.ft     = height.toFixed(numberDigits);
            this.m      = (height/3.2808).toFixed(numberDigits);
        }
    }
}
</script>

<style scoped>
  .home{
    text-align: center;
  }
  .home > h1, .home > h2, .home > h3 {
    color: white;
  }
</style>
