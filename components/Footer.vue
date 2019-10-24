<template>
    <footer>
      <div id="info-icon">
        <a href="#"><img src="@/assets/icon-login/facebook-f.svg"></a>
        <a href="#"><img src="@/assets/icon-login/twitter.svg"></a>
        <a href="#"><img src="@/assets/info/instagram.svg"></a>
        <a href="#"><img src="@/assets/icon-login/linkedin-in.svg"></a>
        <a href="#"><img src="@/assets/UNI.svg"></a>
      </div>
      <div id="info-uni">
        <p><span><Table>Telefóno</Table> :</span>8565 1485</p>
        <p><span>Dirección :</span> Entrada a La Tunoza, Antigua Hacienda el Higo, Estelí, Nicaragua.</p>
      </div>
    </footer>
</template>
<style scoped>
footer {
  margin-top: 100px;
  width: calc(100vw - 40px);
  height: 200px;
  background: linear-gradient(45deg, #5700e2, #0b69ff);
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

footer {
  display: inline-block;
  height: auto;
}

footer > #info-uni {
  width: 250px;
  padding: 0;
  padding-left: 30px;
  padding-bottom: 50px;
}
 
}
</style>