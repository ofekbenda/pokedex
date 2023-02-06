<template>
  <button class="btn" @click="clickHandler">{{ text }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Button extends Vue {
  @Prop() readonly text!: string;
  @Prop({ required: false }) clickHandler?: () => void;
}
</script>
<style lang="scss" scoped>
.btn {
  background-color: $purple;
  border: none;
  color: $light-grey;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  border-radius: 9px;
  padding: 7px 15px;
  height: 36px;
}
.btn:hover {
  cursor: pointer;
}
</style>
