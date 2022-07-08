<template>
  <div>
    Nuxt module playground!

    <template v-if="data">
      <p v-for="(ship, i) of data?.ships" :key="ship.id">
        {{ i + 1 }}: {{ ship }}
      </p>
    </template>
    <p v-if="error">
      error: {{ error }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const { data, error } = useSpaceX('query { ships { id name } }')
</script>
