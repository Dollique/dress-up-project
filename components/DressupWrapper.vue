<template>
  <section class="relative">
    <SiteHeader />

    <article class="m-4 prose">
      <h1>DressUp Prototype</h1>
    </article>

    <section class="m-4 flex gap-4">
      <div class="grow flex justify-center items-center">
        <Preview />
      </div>
      <div class="flex flex-col">
        <section>
          <strong>Choose Body</strong>
          <div class="itemCard">
            <BodyType />
          </div>
        </section>

        <section>
          <DressUpTabs />

          <div class="itemCard">
            <ChooseClothing />
          </div>

          <strong>Size</strong>
          <div class="itemCard">
            <ProductOptions optionName="sizes" />
            <ProductOptions optionName="lengths" />
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts"></script>
