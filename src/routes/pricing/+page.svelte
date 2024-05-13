<script>
  export let data
</script>

<h1>Pricing</h1>

{#each data.products as product}
  <section>
    <h2>{product.name}</h2>
    <p>
      Price: {((product.default_price?.unit_amount || 0) / 100).toLocaleString('en-US', { style: 'currency', currency: 'usd' })}
    </p>
    <a href="/billing/checkout?id={product.default_price?.id}">Sign up</a>
  </section>
{/each}

<h2>Debug</h2>

<pre>products = {JSON.stringify(data.products, null, 2)}</pre>
