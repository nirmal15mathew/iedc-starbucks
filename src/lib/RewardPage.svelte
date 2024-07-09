<script>
  import sp1 from "../assets/sp1.webp";
  import sp2 from "../assets/sp2.webp";
  import sp3 from "../assets/sp3.webp";
  import extras from "../assets/extras.webp";

  import cup from "../assets/pngegg.png";
</script>

<div>
  <!-- Sticky header-->
  <header
    class="bg-dark-green py-4 px-12 text-white font-bold text-sm sticky top-0"
  >
    STARBUCKS® REWARDS
  </header>
  <section
    class="w-full h-screen grid grid-rows-2 md:grid-cols-2 px-6 bg-blue-tone"
  >
    <div class="flex justify-end px-4 flex-col font-medium">
      <h2 class="text-4xl font-semibold py-2">
        FREE COFFEE <br />
        IS A TAP AWAY
      </h2>
      <h4 class="py-2 my-2 font-medium">Join now to start earning Rewards.</h4>
      <div class="my-4">
        <button class="rounded-full px-4 py-2 bg-light-green text-white my-2">
          Join Now
        </button>
        <br />
        <span>
          Or <a href="#" class="underline">join in the app</a> for the best experience
        </span>
      </div>
    </div>
    <div class="md:block hidden">
      <img src={cup} alt="" />
    </div>
  </section>

  <!-- Steps section -->
  <section class="min-h-screen md:h-screen w-full grid grid-rows-2 px-6">
    <div
      class="flex flex-col items-center justify-center md:justify-end py-2 my-4"
    >
      <h3 class="text-2xl font-semibold py-2 my-2">Getting started is easy</h3>
      <p class="py-1">Earn Stars and get rewarded in a few easy steps.</p>
    </div>

    <div
      class="grid md:grid-cols-3 grid-rows-3 p-4 mx-24 text-sm font-medium gap-8"
    >
      <div class="flex items-center text-center justify-start flex-col">
        <figure>
          <img src={sp1} alt="" width="50px" />
        </figure>
        <h4 class="text-xl font-semibold py-4">Create an account</h4>
        To get started, join now. You can also join in the app to get access to the
        full range of Starbucks® Rewards benefits.
      </div>
      <div class="flex items-center text-center justify-start flex-col">
        <figure>
          <img src={sp2} alt="" width="50px" />
        </figure>
        <h4 class="text-xl font-semibold py-4">Order and pay how you'd like</h4>
        Use cash, credit/debit card or save some time and pay right through the app.
        You’ll collect Stars all ways. Learn how
      </div>
      <div class="flex items-center text-center justify-start flex-col">
        <figure>
          <img src={sp3} alt="" width="50px" />
        </figure>
        <h4 class="text-xl font-semibold py-4">Create an account</h4>
        As you earn Stars, you can redeem them for Rewards—like free food, drinks,
        and more. Start redeeming with as little as 25 Stars!
      </div>
    </div>
  </section>

  <!-- Stars sections -->
  <section class="bg-[#d3e8e154] grid grid-rows-2">
    <h3
      class="h-28 flex items-center justify-center text-2xl font-semibold p-2"
    >
      Get your favourites for free
    </h3>
    <div class="flex justify-center items-end shadow-sm">
      <ul class="flex w-full justify-center">
        <li class="price-item active-item">25</li>
        <li class="price-item">100</li>
        <li class="price-item">200</li>
        <li class="price-item">300</li>
        <li class="price-item">400</li>
      </ul>
    </div>
  </section>
  <!-- Rewards choice section -->
  <section
    class="bg-blue-tone py-4 flex items-center justify-center flex-col md:flex-row"
  >
    <figure class="">
      <img src={extras} alt="" class="h-auto w-64" />
    </figure>
    <div>
      <h2 class="text-2xl font-semibold">Customize your drinks</h2>
      <span class="text-sm font-medium w-44 text-center">
        Make your drink just right with an extra espresso shot, <br />
        nondairy milk or a dash of your favorite syrup.
      </span>
    </div>
  </section>
</div>
<svelte:head>
  <title>Starbucks Rewards</title>
</svelte:head>

<style>
  .price-item {
    @apply px-4 text-2xl p-4 border-b-transparent border-b-4;
  }
  .active-item {
    @apply border-b-light-green;
  }
</style>
