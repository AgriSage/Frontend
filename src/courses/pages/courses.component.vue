<script>
export default {
  name: "CoursesPage"
}
</script>
<template>
  <h2 class="title1">Courso 1: Introduccion</h2>
    <div class="boxImg">
        <img class="imgRef" src="../../../public/imgRef.jpg">
    </div>
    <p class="boxTex">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut arcu in nunc rhoncus eleifend. Vivamus aliquet, eros at dapibus volutpat, nunc velit viverra mauris, sit amet mollis neque nulla vitae arcu. Maecenas mauris massa, pellentesque ac orci vitae, viverra facilisis eros. Nullam porttitor, arcu quis fermentum elementum, mauris urna elementum mi, eget condimentum nunc velit non erat. Mauris ut dictum diam. Sed quis nisl nunc. Nunc consectetur nibh placerat justo aliquam ullamcorper. In ullamcorper tincidunt dolor, ut tincidunt dui congue nec. Integer nec ante ut leo rhoncus facilisis. Curabitur tincidunt fermentum nisi in interdum. Aliquam sagittis mollis porttitor. In sed arcu ut eros ullamcorper viverra. Integer et sem maximus, dictum lacus venenatis, scelerisque metus. Mauris ullamcorper commodo dignissim. Nullam ac iaculis lorem.</p>
</template>

<style>
.title1{
    margin: 30px 50px;
}

.boxImg{
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgRef{
    height: 550px;
    width: 1010px;
    margin: 30px 0px;
}

.boxTex{
    margin: 50px 200px;
    font-size: 30px;
}
</style>
