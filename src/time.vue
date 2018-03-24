<template>
    <div id="board">
           <span id="time"> {{min}}:{{sec}}</span>
           <br>      
    <button id="startB" class="buttons" @click ='StartButtonAction' >{{startButtonvalue}}</button>
    <button id="stopB" class="buttons" @click ='StopButtonAction'>{{stopButtonvalue}}</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      min: 10,
      sec: 45,
      interval: "",
      isGoing: true,
      startButtonvalue: "Start",
      stopButtonvalue: "Stop"
    };
  },
  methods: {
    startTime() {
      this.interval = setInterval(() => {
        if (this.sec <= 0 && this.min > 0) {
          this.sec = 60;
          this.min--;
        }
        if (this.sec == 1 && this.min == 0) {//sec=1 cause it will be decremented
          location.reload();
        }

        this.sec--;
      }, 1000);
    },
    stopTime() {
      clearInterval(this.interval);
    },
    StartButtonAction() {
      if (this.isGoing == true) {
        this.startTime();
        this.isGoing = !this.isGoing;
        this.startButtonvalue = "Pause";
        this.stopButtonvalue = "Stop";
      } else {
        this.stopTime();
        this.isGoing = !this.isGoing;
        this.startButtonvalue = "Start";
        this.stopButtonvalue = "Done";
      }
    },
    StopButtonAction() {
      location.reload();
    }
  }
};

</script>



<style scoped>
#board {
  color: black;
  font-size: 60px;
  height: 200px;
  background-color: yellow;
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
  border-radius: 50px;
  width: 1024px;
  color: white;
  margin-left: auto;
  margin-right: auto;
}
.elements {
  height: 200px;
  background-color: yellow;
  text-align: center;
  font-size: 50px;
  margin-top: 100px;
  border-radius: 50px;
  width: 1024px;
  color: white;
  margin-left: auto;
  margin-right: auto;
}
.buttons {
  width: 200px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.87);
  display: inline-block;
  margin: 0 20px;
  background: #3bdf00;
  border: 2px solid rgba(33, 68, 72, 0.59);
  color: white;
  border-radius: 30px;
  cursor: pointer;
}
</style>
