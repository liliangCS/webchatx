<script setup>
import { ref } from "vue";
import { IconUser, IconLock } from "@arco-design/web-vue/es/icon";
import { userLogin } from "@/api";

const username = ref("");
const password = ref("");

const onLoginClick = () => {
  console.log(username.value);
  console.log(password.value);
  userLogin(username.value, password.value);
};

const onClearClick = () => {
  username.value = "";
  password.value = "";
};
</script>

<template>
  <div class="login-form">
    <a-input v-model="username" placeholder="请输入您的用户名" allow-clear>
      <template #prefix>
        <icon-user />
      </template>
    </a-input>
    <div class="v-gap"></div>
    <a-input-password v-model="password" placeholder="请输入您的密码" allow-clear>
      <template #prefix>
        <icon-lock />
      </template>
    </a-input-password>
    <div class="ctrl-box">
      <a-button type="primary" @click="onLoginClick">登录</a-button>
      <div class="h-gap"></div>
      <a-button @click="onClearClick">清空</a-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.v-gap {
  height: 10px;
}

.h-gap {
  display: inline-block;
  width: 10px;
}

.login-form {
  padding: 0 30px;

  .ctrl-box {
    margin-top: 20px;
  }
}
</style>
