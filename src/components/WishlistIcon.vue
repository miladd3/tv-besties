<script setup>
defineProps({
  fill: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <svg width="18" height="18" viewBox="0 0 18 18" :fill="fill" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.74998 17.66L15.934 10.562C18.611 7.67801 18.493 4.05601 16.688 1.85701C15.79 0.762013 14.482 0.0410136 12.968 0.00201364C11.675 -0.0319864 10.316 0.432013 9.00498 1.44401C7.68998 0.432013 6.32698 -0.0319864 5.03198 0.00201364C3.51698 0.0420136 2.20698 0.762013 1.30798 1.85701C-0.498019 4.05801 -0.607019 7.68001 2.07998 10.563L8.26298 17.66C8.45298 17.876 8.72298 18 9.00598 18C9.14694 17.9998 9.28622 17.9693 9.4144 17.9107C9.54258 17.852 9.65668 17.7666 9.74898 17.66H9.74998Z"
      :fill="fill || 'url(#paint0_linear_6_30)'"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6_30"
        x1="9.00006"
        y1="0.000274658"
        x2="9.00006"
        y2="18"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#A6042B" />
        <stop offset="1" stop-color="#DD131F" />
        <stop offset="1.0001" stop-color="#DD131F" />
      </linearGradient>
    </defs>
  </svg>
</template>
