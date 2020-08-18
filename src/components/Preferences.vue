<template>
  <div class="preferences">
    <b-container>
      <h1 class="text-left mt-3">Preferences</h1>
      <hr />
      <div class="form-group1 inline-block">
        <label for="Textarea1">Keywords</label>
        <textarea class="form-control d-flex p-2" id="Textarea1" rows="3">corona covid19 كورونا المغرب الموت مرض maroc morocco وزارة_الصحة</textarea>
      </div>
      <br/>
      <div class="form-group1">
        <label for="Textarea2">Hashtags</label>
        <textarea class="form-control rounded-0" id="Textarea2" rows="3">كورونا كورونا_المغرب المغرب Covid19 coronavirus maroc وزارة_الصحة مواجهة_كورونا</textarea>
      </div>
      <br/>
      <br/>
      <div class="form-group1">
        <label for="Textarea3">Countries</label>
        <textarea class="form-control rounded-0" id="Textarea3" rows="3">MA FR DE EN ES TN DZ EG</textarea>
      </div>
      <br/>
      <button type="button" class="btn btn-primary">Save</button>
      <br/>
      <br/>
      <br/>
    </b-container>
  </div>
</template>

<script>


export default {
  name: "Preferences",
  data: function() {
    return {

    };
  },
  components: {
    
  },
  methods: {
    
  }
};
</script>
<style scoped>
textarea{
  word-spacing: 30px;
}
</style>