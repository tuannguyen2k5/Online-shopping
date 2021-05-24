<template>
  <div class="slider">
    <ul class="slides" :style="{ left: -width * current + 'px' }">
      <li v-for="(slide, i) in slides" :key="i">
        <img :src="slide" alt="" />
      </li>
    </ul>
    <ul class="bullets">
      <li
        v-for="(slide, i) in slides"
        :key="i"
        @click="selectSlide(i)"
        v-html="i == current ? '&#9679;' : '&omicron;'"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        require("../assets/images/sliders/slide1.jpg"),
        require("../assets/images/sliders/slide2.jpg"),
        require("../assets/images/sliders/slide1.jpg"),
      ],
      current: 0,
      width: 1110,
      timer: 0,
    };
  },
  methods: {
    nextSlide: function () {
      this.current++;
      if (this.current >= this.slides.length) this.current = 0;
      this.resetPlay();
    },
    prevSlide: function () {
      this.current--;
      if (this.current < 0) this.current = this.slides.length - 1;
      this.resetPlay();
    },
    selectSlide: function (i) {
      this.current = i;
      this.resetPlay();
    },
    resetPlay: function () {
      clearInterval(this.timer);
      this.play();
    },
    play: function () {
      let app = this;
      this.timer = setInterval(function () {
        app.nextSlide();
      }, 2000);
    },
  },
  created: function () {
    this.play();
  },
};
</script>
<style scoped>
.slider {
  width: 1110px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.slider .slides {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transition: left 800ms;
  display: table;
}
.slider .slides > li {
  display: table-cell;
}
ul.slides > li > img {
  width: 1110px;
  max-width: inherit;
}

ul.bullets {
  width: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  margin: 0 0 10px 0;
}
ul.bullets > li {
  display: inline-block;
  padding: 0 5px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
}
</style>