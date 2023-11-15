<script setup lang='ts'>
import './notel-button.css'
const props =withDefaults(defineProps<{
    size?:'small'|'medium'|'large',
    type?:'primary'|'warring'|'danger',
}>(),{
    size:'medium'
})
const className=computed(()=>{
    return {
        'notel-button':true,
        [`notel-button--${props.size}`]:true,
        [`notel-button--${props.type}`]:true
    }
})
</script>

<template>
    <div>
        <button :class="className">
        <slot>
            按钮
        </slot>
        </button>
    </div>
</template>

