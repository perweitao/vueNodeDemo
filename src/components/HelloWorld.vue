<template>
  <div class="hello">
    <div>{{menuDataLength}}</div>
  </div>
</template>

<script>
import { getMenuList } from "../api/api";
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      menuDataLength: 0
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let {code, data} = await getMenuList()
      this.menuDataLength = data.length;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
