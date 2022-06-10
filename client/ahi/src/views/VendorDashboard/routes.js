import email from "./email.vue"
import chat from "./chat.vue"
import calendrier from "./calendrier.vue"
import tasks from "./tasks.vue"
import ecom from "./ecom.vue"
import user from "./user.vue"
import catalogues from "./catalogues.vue"
import customers from "./customers.vue"
import sales from "./sales.vue"
import settings from "./settings.vue"
import marketting from "./marketting.vue"
import dashboard from "./dashboard.vue"

const routes = [
    { path: "", component: dashboard, },
    { path: "email", component: email, },
    { path: "chat", component: chat, },
    { path: "calendrier", component: calendrier, },
    { path: "tasks", component: tasks, },
    { path: "e-com", component: ecom, },
    { path: "user", component: user, },
    { path: "catalogues", component: catalogues, },
    { path: "customers", component: customers, },
    { path: "sales", component: sales, },
    { path: "settings", component: settings, },
    { path: "marketting", component: marketting, },
]
export default routes;