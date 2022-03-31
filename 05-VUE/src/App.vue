<template>
  <cabecera/>
  <router-view/>
  <pie/>

</template>
<style>
/* FUENTES */
@font-face {
    font-family: copypastelTitle;
    src: url(@/assets/fonts/ADELIA.otf);
}
@font-face {
    font-family: babydoll;
    src: url(../src/assets/fonts/Baby\ Doll.otf);
}
@font-face {
    font-family: cursiva;
    src: url(../src/assets/fonts/Cream\ Cake.otf);
}
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.header{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,238,188,1) 26%);
    flex-shrink: 1;
    flex-wrap: wrap;
}
.items-header:nth-last-child(2){
    width:100%;
    text-align: center;
}
.cuerpo{
    display: flex;
    height: 100vh;
    justify-content: center;
    background: linear-gradient(0deg, rgba(254,174,202,1) 0%, rgba(255,255,255,1) 46%);
    background-attachment: fixed;
    flex-wrap: wrap;
}
.items-body{
    width: 100%;
    padding-top: 1rem;
    text-align: center;
}
.footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(0deg, rgba(255,238,188,1) 70%, rgba(255,231,239,1) 100%);
}
.items-footer{
    font-family: babydoll;
    color: #feaeca;
    -webkit-text-stroke:.2px black;
    font-size: 20px;
    padding-top: 1rem;
    text-align: center;
    
}
.flexcontainer{
    display: flex;
    flex-direction: column;
}
.formulario{
    display: flex;
    flex-direction: column;
}
.datoscompra{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: babydoll;
}
.tablasdisp{
    display: flex;
    flex-direction: column;
    justify-content: stretch;
}
.items-datoscompra{
    margin-bottom: 1rem;
}
.titulo{
    position: relative;
    font-family: copypastelTitle;
    font-size: 200%;
    -webkit-text-stroke:2px black;
    color: #feaeca;
    margin-top: 0rem;
    padding-bottom: 0.2rem;
}
.slogan{
    font-family: cursiva;
    font-size: 200%;
    -webkit-text-stroke:.4px black;
    color: #feaeca;
}
.subtitle{
    font-family: cursiva;
    font-size: 350%;
    color: #feaeca;
    -webkit-text-stroke:.7px black;
}
.textoindex{
    font-family: babydoll;
    font-size: 15px;
}
.sabores{
    font-family: cursiva;
    font-size: 32px;
    text-align: center;
    color: #feaeca;
    -webkit-text-stroke:.3px black;

}
.imagenindex{
    width: 50%;
}
.imagenindex:hover{
    border-radius:50%;
    -webkit-border-radius:50%;
    box-shadow: 0px 0px 15px 15px #feaeca;
    -webkit-box-shadow: 0px 0px 15px 15px #feaeca;
    filter: saturate(180%);
    }
.botones{
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        font-size: 28px;
        background-color: #feaeca;
        border: 2px solid #feaeca;
        color: white;
        cursor: pointer;
        font-family: babydoll;
        margin-top: 1rem;
    }
.botones:hover{
        background-color: #cdcdcd; /* Green */
        border: 2px solid #cdcdcd;
        color: white;
    }
.boton{
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    font-size: 28px;
    background-color: #feaeca;
    border: 2px solid #feaeca;
    color: white;
    cursor: pointer;
    font-family: babydoll;
    margin-bottom: 1rem;
    }
.boton:hover{
    background-color: #cdcdcd; /* Green */
    border: 2px solid #cdcdcd;
    color: white;
    }
input{
        background-color : rgba(255,238,188,1);
        border: 1px solid #848484;
        height:25px;
        width: 275px;
        outline:0;
    }
textarea{
    width: 100%;
    background-color : rgba(255,238,188,1);
    border: 1px solid #848484;
}
caption{
    color:white;
    background-color: black;
    font-size: 24px;
    font-family: babydoll;
    text-align: center;

}
tr{
    background-color: rgba(255,238,188,1);
    color: black;
    font-size: 24px;
    font-family: babydoll;
    text-align: center;
}
td:hover{
    background-color: #848484;
    color: white;
}
th{
    background-color: #feaeca;
    color: #eee;
    font-size: 24px;
    font-family: babydoll;
    text-align: center;
}
/* Estilo para checkbox */
.container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 0px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border: 1px solid black;
}

.container:hover input ~ .checkmark {
background-color: #ccc;
}


.container input:checked ~ .checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container input:checked ~ .checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

/* Estilo para radio Buttons */
.rcontainer {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
}

.rcontainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.rcheckmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    border: 1px solid black;
}

.rcontainer:hover input ~ .rcheckmark {
    background-color: #ccc;
}

.rcontainer input:checked ~ .rcheckmark {
    background-color: #2196F3;
}

.rcheckmark:after {
    content: "";
    position: absolute;
    display: none;
}

.rcontainer input:checked ~ .rcheckmark:after {
    display: block;
}

.rcontainer .rcheckmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
}
@media screen and (min-width:1024px) {
    .titulo{
        font-size: 380%;
    }
    .items-header:nth-last-child(2){
        width:60%;
    }
    .header{
        justify-content: space-between;
    }
    .slogan{
        font-size: 290%;
        -webkit-text-stroke:.7px black;
    }
    .cuerpo{
        flex-wrap: nowrap;
        justify-content: space-evenly;
    }
    .items-body{
        padding-top: 2rem;
        width: 50%;
    }
    .textoindex{
        font-size: 24px;
    }
    .imagenindex{
        width: 80%;
    }
    .formulario{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
}
</style>
<script>
  import cabecera from '@/components/cabecera.vue'
  import pie from '@/components/pie.vue'
  export default {
    name: 'App',
    components: {
      cabecera,pie
    }
  }
</script>