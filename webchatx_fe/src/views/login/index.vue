<script setup>
import Loader from "@/components/Loader.vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
defineOptions({
  name: "login-view"
});
</script>

<template>
  <div class="login-view">
    <div class="form-box">
      <a-tabs default-active-key="1" :justify="false">
        <a-tab-pane key="1" title="登录">
          <LoginForm />
        </a-tab-pane>
        <a-tab-pane key="2" title="注册">
          <RegisterForm />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-view {
  background-color: #e8eaf2;
  height: 100vh;
  position: relative;

  .form-box {
    width: 360px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
