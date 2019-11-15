<template>
  <div>
    <h1>App</h1>
    <div id="box">
      <p>我是p标签</p>
      <button class="btn1">btn1</button>
      <button class="btn2">btn2</button>
    </div>
    <div class="box1 active">111</div>
    <div class="box1">222</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Hello from './components/Hello'
  export default {
    name:'App',
    components: {Hello}
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  $color = red
  btnStyle(w,h,bgColor)
    width w
    height h
    background bgColor
    border none
    add(a,b)
      a+b
    h1
      color red
    #box
      p
        font-size 40px
        color $color
      .btn1
        btnStyle(100px, 100px, $color)
        padding add(20, 30px)
        box-sizing content-box
      .btn2
        btnStyle(200px, 200px, green)
    .box1
      font-size 40px
      &.active
        color $color
</style>
