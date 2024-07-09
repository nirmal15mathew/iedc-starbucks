<script>
  import RewardPage from "./lib/RewardPage.svelte"
  import Header from "./lib/Header.svelte";
  import GiftPage from "./lib/GiftPage.svelte";
  import MenuPage from "./lib/MenuPage.svelte";

  const routes = [
    MenuPage, RewardPage, GiftPage
  ]
  let activeRoute = 2;

  function selectRoute(route) {
    activeRoute = route
  }
</script>
<div class="bg-white text-gray-800" id="main">
  <Header activeRoute={activeRoute} routeSelector={selectRoute} routes={["MENU", "REWARDS", "GIFT CARDS"]}></Header>
  <svelte:component this={routes[activeRoute]}></svelte:component>
</div>