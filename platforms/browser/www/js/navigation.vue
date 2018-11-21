<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" id="nav">
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
                <div v-on:click="close" v-for="nav of navigation">
                    <router-link  :to="nav.url" class="mdl-navigation__link mdl-js-ripple-effect">
                        <div class="material-icons">{{nav.icon}}</div>
                        {{nav.label}}
                    </router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import navigation from './navigationElements.js';
    export default {
        methods: {
            close: () => {
                document.getElementById('nav').MaterialLayout.toggleDrawer()
            }
        },
        data: () => {
            return {
                navigation: navigation
            }
        }
    }
</script>


