<template>
  <footer class="footer">
    <div class="container">
      <p class="text-muted">&copy; Gaido Tristan 2023</p>
    </div>
    <div class="half-circle"></div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #ad1f36;
  color: #fff;
  padding: 10px;
  position: absolute;
  left: 0;
  width: 100vw;
}

.footer p {
  margin-bottom: 0;
  font-size: 14px;
  font-style: italic;
}

.footer::before {
  content: "";
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 50%;
  border: 4px solid #000;
}

.half-circle {
  position: absolute;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 50%;
  border: 4px solid #000;
  z-index: 1;
  overflow: hidden;
}

.half-circle::before {
  content: "";
  position: absolute;
  top: -6px;
  left: -6px;
  width: 16px;
  height: 16px;
  background-color: #ad1f36;
  border-radius: 50%;
  z-index: 1;
}

.half-circle::after {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  z-index: 2;
}
</style>
