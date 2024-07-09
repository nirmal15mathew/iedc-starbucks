<script>
  import logo from "../assets/starbucks.svg";
  import mapPin from "../assets/map-pin.svg";
  import burger from "../assets/menu.svg";

  export let activeRoute;
  export let routeSelector;
  export let routes = [];

  let sidebarOpen = false;
</script>

<header class="flex px-4 w-full items-center justify-center shadow">
  <figure class="px-2 py-4 my-1 flex items-center justify-center">
    <img src={logo} alt="" class="w-8" />
  </figure>

  <!-- Large screen nav-->
  <nav class="justify-between w-full hidden md:flex">
    <ul class="flex font-bold">
      {#each routes as route, ind}
        <li
          class={activeRoute == ind ? "active nav-el" : "nav-el"}
          on:click={() => routeSelector(ind)}
        >
          {route}
        </li>
      {/each}
    </ul>

    <!-- Right nav-->
    <ul class="flex items-center justify-center gap-2 font-semibold">
      <li class="mr-2 px-2 flex gap-2">
        <img src={mapPin} alt="" width="20em" />
        Find a store
      </li>

      <li
        class="px-4 py-1 rounded-full border-[1px] hover:bg-slate-200 transition-colors cursor-pointer"
      >
        Sign in
      </li>
      <li
        class="px-4 bg-theme-black text-theme-white rounded-full py-1 hover:bg-slate-700 cursor-pointer"
      >
        Join now
      </li>
    </ul>
  </nav>

  <!-- Small screen nav-->
  <nav class="w-full md:hidden flex items-center justify-end h-full">
    <button class="rounded-full p-2 hover:bg-slate-200">
      <img src={burger} alt="" />
    </button>

    {#if sidebarOpen}
      <div class="fixed right-0 top-0 h-full w-full bg-[#00000080] grid grid-cols-2">
        <div></div>
        <div class="bg-white grid grid-rows-3">
          <div>
            close
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  MENU
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/if}
  </nav>
</header>

<style>
  .nav-el {
    @apply px-4 py-6 border-b-4  border-b-white flex items-center justify-center hover:text-light-green cursor-pointer;
  }
  .active {
    @apply border-b-light-green;
  }
</style>
