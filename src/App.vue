  <template>
  <div id="app">
    <div v-if="isFullPage">
        <router-view/>
    </div>
    <div v-else>
      <h1>Trabalho Revisão HTML</h1>
      <div class="container-small">
        <BackToHomeButtonVue v-if="!isHome"/>
        <hr>
        <router-view/>
      </div>
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
    },
    isFullPage: function() {
      return this.$route.fullPath.split('/')[1] == 'full';
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

.container-small {
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
