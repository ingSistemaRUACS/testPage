<template>
  <div id="menu-cont">
    <div id="menu">
      <a href="#">₪</a>
      <a href="#">₪</a>
      <a href="#">₪</a>
      <a href="#">₪</a>
    </div>
    <label id="resp-button">
      <input
        type="checkbox"
        name="resp-button"
        id="rb"
        v-model="slideShown"
        @change="toggleVisible"><span id="arrow">❯</span></label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slideShown: false
    }
  },
  methods: {
    toggleVisible () {
      this.toggleClassDisplayed()
    },
    toggleClassDisplayed () {
      const menEl = document.querySelector('#menu')
      menEl.classList.toggle('displayed')
    }
  }
}
</script>

<style>
#menu-cont{
  display: flex;
  position: fixed;
  top: 60px;
  transform: translate(0, 5px);
  z-index: 1000;
}

#resp-button{
  display: none;
  width: 40px;
  height: 40px;
  background: #000000a1;
  color: rgb(255, 255, 255);
  font-size: 1.6em;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

#resp-button #arrow{
  transition: transform 0.5s ease;
}

#rb{
  display: none;
}

#menu{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50px;
  /* height: 200px; */
  background: #979797;
  transform: translate(-55px);
  color: #fff;
  text-align: center;
  font-size: 2em;
  border-radius: 2px 0 0 2px;
  transition: transform 0.5s;
}

#menu>a{
  transform: rotate(-90deg);
  transition: color ease 0.25s;
}

#menu>a:hover{
  color: rgb(40, 39, 61);
}

@media(max-width: 920px) {
  #resp-button{
    display: flex;
    margin-left: 10px;
  }

  #menu{
    display: none;
    background: #3f3f3f;
  }

  #menu.displayed{
    display: flex;
    transform: translate(5px);
    border-radius: 0 2px 2px 0;
    opacity: 0.7;
  }

  #menu.displayed+#resp-button #arrow{
    transform: rotate(180deg);
  }
}
</style>
