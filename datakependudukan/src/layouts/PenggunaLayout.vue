<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-blue-5 text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">Admin</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="black" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">Alan Wari</div>
                  <div>18411043</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img spinner-color="white"
                         placeholder-src="statics/admin.jpg"
                         src="statics/admin.jpg"/>
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <q-btn
                  color="purple"
                  label="Sign Out"
                  unelevated
                  size="sm"
                  v-close-popup
                  to="/">
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-blue-5 text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-blue-5 text-bold">
            <q-item-section>
              SINDAKEPKON DATAR LEBUAY
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">

              </q-avatar>
              <div class="text-weight-bold">Alan Wari</div>
              <div>18411043</div>
            </div>
          </q-item>
          <q-item-label header class="text-black">
            DATA PENDUDUK
          </q-item-label>

          <q-item clickable active-class="active" exact v-ripple to="/pengguna">
            <q-item-section avatar>
              <q-icon name="contact_mail" />
            </q-item-section>
            <q-item-section>
              Data Warga
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-yellow-12">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PenggunaLayout',
  data () {
    return {
      left: false
    }
  }
}
</script>
