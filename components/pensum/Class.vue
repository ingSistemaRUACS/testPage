<template>
  <div class="class">
    <div class="TitleContainer">
      <div class="logoClass">
        <img src="@/assets/book-open.svg" />
      </div>
      <h1>{{ info.name }}</h1>
      <h3 class="Semestre">Semestre {{ info.semester }}</h3>
      <h3 class="Year">Año {{ info.year }}</h3>
      <div class="IconExtend" @click="openClick" v-click-outside="hide">
        <img
          :class="{ rotateIcon: open == true }"
          src="@/assets/sort-down.svg"
        />
      </div>
    </div>
    <div
      :class="{
        InfoCOntainer: open == true,
        InfoContainerCloase: open == false
      }"
    >
      <h2>Clases</h2>
      <h3>Prerrequisitos</h3>
      <ul class="listPrerequisites">
        <li v-for="(item, index) in info.prerequisites" :key="index">
          {{ item }}
        </li>
        <li v-if="info.prerequisites.length <= 0">No posee</li>
      </ul>
      <h3>Precedencia</h3>
      <ul class="listPrecedence">
        <li v-for="(item, index) in info.precedence" :key="index">
          {{ item }}
        </li>
        <li v-if="info.precedence.length <= 0">No posee</li>
      </ul>
    </div>
  </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
  props: {
    info: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    openClick () {
      this.open = !this.open
    },
    hide () {
      this.open = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>
<style scoped>
.class {
  position: relative;
  display: inline;
  background: #fff;
  margin: 0;
  -webkit-box-shadow: 3px 9px 9px -9px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 3px 9px 9px -9px rgba(0, 0, 0, 0.57);
  box-shadow: 3px 9px 9px -9px rgba(0, 0, 0, 0.57);
}
.class .TitleContainer {
  height: 60px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 15px 1fr;
  border-bottom: 1px solid #22222200;
  margin-bottom: 3px;
}

.TitleContainer .logoClass {
  background-color: #777777;
  width: 60px;
  height: 60px;
  grid-row: span 2;
  display: flex;
  align-items: center;
  margin: 0;
  padding-top: 5px;
}

.TitleContainer .logoClass img {
  width: 35px;
  margin: auto;
}

.rotateIcon {
  transform: rotate(180deg);
}

.TitleContainer .IconExtend {
  grid-column: 6 / 7;
  grid-row: span 2;
  display: flex;
  align-items: flex-end;
}

.TitleContainer .IconExtend img {
  width: 20px;
  margin: 0 auto;
}

.TitleContainer h1 {
  font-size: 0.9em;
  grid-column: 2/6;
  grid-row: 2/3;
  margin: 0;
  margin-left: 5px;
  color: #4b4b4b;
  display: flex;
  align-items: center;
}

.TitleContainer h3 {
  font-size: 0.7em;
  grid-row: 1;
  text-align: center;
  display: flex;
  align-items: flex-start;
  justify-items: center;
  margin: 0 auto;
  margin-top: 4px;
  color: #797979;
}

.TitleContainer .Semestre {
  grid-column: 3/5;
}

.TitleContainer .Year {
  grid-column: 5/6;
}

.class .InfoCOntainer {
  position: absolute;
  max-width: 330px;
  width: 100%;
  left: 0;
  background: #fff;
  height: 155px;
  border-top: solid #a3a3a3 1px;
  padding: 5px 10px;
  padding-bottom: 15px;
  z-index: 15;
}

.class .InfoContainerCloase {
  display: none;
}

.class .InfoCOntainer h2 {
  font-size: 1em;
  color: #4b4b4b;
}

.class .InfoCOntainer h3 {
  font-size: 0.8em;
  color: #696969;
}

.class .InfoCOntainer ul {
  width: 200px;
  font-size: 0.8em;
  color: #4e4e4e;
}

@media screen and (max-width: 768px) {

  .class .InfoCOntainer {
    position: relative;
    max-width: 90%;
    height: 165px;
    border-top: solid #a3a3a3 1px;
    padding: 10px;
  }
}

</style>
