<template>
  <section id="MenuUser">
    <div id="box-menu">
      <nuxt-link :class="{'ItemActiveMenu':pagAccount === item.title}" class="ItemMenuUser" v-for="(item, index) in listMenu" :key="index" :to="item.link">{{
      item.title
    }}</nuxt-link>
    <div id="box-opcion" @click="clickOpcion" v-click-outside="hide">
      <img id="icon-cog" src="@/assets/icon-menu/cog.svg" />
      <ul v-if="viewOpcion">
        <li><nuxt-link to="/account/option">Opciones</nuxt-link></li>
        <li><a href="#" @click="Logout">Salir</a></li>
      </ul>
    </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      listMenu: [
        { title: "Publicaciones", link: "/account/myNews" },
        { title: "Usuarios", link: "/account/systemUser" }
      ],
      viewOpcion: false
    };
  },
  methods: {
    clickOpcion() {
      this.viewOpcion = !this.viewOpcion;
    },
    hide() {
      this.viewOpcion = false;
    },
    ...mapActions(['Logout'])
  },
  computed: {
    ...mapGetters({
      pagAccount:'getPagAccount'
    })
  },
  directives: {
    ClickOutside
  }
};
</script>
<style scoped>
#MenuUser {
  display:inline-block;
  width: 100%;
  max-width: 800px;
  border-bottom: solid #7904ed 4px;
  overflow-y:hidden;
  overflow-x: auto;
}

.ItemActiveMenu {
  font-weight: bold;
  color: #ebebeb;
  background-color: #7904ed;
}

#box-menu {
  width: 800px;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(3,1fr) auto;
}
#MenuUser > #box-menu >.ItemMenuUser{
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: solid #4b4b4b 1px;
}

#box-opcion
{
  grid-column: 4;
  height: 50px;
}

#box-opcion > ul
{
  position:absolute;
  right: 0;
  background-color: #fff;
  list-style: none;
  padding: 0;
  bottom: -75px;
  box-shadow: 0px 0px 5px 2px rgb(147, 147, 147);
}
#box-opcion > ul > li
{
  width: 130px;
  padding: 10px 0;
  text-align: center;
  font-size: 1em;
}
#icon-cog {
  width: 40px;
  margin: 5px 12px;
}
</style>