<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img src="../assets/logo.svg" alt="" class="img"/>
        <div>Minha loja de camisas</div>
      </div>

    </header>
    <nav-menu></nav-menu>
    <router-view></router-view>

  </div>
</template>

<script>
import NavMenu from './NavMenu.vue'
export default{
  components:{
    NavMenu
  }
}
</script>

<style lang="stylus">
@import '../style/main';
</style>

<style lang="stylus" scoped>
.header{
  .img{
    width: 64px;
    height: 64px;
  }

}
</style>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>

