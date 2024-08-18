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

    <div></div>

    <g-button-group :disabled="true">

      <g-button :autofocus="true" type="success" @click="click('2')">
        Button
      </g-button>
      <g-button :autofocus="true" type="success" @click="click('2')">
        Button
      </g-button>
      <g-button :autofocus="true" type="success" @click="click('2')">
        Button
      </g-button>

    </g-button-group>


    <div class="card_box">

      <GCard>
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
      </GCard>

      <GCard shadow="hover">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
      </GCard>

      <GCard shadow="always">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
      </GCard>

      
      <GCard :header="'我是header'">
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      </GCard>

      <GCard footer="我是footer">
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
      </GCard>

    </div>



  </div>
</template>

<style lang="css">
.card_box {
  gap: 6px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
</style>