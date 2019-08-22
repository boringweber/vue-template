//加载动画
<template>
  <div>
    <div class="loading">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
      <div class="circle circle-4"></div>
      <div class="circle circle-5"></div>
      <div class="circle circle-6"></div>
      <div class="circle circle-7"></div>
      <div class="circle circle-8"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading"
};
</script>
<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: rgba(204, 204, 204, 0.3);
  padding-top: 20%;
}

.circle-1 {
  animation: loading 4s infinite;
  animation-delay: 0.8s;
}

.circle-2 {
  animation: loading 4s infinite;
  animation-delay: 0.7s;
}

.circle-3 {
  animation: loading 4s infinite;
  animation-delay: 0.6s;
}

.circle-4 {
  animation: loading 4s infinite;
  animation-delay: 0.5s;
}

.circle-5 {
  animation: loading 4s infinite;
  animation-delay: 0.4s;
}

.circle-6 {
  animation: loading 4s infinite;
  animation-delay: 0.3s;
}

.circle-7 {
  animation: loading 4s infinite;
  animation-delay: 0.2s;
}

.circle-8 {
  animation: loading 4s infinite;
  animation-delay: 0.1s;
}

.circle {
  display: inline-block;
  background: #666;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #4b9cdb;
  transform: translateX(-300px);
  opacity: 0;
}

@keyframes loading {
  50% {
    transform: translateX(0px);
    opacity: 1;
  }

  100% {
    transform: translateX(300px);
    opacity: 0;
  }
}
</style>