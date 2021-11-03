import { createRouter, createWebHistory } from 'vue-router'

//對應的虛擬路徑
const routes = [
  //登入頁面
  {
    path: '/login', 
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    meta: {
      breadcrumb: [
      {
        name: '登入頁面'
      }]
    }
  },
  {
    path: '/logout', 
    component: () => import(/* webpackChunkName: "Logout" */ '../views/Logout.vue'),
    meta: {
      breadcrumb: [
      {
        name: '登入頁面'
      }]
    }
  },
  {
    path: '/adminpersonalset', 
    component: () => import(/* webpackChunkName: "AdminPersonalSet" */ '../admin/views/AdminPersonalSet.vue'),
    meta: {
      breadcrumb: [
      {
        name: '個人化設定'
      }]
    }
  },
// 前台
  {
    // index
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../Home.vue'),
    meta: {
      breadcrumb: [{
        name: '首頁'
      }]
    }
  },
  {
    // siruba生產線資訊
    path: '/line_balance',
    name:'SirubaLineBalance',
    component: () => import(/* webpackChunkName: "SirubaLineBalance" */ '../views/SirubaLineBalance.vue'),
    meta: {
      breadcrumb: [
        {
          name: '生產線資訊'
        }
      ]
    }
  },
  {
    // 產線狀態
    path: '/machine_status',
    component: () => import(/* webpackChunkName: "MachineStatus" */ '../views/MachineStatus.vue'),
    meta: {
      breadcrumb: [
      {
        name: '機器狀況'
      }]
    }
  },
  {
    // 機器狀況
    path: '/machine_online',
    component: () => import(/* webpackChunkName: "OnLine" */ '../views/machines/OnLine.vue'),
    meta: {
      breadcrumb: [
      {
        name: '機器狀況'
      }]
    }
  },
  {
    // 機器狀況
    path: '/machine_offline',
    component: () => import(/* webpackChunkName: "OffLine" */ '../views/machines/OffLine.vue'),
    meta: {
      breadcrumb: [
      {
        name: '機器狀況'
      }]
    }
  },
  {
    // 機器狀況
    path: '/machine_out_of_order',
    component: () => import(/* webpackChunkName: "OutOfOrder" */ '../views/machines/OutOfOrder.vue'),
    meta: {
      breadcrumb: [
      {
        name: '機器狀況'
      }]
    }
  },
  {
    // 機器狀況
    path: '/machine_warning',
    component: () => import(/* webpackChunkName: "Warning" */ '../views/machines/Warning.vue'),
    meta: {
      breadcrumb: [
      {
        name: '機器狀況'
      }]
    }
  },
  {
    // 產線狀態 out of order
    path: '/machine_status_out_of_order',
    component: () => import(/* webpackChunkName: "MachineStatus" */ '../views/MachineStatusOutOfOrder.vue'),
    meta: {
      breadcrumb: [
      {
        name: '機器狀況'
      }]
    }
  },
  {
    // 產線狀態 warning
    path: '/machine_status_warning',
    component: () => import(/* webpackChunkName: "MachineStatus" */ '../views/MachineStatusWarning.vue'),
    meta: {
      breadcrumb: [
      {
        name: '機器狀況'
      }]
    }
  },
  {
    // 產線效率
    path: '/efficiency',
    component: () => import(/* webpackChunkName: "Efficiency" */ '../views/Efficiency.vue'),
    meta: {
      breadcrumb: [
      {
        name: '產線效率'
      }]
    }
  },
  {
    // 產線效率
    path: '/efficiency_daily',
    name:'EfficiencyDaily',
    component: () => import(/* webpackChunkName: "EfficiencyDaily" */ '../views/EfficiencyDaily.vue'),
    props:true,
    meta: {
      breadcrumb: [
      {
        name: '產線效率'
      }]
    }
  },
  {
    // siruba產線效率
    path: '/productivity',
    name:'Productivity',
    component: () => import(/* webpackChunkName: "SirubaProductivity" */ '../views/SirubaProductivity.vue'),
    props:true,
    meta: {
      breadcrumb: [
      {
        name: '產線效率'
      }]
    }
  },

// 後台
  // 設定總覽(工廠相關)
  {
    path: '/factory_settings',
    component: () => import(/* webpackChunkName: "FactorySettings" */ '../admin/views/FactorySettings.vue'),
    meta: { 
      //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
      requiresAuth: true , //1.許可權 
      keepAlive:true, //2.記憶體快取，單網頁切換
      breadcrumb: [
        {
          name: '設定總覽'
        }
      ]
    }
  },  
      //產品設定
      {
        path: '/product_set',
        name:'ProductSet',
        component: () => import(/* webpackChunkName: "TheProductSet" */ '../admin/views/factory_settings/TheProductSet.vue'),
        props:true,
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
              link:'/product_line'
            },
            {
              name: '產品設定',
            }
          ]
        }
      },
      //製程新增
      {
        path: '/product_set_add',
        name:'ProductSetAdd',
        component: () => import(/* webpackChunkName: "TheProductSetAdd" */ '../admin/views/factory_settings/TheProductSetAdd.vue'),
        props:true,
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
              link:'/product_line'
            },
            {
              name: '產品設定',
              link:'/product_set'
            },
            {
              name: '新增產品',
            }
          ]
        }
      },
      //製程修改
      {
        path: '/product_set_edit',
        name:'ProductSetEdit',
        component: () => import(/* webpackChunkName: "TheProductSetEdit" */ '../admin/views/factory_settings/TheProductSetEdit.vue'),
        props:true,
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
              link:'/product_line'
            },
            {
              name: '產品設定',
              link:'/product_set'
            },
            {
              name: '製程設定',
            }
          ]
        }
      },
       //製程修改最後頁
       {
        path: '/product_set_next',
        name:'ProductSetEditNext',
        component: () => import(/* webpackChunkName: "TheProductSetEditNext" */ '../admin/views/factory_settings/TheProductSetEditNext.vue'),
        props:true,
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
              link:'/product_line'
            },
            {
              name: '產品設定',
              link:'/product_set'
            },
            {
              name: '製程檔案修改',
            }
          ]
        }
      },
      //生產線-產品
      {
        path: '/product_line',
        name:'ProductLine',
        component: () => import(/* webpackChunkName: "ProductAndLine" */ '../admin/views/factory_settings/ProductAndLine.vue'),
        props:true,
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
            }
          ]
        }
      },
      {
        path: '/errorcode_set',
        name:'TheErrorCodeSet',
        component: () => import(/* webpackChunkName: "TheErrorCodeSet" */ '../admin/views/factory_settings/TheErrorCodeSet.vue'),
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '錯誤碼設定',
            }
          ]
        }
      },
      {
        path: '/maintain_reason_set',
        component: () => import(/* webpackChunkName: "TheMaintainReason" */ '../admin/views/factory_settings/TheMaintainReason.vue'),
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '保修內容設定',
            }
          ]
        }
      },
      {
        path: '/machinelist_set',
        component: () => import(/* webpackChunkName: "TheMachineListSet" */ '../admin/views/factory_settings/TheMachineListSet.vue'),
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '機台設定清單',
            }
          ]
        }
      },
      {
        path: '/machinelist_set_link',
        name:'MachinelistSetLink',
        component: () => import(/* webpackChunkName: "TheMachineListSet" */ '../admin/views/factory_settings/TheMachineListSetLink.vue'),
        props:true,
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '機台設定清單',
            }
          ]
        }
      },
      {
        path: '/production_line_set',
        component: () => import(/* webpackChunkName: "TheProductionLineSet" */ '../admin/views/factory_settings/TheProductionLineSet.vue'),
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
              link:'/product_line'
            },
            {
              name: '生產線設定',
            }
          ]
        }
      },
      {
        path: '/production_line_setnew',
        name:'LineSetNew',
        component: () => import(/* webpackChunkName: "TheProductionLineSet" */ '../admin/views/factory_settings/TheProductionLineSetNew.vue'),
        props:true,
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
              link:'/product_line'
            },
            {
              name: '生產線設定',
              link:'/production_line_set'
            },
            {
              name: '新增生產線',
            }
          ]
        }
      },
      //生產線修改頁面
      {
        path: '/production_line_setedit',
        name:'LineSetEdit',
        component: () => import(/* webpackChunkName: "TheProductionLineSetEdit" */ '../admin/views/factory_settings/TheProductionLineSetEdit.vue'),
        props:true,
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
              link:'/product_line'
            },
            {
              name: '生產線設定',
              link:'/production_line_set'
            },
            {
              name: '修改生產線',
            }
          ]
        }
      },
      {
        path: '/production_line_rule',
        component: () => import(/* webpackChunkName: "TheProductionLineSet" */ '../admin/views/factory_settings/TheProductionLineRule.vue'),
        meta: { 
          //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
          requiresAuth: true , //1.許可權 
          keepAlive:true, //2.記憶體快取，單網頁切換
          breadcrumb: [
            {
              name: '設定總覽',
              link:'/factory_settings'
            },
            {
              name: '生產線-產品設定',
              link:'/product_line'
            },
            {
              name: '生產線設定',
              link:'/production_line_set'
            },
            {
              name: '使用者權限設定',
            }
          ]
        }
      },
  //員工清單(人員相關)
  {
    path: '/employee_settings',
    component: () => import(/* webpackChunkName: "AdminEmployee" */ '../admin/views/AdminEmployee.vue'),
    meta: { 
      //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
      requiresAuth: true , //1.許可權 
      keepAlive:true, //2.記憶體快取，單網頁切換
      breadcrumb: [
        {
          name: '設定總覽',
          link:'/factory_settings'
        },
        {
          name: '員工清單',
        }
      ]
    }
  },
  {
    path: '/employee_import',
    component: () => import(/* webpackChunkName: "AdminEmployeeImport" */ '../admin/views/AdminEmployeeImport.vue'),
    meta: { 
      //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
      requiresAuth: true , //1.許可權 
      keepAlive:true, //2.記憶體快取，單網頁切換
      breadcrumb: [
        {
          name: '設定總覽',
          link:'/factory_settings'
        },
        {
          name: '員工清單',
          link:'/employee_settings'
        },
        {
          name: '員工匯入'
        }
      ]
    }
  },
  {
    path: '/ver_list',
    component: () => import(/* webpackChunkName: "AdminSetVerList" */ '../admin/views/AdminSetVerList.vue'),
    meta: { 
      //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
      requiresAuth: true , //1.許可權 
      keepAlive:true, //2.記憶體快取，單網頁切換
      breadcrumb: [
        {
          name: '設定總覽',
          link:'/factory_settings'
        },
        {
          name: '版本設定',
        }
      ]
    }
  },
  {
    path: '/index_set',
    component: () => import(/* webpackChunkName: "AdminSetIndexSet" */ '../admin/views/AdminSetIndexSet.vue'),
    meta: { 
      //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
      requiresAuth: true , //1.許可權 
      keepAlive:true, //2.記憶體快取，單網頁切換
      breadcrumb: [
        {
          name: '設定總覽',
          link:'/factory_settings'
        },
        {
          name: '首頁設定',
        }
      ]
    }
  },
  {
    path: '/user_set',
    component: () => import(/* webpackChunkName: "AdminSetUserSet" */ '../admin/views/AdminSetUserSet.vue'),
    meta: { 
      //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
      requiresAuth: true , //1.許可權 
      keepAlive:true, //2.記憶體快取，單網頁切換
      breadcrumb: [
        {
          name: '設定總覽',
          link:'/factory_settings'
        },
        {
          name: '使用者設定',
        }
      ]
    }
  },
  {
    path: '/user_edit',
    component: () => import(/* webpackChunkName: "AdminSetUserSetEdit" */ '../admin/views/AdminSetUserSetEdit.vue'),
    meta: { 
      //true為需要會員驗證，搭配main.js裡的 router.beforeEach()
      requiresAuth: true , //1.許可權 
      keepAlive:true, //2.記憶體快取，單網頁切換
      breadcrumb: [
        {
          name: '設定總覽',
          link:'/factory_settings'
        },
        {
          name: '使用者設定',
          link:'/user_set'
        },
        {
          name: '使用者編輯',
        }
      ]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  // 根據指定架站位置的資料夾
  history: createWebHistory('/wifi/'),
  routes
})

export default router
