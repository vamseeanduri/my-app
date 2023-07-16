<template>
    <div>
        <users-data></users-data>
    </div>
</template>

<script>
import axios from 'axios'
import UsersData from './UsersData.vue'
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
                console.log(res.data);
            })
        }
    },
    components:{
        UsersData
    }
}
</script>