<template>
  <div class="logo-container">
    <img class="logo-icon" src="../assets/logo.svg" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Logo extends Vue {}
</script>
<style lang="scss" scoped>
.logo-icon {
  width: max(30%, 250px);
  margin-bottom: clamp(32px, 5%, 38px);
}
</style>
