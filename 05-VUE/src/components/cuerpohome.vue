<template>
            <section class="flexcontainer">
            <div class="cuerpo">
                <article class="items-body">
                    <img class="imagenindex" src="@/assets/Images/pastel.jpeg">
                </article>
                <article class="items-body">
                    <h1 class="subtitle">Bienvenidos a copy-pastel</h1>
                    <br>
                    <p class="textoindex">Si quieres plasmar tus ideas y sentimientos en un pastel para 
                        una ocacion especial, Copy-Pastel es tu mejor opcion.<br>
                        El mejor sabor y la mejor experiencia nunca antes visto en un pastel.<br>
                        Contamos con servicio a domicilio y precios accesibles.<br>
                        No lo pienses mas, COPIAMOS TUS SENTIMIENTOS Y LOS PEGAMOS EN TU PASTEL<br>
                        Crea tu propio pastel con los productos que mas te gusten:
                    </p>
                    <router-link to="/paginaCliente"><button id="button1" name="button1" class="botones">Crea tu pastel</button></router-link>
                </article>
                
            </div>
        </section>
</template>
<script>
    export default {
        name: 'cuerpohome',
    }
</script>