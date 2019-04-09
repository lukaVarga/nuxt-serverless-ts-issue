<template>
  <v-app>
    <v-content>
      <v-container fluid grid-list-lg>
        <div class="default-layout">
          <Nuxt />
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({
})
export default class DefaultLayout extends Vue {
  /**
   * overide tags in <head> with 'head()' method
   */
  private head(): any {
    return this.$nuxtI18nSeo();
  }
}
</script>

<style lang="scss">
.page-index {
  h1 {
    color: #087f5b;
  }
}
</style>
