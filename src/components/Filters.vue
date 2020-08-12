<template>
  <div style="font-size:14px;">
    <!-- language -->
    <b-field class="label" style="flex-direction:column" label="Language">
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          JavaScript
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          Python
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          C#
        </b-checkbox>
      </div>
    </b-field>

    <!-- framework  -->
    <b-field
      class="label"
      style="flex-direction:column"
      label="Front-end Framework"
    >
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          Vue.js
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          React
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          jQuery
        </b-checkbox>
      </div>
    </b-field>

    <!-- css  -->
    <b-field class="label" style="flex-direction:column" label="CSS Framework">
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          Bulma (Buefy)
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          Bootstrap
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          Quasar
        </b-checkbox>
      </div>
    </b-field>

    <!-- country  -->
    <b-field class="label" style="flex-direction:column" label="Country">
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          China
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          USA
        </b-checkbox>
      </div>
    </b-field>

    <!-- time period  -->
    <b-field class="label" style="flex-direction:column" label="Time Frame">
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          All
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          Last month
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          Last 3 months
        </b-checkbox>
      </div>
      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
          Last 6 months
        </b-checkbox>
      </div>

      <div>
        <b-checkbox
          type="is-primary"
          v-model="checkbox"
          @input="test()"
          :class="checkbox ? 'test' : ''"
        >
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
  },
  methods: {
    test() {
      console.log("test");
    }
  }
};
</script>

<style lang="scss">
#app {
  .control-label {
    font-weight: 400;
  }
}

label.label {
  font-weight: bold;
}

#app .test .check.is-primary {
  background: #1bbcf0
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath style='fill:%-2' d='M 0.04038059,0.6267767 0.14644661,0.52071068 0.42928932,0.80355339 0.3232233,0.90961941 z M 0.21715729,0.80355339 0.85355339,0.16715729 0.95961941,0.2732233 0.3232233,0.90961941 z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat center center;
}
</style>
