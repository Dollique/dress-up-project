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
        <ItemCard>
          <template #cardTitle>Choose Body</template>
          <template #cardContent>
            <BodyType />
          </template>
        </ItemCard>

        <ItemCard>
          <template #cardNav>
            <DressUpTabs />
          </template>
          <template #cardContent>
            <ChooseClothing />
          </template>
        </ItemCard>

        <ItemCard>
          <template #cardTitle>Size</template>
          <template #cardContent>
            <ProductOptions optionName="sizes" />
            <ProductOptions optionName="lengths" />
          </template>
        </ItemCard>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts"></script>
