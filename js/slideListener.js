function SlideIndex () {
  riot.observable(this)

  var slideIndex = 0

  var self=this;
  this.on('start', function (index) {
    slideIndex = index || slideIndex

    document.body.onkeyup = function (el) {
      var newIndex = slideIndex
      if (el.keyCode === 32) {
        self.trigger('space')
      } else {}
      if (el.keyCode === 37) {
        newIndex = Math.max(0, slideIndex - 1)
      } else if (el.keyCode === 39) {
        newIndex = slideIndex + 1
      }

      if (newIndex !== slideIndex) {
        slideIndex = newIndex
        self.trigger('slideChange', { index: newIndex })
      }
    }

    this.trigger('slideChange', { index: slideIndex })
  })
}
