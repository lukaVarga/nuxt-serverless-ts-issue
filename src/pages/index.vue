<template>
  <div class="page-index">
    <h1>Nuxt Serverless Template</h1>
    <nuxt-link :to="localePath('typescript')">
      typescript
    </nuxt-link>
    <nuxt-link to="/nuxt">
      nuxt
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
})
export default class PageIndex extends Vue {
}
</script>

<style lang="scss">
.page-index {
  h1 {
    color: #087f5b;
  }
}
</style>
