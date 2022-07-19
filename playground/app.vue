<template>
  <p>Count: {{ data?.ships.length || 0 }}</p>
</template>

<script lang="ts" setup>
const { data, error } = useSpaceX('query { ships { id name } }')

if (error.value) {
  // eslint-disable-next-line no-console
  console.error(error.value)
}
</script>
