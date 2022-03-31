<template>
    <section class="flexcontainer">
            <div class="formulario">
                <article class="items-formulario">
                    <!--Biscocho-->
                    <p class="sabores">Selecciona el sabor de tu biscocho</p>
                    <img src="@/assets/Images/pasteles/chocolate.png">
                    <label class="rcontainer">Chocolate $100
                        <input type="radio" name="biscocho" id="choco" value="choco">
                        <span class="rcheckmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/vainilla.png">
                    <label class="rcontainer">Vainilla $100
                        <input type="radio" name="biscocho" id="vainilla" value="vainilla">
                        <span class="rcheckmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/redvelvet.png">
                    <label class="rcontainer">Red Velvet $120
                        <input type="radio" name="biscocho" id="velvet" value="velvet">
                        <span class="rcheckmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/limon.png">
                    <label class="rcontainer">Limon $100
                        <input type="radio" name="biscocho" id="limon" value="limon">
                        <span class="rcheckmark"></span>
                    </label>
                </article>
                <article class="items-formulario">
                    <p class="sabores">Elige el sabor de tu relleno</p>
                    <img src="@/assets/Images/pasteles/Rchocolate.png">
                    <label class="container">Chocolate $40
                        <input type="checkbox" name="relleno" id="rchoco" value="choco">
                        <span class="checkmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Rvainilla.png">
                    <label class="container">Vainilla $35
                        <input type="checkbox" name="relleno" id="rvainilla" value="vainilla">
                        <span class="checkmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Rfrutosrojos.png">
                    <label class="container">Frutos rojos $45
                        <input type="checkbox" name="relleno" id="rfrutos" value="frutos">
                        <span class="checkmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Rlimon.png">
                    <label class="container">Limon $35
                        <input type="checkbox" name="relleno" id="rlimon" value="limon">
                        <span class="checkmark"></span>
                    </label>
                </article>
                <article class="items-formulario">
                    <!--cubierta-->
                    <p class="sabores">Selecciona el sabor de tu cubierta</p>
                    <img src="@/assets/Images/pasteles/Cchocolate.png">
                    <label class="rcontainer">Chocolate $60
                        <input type="radio" name="cubierta" id="cchoco" value="choco">
                        <span class="rcheckmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Ccremabatida.png">
                    <label class="rcontainer">Crema batida $60
                        <input type="radio" name="cubierta" id="ccrema" value="crema">
                        <span class="rcheckmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Cfondant.png" >
                    <label class="rcontainer">Fondant $60
                        <input type="radio" name="cubierta" id="cfondant" value="fondant">
                        <span class="rcheckmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Cmantequilla.png">
                    <label class="rcontainer">Mantequilla $60
                        <input type="radio" name="cubierta" id="cmantequilla" value="mantequilla">
                        <span class="rcheckmark"></span>
                    </label>
                </article>
                <article class="items-formulario">
                    <!--Decoracion-->
                    <p class="sabores">Elige tus decoraciones</p>
                    <img src="@/assets/Images/pasteles/Figura.png">
                    <label class="container">Figura/vela $80
                        <input type="checkbox" name="decoracion" id="figura" value="figura">
                        <span class="checkmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Dmalvavisco.png">
                    <label class="container">Malvavisco $30
                        <input type="checkbox" name="decoracion" id="malvavisco" value="malvavisco">
                        <span class="checkmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Dchocolate.png">
                    <label class="container">Chocolates $45
                        <input type="checkbox" name="decoracion" id="Dchoco" value="Dchoco">
                        <span class="checkmark"></span>
                    </label>
                    <img src="@/assets/Images/pasteles/Dchispas.png">
                    <label class="container">Chispas $15
                        <input type="checkbox" name="decoracion" id="chispas" value="chispas">
                        <span class="checkmark"></span>
                    </label>
                </article>
            </div>
    </section>
    <section class="flexcontainer">
        <div class="datoscompra">
            <article class="items-datoscompra">
                    <p class="sabores">Datos para finalizar tu compra</p>
            </article>
            <article class="items-datoscompra">
                    <label class="datoscontacto">Nombre:
                        <input type="text" name="contacto" id="nombre">
                    </label>
            </article>
            <article class="items-datoscompra">
                <label class="datoscontacto">Telefono:
                    <input type="tel" maxlength="10" name="contacto" id="telefono">
                </label>
            </article>
            <article class="items-datoscompra">
                <label class="datoscontacto">Correo: 
                        <input type="email" name="contacto" id="correo">
                    </label>
                </article>
                <article class="items-datoscompra">
                    <label class="datoscontacto">Agrega especificaciones como el tipo de tu figura o indicaciones extra en caso de que haya:<br>
                        <textarea name="contacto" id="comentarios" rows="10" cols="55"></textarea>
                    </label> 
                </article>
                <article class="items-datoscompra">
                    <button id="buttonEnviarForm" name="button1" class="boton datoscontacto" @click="$store.commit('llenarformulario')" onclick="alert('Tu pedido fue realizado')">Crea tu pastel</button>
                </article>
                <article class="items-datoscompra">
                    <router-link to="/paginaPastelero">
                    <button id="buttonPagPast" name="button1" class="boton datoscontacto">Pagina Pastelero</button>
                    </router-link>
                </article>
        </div> 
    </section>
</template>
<script>
export default {
    name: 'cliente'
}
</script>