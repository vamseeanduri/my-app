<template>
    <div>
        <main-table :TableData="userData"></main-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userData: []
        }
    },
    created() {
        this.getLogin();
    },
    methods: {
        getLogin(){
            axios.get('https://64b40abf0efb99d86268b31e.mockapi.io/Users').then(res => {
                this.userData = res.data;
            })
        }
    },
}
</script>