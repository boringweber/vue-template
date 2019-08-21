<template>
  <div>
    <h3>vue 基础架构模板</h3>
    <ol>
      <li>
        .env.development 开发环境配置信息
      </li>
      <li>
        .env.production 正式环境配置信息
      </li>
      <li>
        src/assets/utils 存放js信息
      </li>
      <li>
        src/assets/utils/request.js axios接口请求统一封装
      </li>
      <li>
        src/assets/api 接口api存放目录，按模块进行区分
      </li>
      <li>
        src/assets/style/ 存放样式信息
      </li>
      <li>
        src/assets/style/reset.scss 重置样式代码
      </li>
      <li>
        src/assets/style/variable.scss 全局样式变量
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "features"
};
</script>
<style lang="scss" scoped>
ol {
  width: 30%;
  margin: 0 auto;
  text-align: left;
  li {
    list-style: decimal;
  }
}
</style>
