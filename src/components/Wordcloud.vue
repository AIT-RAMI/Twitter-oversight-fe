<template>
  <div id="app">
      <wordcloud
      :data="defaultWords"
      nameKey="name"
      valueKey="value"
      color="Accent">
      </wordcloud>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  name: 'app',
  components: {
    wordcloud
  },
  data() {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: [{
          "name": "Covid19 ",
          "value": 10
        },
        {
          "name": "كورونا",
          "value": 12
        },
        {
          "name": "المغرب ",
          "value": 7
        },
        {
          "name": "وزارة",
          "value": 9
        },
        {
          "name": "الصحة",
          "value": 4
        },
        {
          "name": "موت",
          "value": 9
        },
        {
          "name": "corona",
          "value": 9
        },
        {
          "name": "حالة",
          "value": 9
        },
        {
          "name": "Arab",
          "value": 6
        },
        {
          "name": "leaders",
          "value": 6
        },
        {
          "name": "المغاربة",
          "value": 6
        },
        {
          "name": "Menschheit",
          "value": 8
        },
        {
          "name": "zuversichtlich",
          "value": 6
        },
        {
          "name": "شفاء",
          "value": 6
        },
        {
          "name": "انتشار",
          "value": 6
        },
        {
          "name": "ظروف",
          "value": 6
        },
        {
          "name": "ministre",
          "value": 6
        },
        {
          "name": "santé",
          "value": 8
        },
        {
          "name": "hopitaux",
          "value": 8
        },
        {
          "name": "confinement",
          "value": 8
        }
      ]
    }
  }
}
</script>