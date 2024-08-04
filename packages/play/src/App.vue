<script setup lang="ts">

const click = (target: string) => console.log(target);

</script>

<template>
  <div>

    <g-button type="primary" size="large" @click="click('1')" :disabled="true">
      Button
    </g-button>

    <g-button :autofocus="true" type="inof" @click="click('2')" size="default">
      Button
    </g-button>

    <g-button type="success" size="small" @click="click('3')">
      Button
    </g-button>

  </div>
</template>