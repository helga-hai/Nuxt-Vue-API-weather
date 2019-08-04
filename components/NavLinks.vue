<template>
    <div>
        <ul>
            <!-- <li v-for="link in 3" :key="link">link {{link}}</li> -->
            <li><nuxt-link exact active-class="active" to="/">Головна</nuxt-link></li>
            <li><nuxt-link active-class="active" to="/kyiv">Київ</nuxt-link></li>
            <li><nuxt-link active-class="active" to="/london">Лондон</nuxt-link></li>
            <li><nuxt-link active-class="active" to="/new-york">Нью Йорк</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
ul li {
    list-style: none;
    display: inline-block;
    padding-right: 20px;
}
</style>
