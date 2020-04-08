<template>
  <div class="container">
    <van-nav-bar title="首页" class="nav-title">
      <van-icon name="search" slot="left" size="20px"></van-icon>
      <van-icon slot="right" to="/profile">登录</van-icon>
    </van-nav-bar>
    <!-- 轮播图 -->
    <div class="carousel">
      <van-swipe :autoplay="5000">
        <van-swipe-item class="carousel-item" v-for="(item, index) in carouselItem" :key="index">
          <img v-lazy="item.imgSrc" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门商品 -->
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item, index) in hotProducts" :key="index">
          <div class="hot-swiper-content">
            <img v-lazy="item.img" alt="">
            <div>{{ item.name }}</div>
            <div>￥{{ item.price }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 推荐商品 -->
    <div class="variety">
      <p>推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "@/mock/mock.js";
export default {
  data() {
    return {
      carouselItem: [
        {
          name: "img1",
          imgSrc:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041994715,1243354266&fm=26&gp=0.jpg"
        },
        {
          name: "img2",
          imgSrc:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=116744544,2055858210&fm=26&gp=0.jpg"
        },
        {
          name: "img3",
          imgSrc:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1490457979,856070595&fm=200&gp=0.jpg"
        }
      ],
      hotProducts: [],
      varietyItem: [],
      swiperOption: {
        slidesPerView: 2.8
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.axios.get("/api/getList").then(res=>{
      if(res.status == 200){
        this.hotProducts = res.data.data; 
      }
    }).catch(err=>{
      console.log(err);
    });
    
    this.axios.get("/api/getVarietyItem").then(res => {
      console.log(res);
      this.varietyItem = res.data;
    });
    console.log(this.getName());
  },
  methods:{
    getName:function(){
      return {
        name:'京城一灯'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* body{
    height: 2000px;
} */
.container {
  background-color: #eee;
}
.nav-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999 !important;
}
.carousel {
  margin-top: 46px;
  height: 3rem;
  &-item {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}

.hot {
  margin-top: 0.2rem;
  background-color: #fff;
  &-title {
    width: 100%;
    height: 0.5rem;
    padding-left: 0.2rem;
    line-height: 0.5rem;
    box-sizing: border-box;
  }
  &-swiper {
    &-content {
      width: 2rem;
      text-align: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}

// 热门商品
.variety {
  margin-top: 0.2rem;
  background-color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item {
    flex-basis: 45%;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
}
</style>
