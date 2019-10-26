<template>
  <article id="info">
    <div class="container-info"> 
      <img class="icon" src="@/assets/info/graduation-cap.svg" alt="" />
      <h1>Perfil de Ingreso</h1>
      <p>
       En correspondencia con el Modelo Educativo Institucional y los requerimientos de los perfiles de egreso de las carreras de la UNI, se espera que los estudiantes de primer ingreso, tengan ciertas características deseables, en términos de los conocimientos, habilidades y actitudes, favorables para cursar y terminar con mayores posibilidades de éxito los estudios que inician. El mismo debe incorporar alumnos cualificados tanto desde el punto de vista académico como vocacional.
      </p>
    </div>
    <div class="container-info"> 
      <img class="icon" src="@/assets/info/shield-alt.svg" alt="" />
      <h1>Valores y Actitudes</h1>
      <p>
        <ul>
          <li>
           Muestra empatía y asertividad en la coordinación técnica y metodológica de los equipos de trabajo, con una visión sistémica, utilizando técnicas de comunicación efectiva para el manejo de las relaciones interpersonales y solución de conflictos. 
          </li>
          <li>
            Ejerce liderazgo transformador siendo consistente con su entorno, mostrando un espíritu emprendedor, humanista y comprometido con las necesidades sociales y preservación del ambiente.
          </li>
          <li>
            Actúa con ética profesional al desarrollar y gestionar sistemas organizacionales consistentes con su entorno, demostrando responsabilidad, pro-actividad, creatividad e innovación en todas las actividades que realiza.
          </li>
          <li>
            Asume compromisos con la superación personal, el aprendizaje permanente y  su formación integral.
          </li>
        </ul>
      </p>
    </div>
     <div class="container-info"> 
      <img class="icon" src="@/assets/info/lightbulb.svg" alt="" />
      <h1>Conocimientos</h1>
      <p>
        <ul>
          <li>
           Comprende los fundamentos, métodos, técnicas y procedimientos para la planeación de los sistemas organizacionales.
          </li>
          <li>
            Se apropia de los fundamentos científicos técnicos, metodologías de sistemas, procesos de negociación, administración, ingeniería de software y sistemas de información.
          </li>
          <li>
           Domina las metodologías y las herramientas técnicas para la identificación, análisis y diseño de modelos de negocio de las organizaciones.
          </li>
        </ul>
      </p>
    </div>
    <div class="container-info">
      <img class="icon" src="@/assets/info/glasses.svg" alt="" />
      <h1>Habilidades</h1>
   <ul>
          <li>
          Aplica metodologías de sistemas e ingeniería de software, técnicas, estrategias, herramientas administrativas y tecnológicas.
          </li>
          <li>
            Implanta sistemas de información para el desarrollo y gestión de sistemas organizaciones.
          </li>
          <li>
           Soluciona problemas complejos de las organizaciones desde una perspectiva sistémica, modelando y analizando las complejas interrelaciones entre recursos, personas e información.
          </li>
        </ul>
    </div>
  </article>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["ChangePresent"])
  },
  beforeMount() {
    this.ChangePresent(4);
  }
};
</script>
<style scoped>

.container-info {
  width: 80%;
  height: auto;
  margin: 60px 0;
  padding: 50px;
  padding-top: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  color: #3b3b3b;
  box-shadow: 0px 7px 28px 18px rgba(199, 199, 199, 0.171);
}
.container-info:nth-child(2n+1) {
 margin-left: 0;
}

.container-info:nth-child(2n) {
  margin-left: 20%;
}

.container-info > .icon {
  width: 60px;
  margin: 10px 0;
}

.container-info > h1 {
  font-size: 1.4em;
  border-top: solid #0b69ff 2px;
  padding: 10px 0;
  margin-bottom: 0;
}

ul > li {
  margin: 12px 0;
  margin-left: 5%;
  list-style-type: square;
}

.container-info > p {
  font-size: 1em;
  margin-left: 5%;
}

.container-info > blockquote {
  margin-left: 5%;
}

.autor {
  width: 100%;
  text-align: right;
}
@media screen and (max-width: 650px) {
  .container-info {
    width: 70%;
    height: auto;
    padding: 10%;
  }

  .container-info:nth-child(2n+1) {
  margin: 20px 5%;
}

.container-info:nth-child(2n) {
  margin: 20px 5%;
}
}
</style>