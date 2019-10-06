<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fugiat officia! Recusandae eos, illo nesciunt similique est explicabo blanditiis inventore quidem, facilis eius fugit rem iure perspiciatis quae aperiam? Minima!</p>
        <client-only>
          <img src="@/assets/img/progimgpng.png" alt srcset />
          <p>Lorem?, ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus officia recusandae reiciendis iste? Enim consequatur explicabo, aliquam unde fugit maiores dolorem omnis minus optio fuga exercitationem nihil necessitatibus iure.</p>
        </client-only>
        <Intro title="Lorem, ipsum dolor sit amet consectetur adipisicing elit" />
        <p>Lorem!, ipsum dolor sit amet consectetur adipisicing elit. Officia quod quidem iure obcaecati, nisi excepturi aspernatur nam commodi debitis. Exercitationem nisi saepe, nostrum dolores quaerat officia, eligendi, excepturi tenetur ex debitis perspiciatis fugiat. Doloremque eum rem odio vero laborum ut nostrum, quidem reprehenderit suscipit tempore, unde eaque, itaque quaerat nemo!</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    let title = "About my SSR blog",
      descr = "My SSR blog",
      type = "site";
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
</style>