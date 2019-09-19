<template>
  <div class="class">
    <div class="TitleContainer">
      <img class="logoClass" src="@/assets/book-open.svg"/>
      <h1>{{ info.name }}</h1>
      <h3>Semestre {{ info.semester }}</h3>
      <h3>Año {{ info.year }}</h3>
      <img class="IconExtend" src="@/assets/sort-down.svg" />
    </div>
    <div class="InfoCOntainer">
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
export default {
  props: {
    info: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
