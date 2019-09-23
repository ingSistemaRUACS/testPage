<template>
  <div class="card">
    <div id="pad"></div>
    <img id="thumbnail" src="@/assets/landscape.png" alt="ImagenNoticia">

    <div id="stats">
      <a href="#"><span id="like-count"><span id="like-num">10</span> Me gustas</span></a> |
      <a href="#"><span id="com-count"><span id="com-num">2</span> Comentarios</span></a>
    </div>
    <div id="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repellendus autem doloremque libero non voluptas amet esse saepe,
      temporibus, in fugit ipsum voluptatibus soluta, aliquam debitis
      laborum sunt voluptatum voluptate ea.
    </div>
  </div>
</template>

<script>
export default {

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
}

#thumbnail{
  width: 100%;
  /* height: 200px; */
  background: rgb(184, 184, 184);
}

#stats{
  margin: 5px;
  font-size: 0.9em;
  color: #777777;
}

#description{
  padding: 10px;
  min-height: 100px;
}

</style>
