<template>
  <section id="info">
    <div class="container-info"> 
      <img class="icon" src="../../assets/info/lightbulb.svg" alt="" />
      <h1>Tituto del apartado</h1>
      <p>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
    <div class="container-info">
      <img class="icon" src="../../assets/info/glasses.svg" alt="" />
      <h1>Tituto del apartado</h1>
      <p>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
    <div class="container-info">
      <img class="icon" src="../../assets/info/university.svg" alt="" />
      <h1>Tituto del apartado</h1>
      <p>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
    <footer>
      <div id="info-icon">
        <a href="#"><img src="@/assets/icon-login/facebook-f.svg"></a>
        <a href="#"><img src="@/assets/icon-login/twitter.svg"></a>
        <a href="#"><img src="@/assets/info/instagram.svg"></a>
        <a href="#"><img src="@/assets/icon-login/linkedin-in.svg"></a>
        <a href="#"><img src="@/assets/UNI.svg"></a>
      </div>
      <div id="info-uni">
        <p><span>TelÃ©fono :</span> 8257-6035</p>
        <p><span>DirecciÃ³n :</span> Entrada a La Tunoza,Antigua Hacienda el Higo, EstelÃ­, Nicaragua.</p>
      </div>
    </footer>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  methods:{
    ...mapMutations(['ChangePresent'])
  },
  beforeMount(){
    this.ChangePresent({
      title:'¿Qué es la Ingeniería de Sistema?',
      info:'Es la ingeniería que se encarga del diseño, la programación, la implantación y el mantenimiento de sistemas. A diferencia de otras especialidades, esta disciplina no se ocupa de productos tangibles sino de productos lógicos.',
      img:'presentHome.svg'})
  }
}
</script>
<style scoped>
.container-info {
    width:400px;
    height: 400px;
    margin: 20px auto;
    padding: 50px;
    background: #474747;
    color: #ffffff;
    box-shadow: 0px 0px 5px 2px rgb(147, 147, 147);
}

.container-info > .icon {
    width:60px;
    margin: 10px 0;
}

.container-info > h1 {
    font-size: 1.4em;
    border-top: solid #ffffff 2px;
    padding: 10px 0;
    margin-bottom: 0;
}

.container-info > p {
    font-size: 1em;
}

footer {
  margin-top: 100px;
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, #8100e2, #690bff);
  display: grid;
  grid-template-columns: 1fr 300px;
}

footer > div > a > img {
  height: 30px;
  margin: 30px 10px;
}

footer > div {
  font-size: 1em;
  color: #ffffff;
}
footer > div > p > span {
  font-weight: bold;
}

footer > #info-icon {
  padding: 10px 20px;
}

footer > #info-uni {
  padding: 30px 10px;
}

@media screen and (max-width: 650px) {

.container-info {
    width:70%;
    margin: 20px 5%;
    height: auto;
    padding: 10%;
}


footer {
  display: inline-block;
  height: auto;
}

footer > #info-uni {
  width: 300px;
  padding: 0;
  padding-left: 30px;
  padding-bottom: 50px;
}
 
}

</style>