<template>
  <main>
    <h1 id="pub-title">
      Una Publicacion Común
    </h1>
    <section id="pub-info">
      <span class="pub-detail" id="pub-author">Por: Luis Gonzalez</span> |
      <span class="pub-detail" id="pub-date">23 de Septiembre de 2019</span>
    </section>
    <div id="pub-content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore numquam quibusdam doloremque dolor rem eligendi dolorum iste reiciendis quidem. Et nostrum aliquam voluptatum a, illum vitae mollitia dignissimos eius, asperiores ad recusandae. Odio exercitationem dolore sapiente, cumque harum fuga nisi illo dicta, porro provident tempora ad totam aspernatur corrupti.</p>
      <img src="@/assets/landscape.png" alt="landscape">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore numquam quibusdam doloremque dolor rem eligendi dolorum iste reiciendis quidem. Et nostrum aliquam voluptatum a, illum vitae mollitia dignissimos eius, asperiores ad recusandae. Odio exercitationem dolore sapiente, cumque harum fuga nisi illo dicta, porro provident tempora ad totam aspernatur corrupti.</p>
      <h2>Primer titulo</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem quasi et maxime, similique vitae facere explicabo itaque modi molestias odio distinctio minus, harum velit hic ipsam nostrum fugit libero repudiandae porro placeat numquam nihil ratione earum. Temporibus deleniti quae sint cum neque non, nesciunt totam aliquam dolore recusandae repudiandae, laborum vero ducimus rerum voluptate ab unde ratione perferendis modi vel maxime quas! Perspiciatis corrupti ratione incidunt debitis dolores doloribus explicabo tempore voluptas minima similique, reiciendis aliquid deleniti, eos delectus illo. Perspiciatis similique fugiat quia, aut repellendus quisquam sunt corporis asperiores culpa mollitia ex odit ab error harum impedit dolorum!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem quasi et maxime, similique vitae facere explicabo itaque modi molestias odio distinctio minus, harum velit hic ipsam nostrum fugit libero repudiandae porro placeat numquam nihil ratione earum. Temporibus deleniti quae sint cum neque non, nesciunt totam aliquam dolore recusandae repudiandae, laborum vero ducimus rerum voluptate ab unde ratione perferendis modi vel maxime quas! Perspiciatis corrupti ratione incidunt debitis dolores doloribus explicabo tempore voluptas minima similique, reiciendis aliquid deleniti, eos delectus illo. Perspiciatis similique fugiat quia, aut repellendus quisquam sunt corporis asperiores culpa mollitia ex odit ab error harum impedit dolorum!</p>
      <img src="@/assets/logo-ls.png" alt="LOGO_LS">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore numquam quibusdam doloremque dolor rem eligendi dolorum iste reiciendis quidem. Et nostrum aliquam voluptatum a, illum vitae mollitia dignissimos eius, asperiores ad recusandae. Odio exercitationem dolore sapiente, cumque harum fuga nisi illo dicta, porro provident tempora ad totam aspernatur corrupti.</p>
      <h2>Segundo titulo</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore numquam quibusdam doloremque dolor rem eligendi dolorum iste reiciendis quidem. Et nostrum aliquam voluptatum a, illum vitae mollitia dignissimos eius, asperiores ad recusandae. Odio exercitationem dolore sapiente, cumque harum fuga nisi illo dicta, porro provident tempora ad totam aspernatur corrupti.</p>
      <p class="quote">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint non debitis cumque dolor hic doloremque nostrum deserunt eveniet explicabo maiores libero repudiandae repellat ea magnam reprehenderit nemo, nisi modi maxime vitae vel? Aut, enim voluptas dolore itaque sint soluta perspiciatis iure autem? Quasi, quos voluptate.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem quasi et maxime, similique vitae facere explicabo itaque modi molestias odio distinctio minus, harum velit hic ipsam nostrum fugit libero repudiandae porro placeat numquam nihil ratione earum. Temporibus deleniti quae sint cum neque non, nesciunt totam aliquam dolore recusandae repudiandae, laborum vero ducimus rerum voluptate ab unde ratione perferendis modi vel maxime quas! Perspiciatis corrupti ratione incidunt debitis dolores doloribus explicabo tempore voluptas minima similique, reiciendis aliquid deleniti, eos delectus illo. Perspiciatis similique fugiat quia, aut repellendus quisquam sunt corporis asperiores culpa mollitia ex odit ab error harum impedit dolorum!</p>
      <h2>Tercer titulo</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem quasi et maxime, similique vitae facere explicabo itaque modi molestias odio distinctio minus, harum velit hic ipsam nostrum fugit libero repudiandae porro placeat numquam nihil ratione earum. Temporibus deleniti quae sint cum neque non, nesciunt totam aliquam dolore recusandae repudiandae, laborum vero ducimus rerum voluptate ab unde ratione perferendis modi vel maxime quas! Perspiciatis corrupti ratione incidunt debitis dolores doloribus explicabo tempore voluptas minima similique, reiciendis aliquid deleniti, eos delectus illo. Perspiciatis similique fugiat quia, aut repellendus quisquam sunt corporis asperiores culpa mollitia ex odit ab error harum impedit dolorum!</p>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
#pub-info{
  text-align: right;
  margin-bottom: 30px;
}

.pub-detail{
  font-size: 0.8em;
  color: rgb(135, 135, 135);
}

main{
  padding: 0 70px;
}

h2{
  margin-top: 40px;
}

#pub-content{
  font-weight: 300;
}

.quote{
  margin: 30px 0;
  margin-left: 30px;
  padding: 10px 0;
  padding-left: 10px;
  width: 70%;
  border-left: 2px solid #9b9b9b;
  color:#69a9ce;
}

img{
  margin: 30px auto;
  display: block;
  max-width: 95%;
  max-height: 60vh;
}

@media(max-width: 700px) {
  main{
    padding: 0 20px;
  }

  p.quote{
    margin: 15px 0;
  }
}
</style>
