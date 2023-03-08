import './styles/style.css'
import gsap from 'gsap'
import $ from 'jquery'
import SplitType from 'split-type'

console.log(gsap)
console.log($)
console.log(SplitType)

// split type

let typeSplit = new SplitType('.work_title', {
  types: 'words, chars',
  tagName: 'span',
})

console.log(typeSplit)

$('.work_link').each(function () {
  let firstChars = $(this).find('.work_title.is-1 .char')
  let secondChars = $(this).find('.work_title.is-2 .char')

  let tl = gsap.timeline({ paused: true })
  tl.to(firstChars, {
    translateY: '-0.2em',
    rotationY: '-5.7deg',
    rotationX: '-90deg',
    stagger: { each: 0.08 },
    ease: 'power3.inOut',
    duration: 0.7,
  })
  tl.from(
    secondChars,
    {
      translateY: '0.2em',
      rotationY: '5.7deg',
      rotationX: '90deg',
      stagger: { each: 0.08 },
      ease: 'power3.inOut',
      duration: 0.7,
    },
    0.1
  )

  $(this).on('mouseenter', function () {
    tl.restart()
  })

  $(this).on('mouseleave', function () {
    tl.reverse()
  })
})
