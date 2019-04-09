<template>
  <div class="page-nuxt">
    <nuxt-link to="/">
      home
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class PageNuxt extends Vue {}
</script>
