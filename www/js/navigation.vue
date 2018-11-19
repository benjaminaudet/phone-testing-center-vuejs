<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">Phone Testing Center</span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation"></nav>
            </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Pages</span>
            <nav class="mdl-navigation">
                <router-link v-for="nav of navigation" class="mdl-navigation__link mdl-js-ripple-effect" :href="`/${nav.url}`">
                    <div class="material-icons">{{nav.icon}}</div>
                    {{nav.label}}
                </router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    import navigation from './navigationElements.js';
    export default {
        data: () => {
            return {
                navigation: navigation
            }
        }
    }
</script>

<style scoped>
    a div {
        margin-right: 20px;
    }
    a {
        text-transform: capitalize;
    }
</style>



