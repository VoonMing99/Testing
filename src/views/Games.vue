<script setup>
import {ref, onMounted} from 'vue';

const GamesList = ref([]);

onMounted(()=> {
    fetch('http://localhost:5173/about')
    .then((response) => response.json())
    .then(apiGames => {
        GamesList.value = apiGames
    })
})
</script>

<template>
    <pre>{{GamesList}}</pre>
</template>