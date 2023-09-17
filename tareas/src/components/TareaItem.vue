<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <input type="text" class="form-control form-control-lg" 
                placeholder="Ingresar Tarea..." 
                v-model="nombreTarea" 
                v-on:keyup.enter="agregarTarea()"> <!--Cuando se haga clic se ejecuta el metodo agregarTarea-->
                <br>
            </div>

        </div>
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="card p-2" v-if="tareas.length === 0">
                    <h6>No hay tareas para mostrar</h6>
                </div>
                <!--v-for en un elemento <ul> para iterar sobre un arreglo tareas y descomponer cada elemento de ese arreglo en tarea y index. El atributo v-bind:key se utiliza para asignar una clave única a cada elemento del bucle-->
                <ul class="list-group" v-for="(tarea, index) in tareas" v-bind:key="index">
                    <li class="list-group-item d-flex justify-content-between">
                        <span  v-bind:class="[tarea.estado === true ? 'text-success': '', 'cursor']" v-on:click="actualizarTarea(tarea, index)">
                           <i v-bind:class="[tarea.estado === true ? 'fas fa-check-circle': 'far fa-circle']">

                           </i>
                            
                        </span>
                        <h5>
                            {{ tarea.nombre }} 
                        </h5>
                        <span class="cursor text-danger" v-on:click="eliminarTarea(index)">
                            <i class="fas fa-trash-alt"></i>
                        </span>
                       
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tareas: [],
            nombreTarea: ''
        }
    },
    methods:{
        agregarTarea() {
            const tarea = {
                nombre: this.nombreTarea,
                estado: false
            }
            this.tareas.push(tarea)
            this.nombreTarea = '';
            console.log(this.tareas)
        },
        eliminarTarea(index){
            this.tareas.splice(index, 1) //para eliminar el metodo splice nos pide 2 parametros, uno es obligatorio y el otro es opcional, el primero desde donde empezaremos a eliminar y cuantos elemetos
        },
        actualizarTarea(tarea, index){
            this.tareas[index].estado = !tarea.estado;
        }
    },

};
</script>

<style scoped>
input {
    text-align: center;
}

.form-control-lg {
    font-size: 1.7rem;
}

.cursor{
    cursor: pointer;
}
</style>