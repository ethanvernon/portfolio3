<template>
  <div style="font-size:14px;">
    <!-- language -->
    <b-field class="label" label="Language">
      <div>
        <b-checkbox v-model="checkbox">
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          JavaScript
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          Python
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          C#
        </b-checkbox>
      </div>
    </b-field>

    <!-- framework  -->
    <b-field class="label" label="Front-end Framework">
      <div>
        <b-checkbox v-model="checkbox">
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          Vue.js
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          React
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          jQuery
        </b-checkbox>
      </div>
    </b-field>

    <!-- css  -->
    <b-field class="label" label="CSS Framework">
      <div>
        <b-checkbox v-model="checkbox">
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          Bulma (Buefy)
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          Bootstrap
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          Quasar
        </b-checkbox>
      </div>
    </b-field>

    <!-- country  -->
    <b-field class="label" label="Country">
      <div>
        <b-checkbox v-model="checkbox">
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          China
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          USA
        </b-checkbox>
      </div>
    </b-field>

    <!-- time period  -->
    <b-field class="label" label="Time Frame">
      <div>
        <b-checkbox v-model="checkbox">
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          Last month
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          Last 3 months
        </b-checkbox>
      </div>
      <div>
        <b-checkbox v-model="checkbox">
          Last 6 months
        </b-checkbox>
      </div>

      <div>
        <b-checkbox v-model="checkbox">
          Last 1 year
        </b-checkbox>
      </div>

      <div>
        <div style="padding-left:.25rem; ">
          <span style="cursor:pointer;">
            <vue-fontawesome icon="chevron-down" />
            <span style="color:blue;"> Custom range...</span>
          </span>
        </div>
      </div>
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true
    };
  }
};
</script>

<style style="scss">
label.label {
  font-weight: bold;
}

.label {
  margin-top: 1rem;
}
</style>
