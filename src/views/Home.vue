<template>
  <div class="home">
    <h2>Descripción de la prueba</h2>
    <p>
      La prueba consiste en terminar el desarrollo de PromotioApp, una app
      sencilla para poder visualizar y crear promociones.
    </p>
    <p>La app consta de dos vistas principales:
      <ul>
        <li><router-link to="promotions">Promotions</router-link>: vista del listado de promociones. En esta vista se pueden visualizar, filtrar y ordenar las promociones. Cada promoción es reprenstada graficamente con una card que ofrece un resumen de todos sus datos.
        </li>
        <li><router-link to="promotions-create">PromotionsCreate</router-link>: vista para la creación de promociones. Una vez creada una nueva promoción estará disponible en el listado de promociones.</li>
      </ul>
    </p>
    <p>
      A continuación encontrarás la tareas necesarias para terminar el
      desarrollo de la aplicación. Para realizar las tareas puedes modificar archivos ya existentes, añadir/eliminar dependencias siempre y cuando se siga trabajando con Vue.js 2.* .
    </p>

    <h3>1. Tareas de Promotions</h3>
    <ul>
      <li>
        <b>1.1</b> Terminar la maquetación y aplicar estilos como indicado en el
        <a href="https://www.figma.com/file/urHSqbqpOx7yLZWjGs3Oew/Test-Promociones?node-id=0%3A1"
          target="_blank"
          >diseño figma</a>. En el diseño encontrarás la versión para mobile y para desktop. El layout tendría que ser responsive basado en media queries de css. Para visualizar todos los detalles del diseño es necesario tener una cuenta free del Figma.
      </li>
      <li><b>1.2</b> Implementar las funcionalidades de: filtrar, ordenar y paginar las promociones.</li>
    </ul>
    <h3>2. Tareas de PromotionCreate</h3>
      <ul>
        <li>
          <b>2.1</b> Utilizar el <a href="https://vuelidate.js.org/" target="_blank">vuelidate</a> para validar el formulario y mostrar los mensajes de error correspondientes. De esta vista no hay diseños, puedes añadir los mensajes de error de la manera que veas más apropiada.
          A continuación lar reglas de validación a aplicar al formulario:
          <ul>
            <li>Todos los campos son requeridos.</li>
            <li>El campo date_init tiene que ser 15 días mayor de la fecha actual.</li>
            <li>El campo date_end tiene que ser 15 días mayor respecto al date_init selecccionado.</li>
            <li>
              El campo discount tiene que ser un número mayor o igual a 0.05
              y inferior o igual a 99.95.
            </li>
            <li>El campo discount admite solo valores múltiplos de 5 céntimos (0.05).
              Por ejemplo: 1.01, 1.12, 1.53, no son descuentos validos. Los descuentos
              validos son por ejemplo: 1, 1.05, 1.10, 1.50, 1.55.</li>
          </ul>
        </li>
        <li>
          <b>2.2 </b> Si el formulario es valido enviar los datos al endpoint [POST] /promotions para crear la promoción en base de datos.
          Los datos se tienen que enviar con el siguiente formato.
          <pre>
          {
            "product": {
                "id": 111,
                "name": "Name",
                "description": "Decription",
                "image": "https://public-storage-cdn-farmapremium.imgix.net/...."
            },
            "rating": 0,
            "date_init": "2022-05-01 00:00:00",
            "date_end": "2022-06-30 23:59:59",
            "discount": 1
          }
          </pre>
        </li>
    </ul>
    <h3>3. Tests</h3>
    <ul>
      <li><b>3.1</b> Crear los test unitario de un componente de tu elección utilizadno Jest.</li>
      <li><b>3.2</b> Crear los test e2e de una vista de tu elección utilizando Cypress.</li>
    </ul>
    <h3>4. Entrega</h3>
    <p>
      Para entregar la prueba puedes subir el proyecto a un repositorio GIT y enviarnos la url o puedes crear un .zip (borrando la carpeta node_modules) y enviarlo por email/wetransfer.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
@import "@/scss/design_token.scss";
.home {
  width: 800px;
  margin: 0 auto;
}
h2 {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid $soft-grey;
}
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
p {
  margin-bottom: 7px;
}
ul {
  list-style-position: outside;
  list-style-type: circle;
  padding: 5px 0 5px 20px;
  li {
    margin-bottom: 5px;
  }
}
pre {
  margin: 10px;
  background: #eee;
  padding: 10px;
  border-radius: 5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
