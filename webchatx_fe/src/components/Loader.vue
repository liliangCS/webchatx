<script setup>
</script>

<template>
  <div class="loader">
    <div class="loader-circle"></div>
  </div>
</template>

<style lang="less" scoped>
.loader {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader-circle {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 3px solid transparent;
  border-top-color: #fff;
  animation: spin-1 1.8s linear infinite;

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 100%;
    border: 3px solid transparent;
    border-top-color: #a4a4a4;
    animation: spin-2 0.6s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 100%;
    border: 3px solid transparent;
    border-top-color: #d3d3d3;
    animation: spin-1 1s linear infinite;
  }
}

@keyframes spin-1 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-2 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
