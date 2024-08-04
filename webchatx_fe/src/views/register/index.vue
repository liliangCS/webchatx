<script setup>
import { useRouter } from "vue-router";
defineOptions({
  name: "register-view"
});
const router = useRouter();

const onReturnClick = () => {
  router.push("/login");
};
</script>

<template>
  <div class="register-view">
    <div class="form-box">
      <h1>创建账号</h1>
      <div class="username">
        <span class="iconfont icon-username" />
        <input type="text" placeholder="用户名" />
      </div>
      <div class="password">
        <span class="iconfont icon-password" />
        <input type="password" placeholder="密码" />
      </div>
      <div class="sure">
        <span class="iconfont icon-password" />
        <input type="password" placeholder="确认密码" />
      </div>
      <div class="register-code">
        <span class="iconfont icon-regcode" />
        <input type="text" placeholder="注册码" />
      </div>
      <div class="register-btn">注册</div>
      <div class="other">
        <span @click="onReturnClick">已有账号，返回登录</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.register-view {
  height: 100vh;
  position: relative;
  background-image: url(@/assets/images/login_bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 224, 158, 0.2);
    z-index: 1;
  }

  .form-box {
    width: 400px;
    position: absolute;
    left: 50%;
    top: calc(50% - 60px);
    transform: translate(-50%, -50%);
    z-index: 2;

    h1 {
      text-align: center;
      color: #fff;
      margin-bottom: 60px;
    }

    .username,
    .password,
    .sure,
    .register-code {
      box-sizing: border-box;
      width: 100%;
      height: 60px;
      border-radius: 30px;
      background-color: rgba(255, 255, 255, 0.32);
      margin-bottom: 30px;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 0 25px;
      // padding: 0;

      .iconfont {
        font-size: 24px;
      }

      input {
        margin-left: 15px;
        border: none;
        background-color: transparent;
        outline: none;
        caret-color: #000;
        letter-spacing: 1px;
        color: #fff;
        flex: 1;
        font-size: 18px;
        padding: 0;

        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
          user-select: none;
        }
      }
    }

    .register-btn {
      width: 100%;
      height: 60px;
      border-radius: 30px;
      background-color: #3a62d7;
      color: #fff;
      line-height: 60px;
      text-align: center;
      font-size: 18px;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: #4b73e8;
      }
    }

    .other {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      color: rgba(255, 255, 255, 0.7);
      font-size: 18px;
      user-select: none;

      span {
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
