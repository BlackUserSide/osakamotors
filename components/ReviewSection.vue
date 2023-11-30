<script lang="ts" setup>
import {Carousel, Slide, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const reviews = ref([{
  name: 'Jayesh Patil',
  rate: 5,
  test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
      "            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n" +
      "            ea commodo consequat."
}, {
  name: 'Jayesh Patil',
  rate: 5,
  test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
      "            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n" +
      "            ea commodo consequat."
}, {
  name: 'Jayesh Patil',
  rate: 5,
  test: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
      "            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n" +
      "            ea commodo consequat."
},])
</script>
<template>
  <div class="review-wrapper">
    <div class="bg-review-place"></div>
    <div class="top-line-container">
      <div class="content-title">
        <h2 class="h2">Testimonials That Speak to <span>My Results</span></h2>
      </div>
      <div class="subtitle-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
      </div>
    </div>
    <Carousel :items-to-show="1.5" :autoplay="2000" :wrap-around="true" :mouseDrag="true" :touchDrag="true"
              :pauseAutoplayOnHover="false">
      <Slide v-for="item in reviews" :key="item">
        <div class="carousel__item">
          <div class="review-item-container">
            <div class="name-wrapper">
              <div class="avatar-wrap">
                <img src="/assets/avatar.svg">
              </div>
              <div class="name">
                <span>{{ item.name }}</span>
              </div>
            </div>
            <div class="rate-container">
              <div class="stars-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                      d="M22.6918 18.5516C22.3552 18.8818 22.2005 19.3594 22.2772 19.8278L23.4327 26.3011C23.5302 26.8497 23.3015 27.405 22.8478 27.722C22.4033 28.051 21.8118 28.0904 21.327 27.8273L15.5701 24.788C15.3699 24.6801 15.1476 24.6222 14.9202 24.6157H14.5679C14.4457 24.6341 14.3261 24.6736 14.2169 24.7341L8.45869 27.7878C8.17403 27.9325 7.85167 27.9839 7.53582 27.9325C6.76632 27.7852 6.25288 27.0431 6.37897 26.2603L7.53582 19.787C7.61251 19.3147 7.45783 18.8345 7.12117 18.499L2.42748 13.894C2.03493 13.5085 1.89845 12.9296 2.07783 12.4073C2.25201 11.8862 2.69655 11.506 3.23338 11.4205L9.69353 10.4719C10.1849 10.4206 10.6164 10.1179 10.8374 9.67061L13.684 3.76311C13.7516 3.63154 13.8387 3.51049 13.944 3.40787L14.061 3.31577C14.1221 3.24735 14.1922 3.19078 14.2702 3.14473L14.4119 3.0921L14.6329 3H15.1801C15.6689 3.05131 16.0991 3.34735 16.324 3.78942L19.2083 9.67061C19.4163 10.1008 19.8205 10.3995 20.2871 10.4719L26.7473 11.4205C27.2932 11.4994 27.7495 11.881 27.9302 12.4073C28.1004 12.9349 27.9535 13.5138 27.5532 13.894L22.6918 18.5516Z"
                      fill="#0099CC"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                      d="M22.6918 18.5516C22.3552 18.8818 22.2005 19.3594 22.2772 19.8278L23.4327 26.3011C23.5302 26.8497 23.3015 27.405 22.8478 27.722C22.4033 28.051 21.8118 28.0904 21.327 27.8273L15.5701 24.788C15.3699 24.6801 15.1476 24.6222 14.9202 24.6157H14.5679C14.4457 24.6341 14.3261 24.6736 14.2169 24.7341L8.45869 27.7878C8.17403 27.9325 7.85167 27.9839 7.53582 27.9325C6.76632 27.7852 6.25288 27.0431 6.37897 26.2603L7.53582 19.787C7.61251 19.3147 7.45783 18.8345 7.12117 18.499L2.42748 13.894C2.03493 13.5085 1.89845 12.9296 2.07783 12.4073C2.25201 11.8862 2.69655 11.506 3.23338 11.4205L9.69353 10.4719C10.1849 10.4206 10.6164 10.1179 10.8374 9.67061L13.684 3.76311C13.7516 3.63154 13.8387 3.51049 13.944 3.40787L14.061 3.31577C14.1221 3.24735 14.1922 3.19078 14.2702 3.14473L14.4119 3.0921L14.6329 3H15.1801C15.6689 3.05131 16.0991 3.34735 16.324 3.78942L19.2083 9.67061C19.4163 10.1008 19.8205 10.3995 20.2871 10.4719L26.7473 11.4205C27.2932 11.4994 27.7495 11.881 27.9302 12.4073C28.1004 12.9349 27.9535 13.5138 27.5532 13.894L22.6918 18.5516Z"
                      fill="#0099CC"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                      d="M22.6918 18.5516C22.3552 18.8818 22.2005 19.3594 22.2772 19.8278L23.4327 26.3011C23.5302 26.8497 23.3015 27.405 22.8478 27.722C22.4033 28.051 21.8118 28.0904 21.327 27.8273L15.5701 24.788C15.3699 24.6801 15.1476 24.6222 14.9202 24.6157H14.5679C14.4457 24.6341 14.3261 24.6736 14.2169 24.7341L8.45869 27.7878C8.17403 27.9325 7.85167 27.9839 7.53582 27.9325C6.76632 27.7852 6.25288 27.0431 6.37897 26.2603L7.53582 19.787C7.61251 19.3147 7.45783 18.8345 7.12117 18.499L2.42748 13.894C2.03493 13.5085 1.89845 12.9296 2.07783 12.4073C2.25201 11.8862 2.69655 11.506 3.23338 11.4205L9.69353 10.4719C10.1849 10.4206 10.6164 10.1179 10.8374 9.67061L13.684 3.76311C13.7516 3.63154 13.8387 3.51049 13.944 3.40787L14.061 3.31577C14.1221 3.24735 14.1922 3.19078 14.2702 3.14473L14.4119 3.0921L14.6329 3H15.1801C15.6689 3.05131 16.0991 3.34735 16.324 3.78942L19.2083 9.67061C19.4163 10.1008 19.8205 10.3995 20.2871 10.4719L26.7473 11.4205C27.2932 11.4994 27.7495 11.881 27.9302 12.4073C28.1004 12.9349 27.9535 13.5138 27.5532 13.894L22.6918 18.5516Z"
                      fill="#0099CC"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                      d="M22.6918 18.5516C22.3552 18.8818 22.2005 19.3594 22.2772 19.8278L23.4327 26.3011C23.5302 26.8497 23.3015 27.405 22.8478 27.722C22.4033 28.051 21.8118 28.0904 21.327 27.8273L15.5701 24.788C15.3699 24.6801 15.1476 24.6222 14.9202 24.6157H14.5679C14.4457 24.6341 14.3261 24.6736 14.2169 24.7341L8.45869 27.7878C8.17403 27.9325 7.85167 27.9839 7.53582 27.9325C6.76632 27.7852 6.25288 27.0431 6.37897 26.2603L7.53582 19.787C7.61251 19.3147 7.45783 18.8345 7.12117 18.499L2.42748 13.894C2.03493 13.5085 1.89845 12.9296 2.07783 12.4073C2.25201 11.8862 2.69655 11.506 3.23338 11.4205L9.69353 10.4719C10.1849 10.4206 10.6164 10.1179 10.8374 9.67061L13.684 3.76311C13.7516 3.63154 13.8387 3.51049 13.944 3.40787L14.061 3.31577C14.1221 3.24735 14.1922 3.19078 14.2702 3.14473L14.4119 3.0921L14.6329 3H15.1801C15.6689 3.05131 16.0991 3.34735 16.324 3.78942L19.2083 9.67061C19.4163 10.1008 19.8205 10.3995 20.2871 10.4719L26.7473 11.4205C27.2932 11.4994 27.7495 11.881 27.9302 12.4073C28.1004 12.9349 27.9535 13.5138 27.5532 13.894L22.6918 18.5516Z"
                      fill="#0099CC"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                      d="M22.6918 18.5516C22.3552 18.8818 22.2005 19.3594 22.2772 19.8278L23.4327 26.3011C23.5302 26.8497 23.3015 27.405 22.8478 27.722C22.4033 28.051 21.8118 28.0904 21.327 27.8273L15.5701 24.788C15.3699 24.6801 15.1476 24.6222 14.9202 24.6157H14.5679C14.4457 24.6341 14.3261 24.6736 14.2169 24.7341L8.45869 27.7878C8.17403 27.9325 7.85167 27.9839 7.53582 27.9325C6.76632 27.7852 6.25288 27.0431 6.37897 26.2603L7.53582 19.787C7.61251 19.3147 7.45783 18.8345 7.12117 18.499L2.42748 13.894C2.03493 13.5085 1.89845 12.9296 2.07783 12.4073C2.25201 11.8862 2.69655 11.506 3.23338 11.4205L9.69353 10.4719C10.1849 10.4206 10.6164 10.1179 10.8374 9.67061L13.684 3.76311C13.7516 3.63154 13.8387 3.51049 13.944 3.40787L14.061 3.31577C14.1221 3.24735 14.1922 3.19078 14.2702 3.14473L14.4119 3.0921L14.6329 3H15.1801C15.6689 3.05131 16.0991 3.34735 16.324 3.78942L19.2083 9.67061C19.4163 10.1008 19.8205 10.3995 20.2871 10.4719L26.7473 11.4205C27.2932 11.4994 27.7495 11.881 27.9302 12.4073C28.1004 12.9349 27.9535 13.5138 27.5532 13.894L22.6918 18.5516Z"
                      fill="#0099CC"/>
                </svg>
              </div>
              <div class="rate-text">
                <span>{{ item.rate }}</span>
              </div>
            </div>
            <div class="review-text-container">
              <p>{{ item.test }}</p>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation/>
      </template>
    </Carousel>
  </div>
</template>
<style lang="scss">
.review-item-container {
  z-index: 3;
  position: relative;
  max-width: 750px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(7px);
  width: 100%;
  padding: 30px 20px;

  .name-wrapper {
    display: flex;
    align-items: center;
    column-gap: 12px;
    margin-bottom: 10px;

    .name {
      span {
        font-size: 23.501px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #fff;
      }
    }
  }

  .rate-container {
    display: flex;
    align-items: center;
    column-gap: 12px;
    margin-bottom: 10px;

    .rate-text {
      font-size: 23.501px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: #fff;
    }
  }

  .review-text-container {
    p {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #fff;
      word-break: break-word;
      word-wrap: break-word;
    }
  }
}

.review-wrapper {
  background: url('/assets/bg.jpeg');
  padding: 120px 0;
  background-size: cover;
  position: relative;
  max-width: 100vw;
  width: 100%;

  .bg-review-place {
    position: absolute;
    max-width: 100vw;
    width: 100%;
    background: #0099CC;
    z-index: 2;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.189;
  }

  .top-line-container {
    position: relative;
    z-index: 3;
    width: 60%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 30px;

    .content-title {
      width: 60%;
      margin: 0 auto;
    }

    .h2 {
      font-size: 3em;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.72px;
      color: #fff;
      margin-bottom: 20px;

      span {
        color: #09C;
      }
    }

    .subtitle-wrapper {
      color: #fff;

      p {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.3px;

      }
    }
  }
}
</style>
