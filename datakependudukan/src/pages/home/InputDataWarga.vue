<template>
  <q-page padding class="items-center-justify-center bg-black">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="NIK"
            lazy-rules
            color="teal"
            v-model="id"
            :rules="[
           val => val !== null && val !== '' || 'NIK Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="supervised_user_circle"/>
            </template>
          </q-input>

          <q-input
            label="No KK"
            lazy-rules
            color="teal"
            v-model="nama"
            :rules="[
           val => val !== null && val !== '' || 'No KK Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="supervisor_account"/>
            </template>
          </q-input>

          <q-input
            label="Nama Lengkap"
            lazy-rules
            color="teal"
            v-model="notelp"
            :rules="[
           val => val !== null && val !== '' || 'Nama Lengkap Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="how_to_reg"/>
            </template>
          </q-input>

          <q-input
            label="Alamat"
            lazy-rules
            color="teal"
            v-model="kendaraan"
            :rules="[
           val => val !== null && val !== '' || 'Alamat Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="where_to_vote"/>
            </template>
          </q-input>

          <q-input
            label="Jenis Kelamin"
            lazy-rules
            color="teal"
            v-model="kode"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Kelamin Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="accessibility"/>
            </template>
          </q-input>

          <q-input
            label="Agama"
            lazy-rules
            color="teal"
            v-model="kode"
            :rules="[
           val => val !== null && val !== '' || 'Agama Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="api"/>
            </template>
          </q-input>

          <q-input
            label="No Telp"
            lazy-rules
            color="teal"
            v-model="kode"
            :rules="[
           val => val !== null && val !== '' || 'No Telp Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_ic_call"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="done"
              label="Tambah Data"
              style="height: 50px"
              color="primary"
              to="/admin"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      nik: null,
      noKk: null,
      namaLengkap: null,
      alamat: null,
      jenisKelamin: null,
      agama: null,
      noTelp: null
    }
  }
}
</script>

<style scoped>

</style>
