<template>
  <div class="middle-centered deep-purple lighten-1">
    <div class="home">

    </div>

    <v-fab-transition>
      <v-btn v-on:click="action" v-bind:class="state_class" dark fixed bottom right fab>
        <v-icon>{{ state_icon }}</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
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

            if (this.running === false){
                console.log("Start");
                this.running = true;
                this.timerId = setInterval(() => {
                    this.compute();
                }, 10);
            }else{
                console.log("Stop");
                this.running = false;
                clearInterval(this.timerId);
            }

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
</style>
