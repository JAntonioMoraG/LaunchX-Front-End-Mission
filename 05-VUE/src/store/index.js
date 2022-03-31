import { createStore } from 'vuex'

export default createStore({
  state: {
    //$store.state
    biscochochocolate: 0,
    biscochovainilla: 0,
    biscochoredvelvet: 0,
    biscocholimon: 0,
    rellenochocolate: 0,
    rellenovainilla: 0,
    rellenofrutos: 0,
    rellenolimon: 0,
    cubiertachocolate: 0,
    cubiertacrema: 0,
    cubiertafondant: 0,
    cubiertamantequilla: 0,
    figura: 0,
    malvavisco: 0,
    chocolates: 0,
    chispas: 0,
    cliente: 'x',
    telefono: 'x',
    correo: 'x',
    descripcion: 'x'
  },
  getters: {
    //$store.getters
  },
  mutations: {
    //$store.commit()
    llenarformulario(state){
      //biscocho
      if(document.getElementById("choco").checked){
        state.biscochochocolate++;
      }
      if(document.getElementById("vainilla").checked){
        state.biscochovainilla++;
      }
      if(document.getElementById("velvet").checked){
        state.biscochoredvelvet++;
      }
      if(document.getElementById("limon").checked){
        state.biscocholimon++;
      }
      //relleno
      if(document.getElementById("rchoco").checked){
        state.rellenochocolate++;
      }
      if(document.getElementById("rvainilla").checked){
        state.rellenovainilla++;
      }
      if(document.getElementById("rfrutos").checked){
        state.rellenofrutos++;
      }
      if(document.getElementById("rlimon").checked){
        state.rellenolimon++;
      }
      // cubiertas
      if(document.getElementById("cchoco").checked){
        state.cubiertachocolate++;
      }
      if(document.getElementById("ccrema").checked){
        state.cubiertacrema++;
      }
      if(document.getElementById("cfondant").checked){
        state.cubiertafondant++;
      }
      if(document.getElementById("cmantequilla").checked){
        state.cubiertamantequilla++;
      }
      //Decoracion
      if(document.getElementById("figura").checked){
        state.figura++;
      }
      if(document.getElementById("malvavisco").checked){
        state.malvavisco++;
      }
      if(document.getElementById("Dchoco").checked){
        state.chocolates++;
      }
      if(document.getElementById("chispas").checked){
        state.chispas++;
      }
      state.cliente=document.getElementById("nombre").value;
      state.telefono=document.getElementById("telefono").value;
      state.correo=document.getElementById("correo").value;
      state.descripcion=document.getElementById("comentarios").value;
    }
  },
  actions: {
    //$store.dispatch
  },
  modules: {
  }
})
