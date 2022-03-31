<template>
            <section class="flexcontainer">
            <div class="tablasdisp">
                <article class="items-tablas">
                    <table class="saboresdisp">
                        <caption>Sabor de biscocho</caption> 
                        <tr>
                            <th scope="row"></th>
                            <th>chocolate</th>
                            <th>vainilla</th>
                            <th>Red velvet</th>
                            <th>Limon</th>
                        </tr>
                        <tr>
                            <th>Piezas</th>
                            <td>{{ $store.state.biscochochocolate }}</td>
                            <td>{{ $store.state.biscochovainilla}}</td>
                            <td>{{ $store.state.biscochoredvelvet }}</td>
                            <td>{{ $store.state.biscocholimon }}</td>
                        </tr>
                    </table>
                </article>
                <article class="items-tablas">
                    <table class="rellenosdisp">
                        <caption>Rellenos deseados</caption> 
                        <tr>
                            <th scope="row"></th>
                            <th>chocolate</th>
                            <th>vainilla</th>
                            <th>Frutos rojos</th>
                            <th>Limon</th>
                        </tr>
                        <tr>
                            <th>piezas</th>
                            <td>{{$store.state.rellenochocolate}}</td>
                            <td>{{$store.state.rellenovainilla}}</td>
                            <td>{{$store.state.rellenofrutos}}</td>
                            <td>{{$store.state.rellenolimon}}</td>
                        </tr>
                    </table>
                </article>
                <article class="items-tablas">
                    <table class="cubiertadisp">
                        <caption>Cubierta deseada</caption> 
                        <tr>
                            <th scope="row"></th>
                            <th>chocolate</th>
                            <th>crema b.</th>
                            <th>Fondant</th>
                            <th>manteq.</th>
                        </tr>
                        <tr>
                            <th>piezas</th>
                            <td>{{$store.state.cubiertachocolate}}</td>
                            <td>{{$store.state.cubiertacrema}}</td>
                            <td>{{$store.state.cubiertafondant}}</td>
                            <td>{{$store.state.cubiertamantequilla}}</td>
                        </tr>
                    </table>
                </article>
                <article class="items-tablas">
                    <table class="decoraciondisp">
                        <caption>Decoraciones pedidas</caption> 
                        <tr>
                            <th scope="row"></th>
                            <th>Figuras</th>
                            <th>Malvavisco</th>
                            <th>chocolate</th>
                            <th>chispas</th>
                        </tr>
                        <tr>
                            <th>piezas</th>
                            <td>{{$store.state.figura}}</td>
                            <td>{{$store.state.malvavisco}}</td>
                            <td>{{$store.state.chocolates}}</td>
                            <td>{{$store.state.chispas}}</td>
                        </tr>
                    </table>
                </article>
                <article class="items-tablas">
                    <table class="pedidos">
                        <caption>Informacion del pedido</caption>
                        <tr>
                        <th scope="row">ID</th>
                        <th>Cliente</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Instrucciones</th>
                        </tr>
                        <tr>
                            <td>Pedido</td>
                            <td>{{$store.state.cliente}}</td>
                            <td>{{$store.state.telefono}}</td>
                            <td>{{$store.state.correo}}</td>
                            <td>{{$store.state.descripcion}}</td>
                        </tr>
                    </table>
                </article>
            </div>
        </section>
</template>
<script>
export default {
    name: 'pastelero'
}
</script>