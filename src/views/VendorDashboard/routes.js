import email from "./email.vue"
import chat from "./chat.vue"
import calendrier from "./calendrier.vue"
import tasks from "./tasks.vue"
import ecom from "./ecom.vue"
import user from "./user.vue"

import catalogues from "./Catalogues/catalogues.vue"
import catalogues_new from "./Catalogues/new.vue"
import catalogues_edit from "./Catalogues/edit.vue"

import customers from "./Customers/customers.vue"
import customers_new from "./Customers/new.vue"
import customers_edit from "./Customers/edit.vue"

import sales from "./Sales/sales.vue"
import sales_view from "./Sales/view.vue"

import settings from "./settings.vue"
import marketting from "./marketting.vue"
import dashboard from "./dashboard.vue"

import product from "./Products/product.vue"
import product_new from "./Products/new.vue"
import product_edit from "./Products/edit.vue"

const routes = [
    { path: "", component: dashboard, },
    { path: "email", component: email, },
    { path: "chat", component: chat, },
    { path: "calendrier", component: calendrier, },
    { path: "tasks", component: tasks, },
    { path: "e-com", component: ecom, },
    { path: "user", component: user, },

    { path: "catalogues", component: catalogues, },
    { path: "catalogues/new", component: catalogues_new, },
    { path: "catalogues/edit/:id", component: catalogues_edit, },
    
    { path: "customers", component: customers, },
    { path: "customers/new", component: customers_new, },
    { path: "customers/edit/:id", component: customers_edit, },

    { path: "sales", component: sales, },
    { path: "sales/:id", component: sales_view, },
    
    { path: "settings", component: settings, },
    { path: "marketting", component: marketting, },

    { path: "product", component: product, },
    { path: "product/new", component: product_new, },
    { path: "product/edit/:id", component: product_edit, },
]
export default routes;