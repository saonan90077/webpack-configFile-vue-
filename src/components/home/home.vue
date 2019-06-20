<style lang="scss" scoped>
    @import "./home.scss";
</style>

<template>
    <div class="home">
        <div
            class="swiper-container"
            ref="swiper-container">
            <div
                class="swiper-wrapper"
                ref="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="(item, index) in banners"
                    :key="index">
                    <img :src="item" alt="">    
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <ul class="floor">
            <li
                v-for="(item, index) in list"
                :key="index">
                <div class="wrapper">
                    <p class="title">{{item.title}}</p>
                    <img
                        class="datuType"
                        v-lazy="item.url">
                    <ul>
                        <li
                            v-for="(child, i) in item.children"
                            :key="i">
                            <img
                                v-lazy="child.url">
                            <div>
                                <p>{{child.title}}</p>
                                <p>{{child.price}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import home from "./home.js";
    export default {
        ...home
    }
</script>
