
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/DataWarga.vue') },
      { path: 'inputdatawarga', component: () => import('pages/home/InputDataWarga.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  },
  {
    path: '/pengguna',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pengguna/DataWarga') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
