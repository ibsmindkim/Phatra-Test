<!-- Please remove this file from your project -->
<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-btn depressed>
      Normal
    </v-btn>
    <v-btn
      depressed
      color="primary"
    >
      Primary
    </v-btn>
    <v-btn
      depressed
      color="error"
    >
      Error
    </v-btn>
    <v-btn
      depressed
      disabled
    >
      Disabled
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>
