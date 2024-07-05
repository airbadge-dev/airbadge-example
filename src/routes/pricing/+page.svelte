<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData
</script>

<h1>Pricing</h1>

{#each data.products as product}
  {#if product.default_price && typeof(product.default_price) == 'object'}
    <section>
      <h2>{product.name}</h2>

      <p>
        Price: {((product.default_price.unit_amount || 0) / 100).toLocaleString('en-US', { style: 'currency', currency: 'usd' })}
      </p>

      <a href="/billing/checkout?id={product.default_price.id}">
        {#if product.default_price.type == 'recurring'}
          Subscribe
        {:else}
          Buy now
        {/if}
      </a>
    </section>
  {/if}
{/each}

<h2>Debug</h2>

<pre>products = {JSON.stringify(data.products, null, 2)}</pre>
