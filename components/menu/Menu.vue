<template>
  <div id="menu-cont">
    <div id="menu">
      <a href="#">₪</a>
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
        @change="toggleVisible"><span id="arrow">➪</span></label>
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
}

#resp-button{
  display: none;
  width: 40px;
  height: 40px;
  background: #007be0a1;
  color: rgb(0, 0, 0);
  font-size: 1.5em;
  border-radius: 5px;
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
  height: 200px;
  background: #979797;
  transform: translate(-55px);
  color: #fff;
  text-align: center;
  font-size: 2em;
  border-radius: 5px 0 0 5px;
  transition: transform 0.5s ease;
}

#menu>a{
  transform: rotate(-90deg);
  transition: color ease 0.25s;
}

#menu>a:hover{
  color: rgb(40, 39, 61);
}

@media(max-width: 820px) {
  #resp-button{
    display: flex;
    margin-left: 10px;
  }

  #resp-button:active{
    background: #fff;
  }

  #menu{
    display: none;
  }

  #menu.displayed{
    display: flex;
    transform: translate(5px);
    border-radius: 0 5px 5px 0;
    opacity: 0.7;
  }

  #menu.displayed+#resp-button #arrow{
    transform: rotate(180deg);
  }
}
</style>
