  <template>
  <div id="app">
    <h1>Trabalho Revisão HTML</h1>
    <BackToHomeButtonVue v-if="!isHome"/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackToHomeButtonVue from './components/BackToHomeButton.vue'

export default defineComponent({
  setup() {
    return {}
  },
  components: {
    BackToHomeButtonVue
  },
  computed: {
    isHome: function() {
      return this.$route.name == 'home'
    }
  }
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  text-align: start;
  max-width: 700px;
  margin: 0 auto;
}

nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &:hover {
      color: #358eab;
    }

    &.router-link-exact-active {
      color: #358eab;
    }
  }
}
</style>
