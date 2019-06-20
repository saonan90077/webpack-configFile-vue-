import "swiper/dist/css/swiper.min.css";
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
	preLoad: 1.3,
	attempt: 1,
	listenEvents: [ 'scroll' ]
})

import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner-3.jpg";
import banner4 from "../../assets/images/banner-4.jpg";
import datuType1 from "../../assets/images/datuType-1.png";
import datuType2 from "../../assets/images/datuType-2.png";
import xiaotuType1 from "../../assets/images/xiaotuType-1.png";
import xiaotuType2 from "../../assets/images/xiaotuType-2.png";
import xiaotuType3 from "../../assets/images/xiaotuType-3.png";
import xiaotuType4 from "../../assets/images/xiaotuType-4.png";
import xiaotuType5 from "../../assets/images/xiaotuType-5.png";
import xiaotuType6 from "../../assets/images/xiaotuType-6.png";
import xiaotuType7 from "../../assets/images/xiaotuType-7.png";
import xiaotuType8 from "../../assets/images/xiaotuType-8.png";
export default {
    data() {
        return {
            banners: [banner1, banner2, banner3, banner4],
            swiper: null,
            list: [
                {
                    title: "JHF·Q护肤",
                    url: datuType1,
                    children: [
                        {
                            title: "4款可选 赋活原液系列",
                            price: "189.00积分",
                            url: xiaotuType1,
                        },
                        {
                            title: "4款可选 赋活原液系列",
                            price: "189.00积分",
                            url: xiaotuType2,
                        },
                        {
                            title: "4款可选 赋活原液系列",
                            price: "189.00积分",
                            url: xiaotuType3,
                        },
                        {
                            title: "4款可选 赋活原液系列",
                            price: "189.00积分",
                            url: xiaotuType4,
                        },
                    ]
                },
                {
                    title: "甄选美食",
                    url: datuType2,
                    children: [
                        {
                            title: "4款可选 赋活原液系列",
                            price: "189.00积分",
                            url: xiaotuType5,
                        },
                        {
                            title: "4款可选 赋活原液系列",
                            price: "189.00积分",
                            url: xiaotuType6,
                        },
                        {
                            title: "4款可选 赋活原液系列",
                            price: "189.00积分",
                            url: xiaotuType7,
                        },
                        {
                            title: "4款可选 赋活原液系列",
                            price: "189.00积分",
                            url: xiaotuType8,
                        },
                    ]
                }
            ]
        }
    },
    created: function() {
        
    },
    watch: {
        banners: {
            handler: function(list) {
                this.$nextTick(() => {
                    this.setSwiper(list.length);
                })
            },
            immediate: true,
            
        }
    },
    methods: {
        setSwiper(len) {
            this.$refs["swiper-wrapper"].style.width = "calc(100% * " + (len + 2) +")";
            this.swiper = new Swiper('.swiper-container', {
                loop: len > 1 ? true : false,
                autoplay: len > 1 ? true : false,
                allowTouchMove: false,
                watchOverflow: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    hideOnClick: true
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            });
            if(len > 1) {
                this.setAutoplay();
            }
        },
        setAutoplay() {
            this.$refs["swiper-container"].onmouseover = () => {
                this.swiper.autoplay.stop();
            }
            this.$refs["swiper-container"].onmouseout = () => {
                this.swiper.autoplay.start();
            }
        }
    },
    mounted() {
        
    }
}