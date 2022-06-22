<template>
  <dashboard-card class="mb-3 ">
    <template #title><div class="my-0.5">Transaction</div> </template>
    <ul class="grid sm:grid-cols-4 lg:grid-cols-1">
      <item>
        <template #icon><CreditCardIcon /></template>
        <template #leading>MoMo</template>
        <template #subtitle>Add money</template>
      </item>
      <item>
        <template #icon><WifiIcon /></template>
        <template #leading>Bank</template>
        <template #subtitle>Transfert</template>
      </item>
      <item>
        <template #icon><QrcodeIcon /></template>
        <template #leading>Paypal</template>
        <template #subtitle>Change</template>
      </item>
      <item>
        <template #icon><DeviceMobileIcon /></template>
        <template #leading>Wallet</template>
        <template #subtitle>Link</template>
      </item>
    </ul>
  </dashboard-card>
</template>

<script>
import DashboardCard from "../DashboardCard.vue";
import {
  CreditCardIcon,
  WifiIcon,
  QrcodeIcon,
  DeviceMobileIcon,
} from "@heroicons/vue/outline";
import Item from "./TransactionItem.vue";
export default {
  components: {
    DashboardCard,
    Item,
    CreditCardIcon,
    WifiIcon,
    QrcodeIcon,
    DeviceMobileIcon,
  },
};
</script>

<style></style>
