<script setup>
import { IconUser, IconLock } from "@arco-design/web-vue/es/icon";
</script>

<template>
  <div class="register-form">
    <a-input placeholder="请输入注册的用户名" allow-clear>
      <template #prefix>
        <icon-user />
      </template>
    </a-input>
    <div class="v-gap"></div>
    <a-input-password placeholder="请设置您的密码" allow-clear>
      <template #prefix>
        <icon-lock />
      </template>
    </a-input-password>
    <div class="v-gap"></div>
    <a-input-password placeholder="二次确认密码" allow-clear>
      <template #prefix>
        <icon-lock />
      </template>
    </a-input-password>
    <div class="v-gap"></div>
    <a-input placeholder="请输入注册码" allow-clear>
      <template #prefix>
        <icon-user />
      </template>
    </a-input>
    <div class="ctrl-box">
      <a-button type="primary">注册</a-button>
      <div class="h-gap"></div>
      <a-button>清空</a-button>
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

.register-form {
  padding: 0 30px;

  .ctrl-box {
    margin-top: 20px;
  }
}
</style>
