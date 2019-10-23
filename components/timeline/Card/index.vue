<template>
  <div class="card">
    <div id="title-event">
      <img src="@/assets/option/calendar-alt.svg" id="icon-event">
      <h1>Evento</h1>
      <span>{{(new Date(date)).toLocaleDateString()}}</span>
    </div>
    <img id="thumbnail" src="@/assets/landscape.png" alt="ImagenNoticia">

    <div id="stats">
      <a href="#"><span id="like-count"><span id="like-num">10</span> Me gustas</span></a> |
      <a href="#"><span id="com-count"><span id="com-num">2</span> Comentarios</span></a>
    </div >
    <div id="info-card">
      <nuxt-link :to="`/publications/${postId}`"><strong class="titl">{{ title }}</strong></nuxt-link>
      <div id="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'date',
    'title',
    'description',
    'postId'
  ]
}
</script>

<style scoped>
.card{
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 9px 9px -9px rgba(0, 0, 0, 0.57);
  font-size: 0.8em;
  transition: box-shadow 0.5s ease;
  box-sizing: border-box;
  background-color: #3d3d3d;
  overflow: hidden;
  color: white;
}

#title-event  {
  display:grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 7px 15px;
}

#title-event > #icon-event {
  width: 20px;
}
#title-event > h1 {
  display:inline-block;
  font-size: 1.4em;
  margin:0;
  margin-left: 15px;
}

#title-event > span {
  display:inline-block;
  color:#d6d6d6;
  font-size: 1.1em;
  margin:0;
}

.card:hover{
  transform: translate(-5, -5);
  box-shadow: 3px 13px 13px -9px rgba(0, 0, 0, 0.57);
}

#thumbnail{
  width: 100%;
  /* height: 200px; */
  background: rgb(184, 184, 184);
}

#stats{
  margin: 10px;
  font-size: 0.9em;
  color: #d4d4d4;
}

#info-card {
  width: 90%;
  margin: 10px 5%;
}

#description {
  min-height: 100px;
  margin-top: 10px;
}

</style>
