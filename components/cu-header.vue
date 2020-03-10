<template>
    <nav role="navigation" class="ucb-navbar ucb-navbar-dark  margin-bottom">
        <label for="show-menu2" class="show-menu">
        <font-awesome-icon aria-hidden="true" icon="bars"/>
        <span class="element-invisible">Show Menu</span>
        </label>
        <input type="checkbox" id="show-menu2" role="button" aria-controls="site-menu2" aria-haspopup="true">
        <ul id="site-menu2" aria-labelledby="show-menu2">
            <li>
                <nuxt-link to="/">
                    <font-awesome-icon aria-hidden="true" icon="home"/>
                    <span class="display-inline invisible-md invisible-lg">Home</span>
                </nuxt-link>
            </li>
            <template v-for=" i in links">
                <li :key="i.name"> <nuxt-link :to="'/' + i.path"> {{i.name}} </nuxt-link> </li>
            </template>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "cu-header",
    props: {
        links: Array
    }
}
</script>