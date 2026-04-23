<template>
    <div id="wrapper" class="recepcion-theme">
        <side-bar 
        :rolUser="rolUser"
        :nombreUser="currentUser.name"
        :professional="{ name: currentUser.name }"
        ></side-bar>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <nav-bar></nav-bar>
                <div class="container-fluid">
                    {{this.currentUser.name}}
                    <router-view :rolUser="rolUser"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SideBar from '../layout/Sidebar.vue'
import NavBar from '../layout/Nav.vue'

export default{
    name:'mainprofesional',
    data(){
        return {
           currentUser:{},
           token: localStorage.getItem('token'),
        }
    },
    components: { SideBar, NavBar },
    props:{
        rolUser: String
    },
    mounted(){
        window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        this.axios.get('/api/user')
        .then((res) => {
            console.log(res)
            this.currentUser = res.data
        }).catch((err) => {
            console.log(err)
        });
    }
}
</script>

<style>
.recepcion-theme .recepcion-sidebar {
    background-color: #0f1729 !important;
    background-image: none !important;
}

.recepcion-theme .btn-primary {
    background-color: #3B82F6;
    border-color: #3B82F6;
}

.recepcion-theme .btn-primary:hover,
.recepcion-theme .btn-primary:focus,
.recepcion-theme .btn-primary:active,
.recepcion-theme .btn-primary:not(:disabled):not(.disabled).active,
.recepcion-theme .show > .btn-primary.dropdown-toggle,
.recepcion-theme .btn-primary:not(:disabled):not(.disabled):active {
    background-color: #2563EB;
    border-color: #2563EB;
}
</style>