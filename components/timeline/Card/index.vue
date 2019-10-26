<template>
  <div class="card">
    <nuxt-link :to="`/publications/${postId}`">
    <div id="title-event" v-if="esEvento">
      <img src="@/assets/option/calendar-alt.svg" id="icon-event">
      <h1>Evento</h1>
      <span>{{(new Date(date)).toLocaleDateString()}}</span>
    </div>
    <img id="thumbnail" :src="imgUrl || '@/assets/landscape.png'" alt="ImagenNoticia">

    <div id="stats">
      <a href="#"><span id="like-count"><span id="like-num">10</span> Me gustas</span></a> |
      <a href="#"><span id="com-count"><span id="com-num">2</span> Comentarios</span></a>
    </div >
    <div id="info-card">
    <strong class="titl">{{ title }}</strong>
      <div id="description">
        {{ description }}
      </div>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: [
    'date',
    'title',
    'description',
    'postId',
    'esEvento',
    'imgUrl'
  ]
}
</script>

<style scoped>
.card{
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: #b1b1b1 solid 0.3px;
  box-shadow: 0px 7px 28px 18px rgba(199, 199, 199, 0.171);
  border-radius: 5px;
  font-size: 0.8em;
  transition: box-shadow 0.5s ease;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
  color: #1d1d1d;
}

#title-event  {
  display:grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 7px 15px;
}

#title-event > #icon-event {
  width: 20px;
  opacity: 0.8;
}
#title-event > h1 {
  color:#5700e2b7;
  display:inline-block;
  font-size: 1.4em;
  margin:0;
  margin-left: 15px;
}

#title-event > span {
  display:inline-block;
  color:#9c9c9c;
  font-size: 1.1em;
  margin:0;
}

.titl {
   color:#2c2c2cd0;
}

.card:hover{
  transform: translate(-5, -5);
  box-shadow: 0px 7px 28px 2px rgba(179,179,179,1);
}

#thumbnail{
  width: 100%;
  /* height: 200px; */
  background: rgb(184, 184, 184);
   opacity: 0.9;
}

#stats{
  margin: 10px;
  font-size: 0.9em;
  color:#5700e2a4;
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
