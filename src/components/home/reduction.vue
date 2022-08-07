<template>
  <div class="card">
    <div class="head">
      <div class="title">
        {{ reduction.pourcentage }}%
        <span class="important"> OFFERTS </span>
      </div>
      dès {{ reduction.limite }} FCFA
      <br />
      <span class="self-end">d’achats</span>
    </div>
    <div class="bg-white text-black font-medium rounded-b-xl p-3 text-fit">
      avec le code:
      <span class="important">{{ reduction.code }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reduction"],
};
</script>

<style scoped>
.card {
  display: flex;
  background-color: #6ee7b7;
  color: #ffffff;
  font-weight: 700;
  flex-direction: column;
  border-radius: 0.75rem;
  font-size: 1.5rem;
  justify-content: space-between;
  width: 24%;
}
.head {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.important {
  font-weight: bold;
  font-size: 2rem;
  color: black;
}
.text-fit {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title {
  font-size: 2rem;
  display: flex;
  align-items: center;
}
</style>
