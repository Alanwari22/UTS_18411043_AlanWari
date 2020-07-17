<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>

          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'NIK',
          align: 'center',
          field: row => row.nik,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'noKk', align: 'center', label: 'No KK', field: 'noKk', sortable: true },
        { name: 'namaLengkap', align: 'center', label: 'Nama Lengkap', field: 'namaLengkap', sortable: true },
        { name: 'alamat', align: 'center', label: 'Alamat', field: 'alamat' },
        { name: 'jenisKelamin', align: 'center', label: 'Jenis Kelamin', field: 'jenisKelamin' },
        { name: 'agama', align: 'center', label: 'Agama', field: 'agama' },
        { name: 'noTelp', align: 'center', label: 'No Telp', field: 'noTelp' }

      ],
      data: [
        {
          nik: '18062604',
          noKk: '18062628',
          namaLengkap: 'Alan Wari',
          alamat: 'Tanggamus',
          jenisKelamin: 'L',
          agama: 'Islam',
          noTelp: '08127292xxxx'
        },
        {
          nik: '18062611',
          noKk: '18062620',
          namaLengkap: 'Nazwa',
          alamat: 'Tanggamus',
          jenisKelamin: 'P',
          agama: 'Islam',
          noTelp: '08123567xxxx'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
