<template>
    <div class="accordion" ref="accordion">
        <div class="accordion__header">
            <button class="accordion__header-toggle" ref="accordionToggle"><span>{{ props.title }}<span class="plus"><span></span><span></span></span></span></button>
        </div>
        <div class="accordion__content" ref="accordionContent">
            <slot/>
        </div>
    </div>
</template>
<script setup>
import {ref, onMounted} from 'vue';

const props = defineProps({
    title: String,
})

const accordionToggle = ref(null)
const accordion = ref(null)
const accordionContent = ref(null)

const toggled = ref(false);

onMounted(() => {
    accordionToggle.value.addEventListener('click', () => {
        toggled.value = !toggled.value;

        if(toggled.value)
        accordion.value.classList.add("shown");
        
        const animationClass = toggled.value ? "animate" : "animate-reverse";
        accordionContent.value.classList.add(animationClass);
        
        
        accordionContent.value.addEventListener('animationend', () => {
            accordionContent.value.classList.remove(animationClass);
            if(!toggled.value)
                accordion.value.classList.remove("shown");
        }, {once: true})
    })
})
</script>
<style lang="scss" scoped>
@use "@/styles/generic" as g;
.accordion{
    background-color: g.$bg-light;
    margin-top: 16px;
    &__header-toggle{
        padding: 24px;
        width: 100%;
        background-color: inherit;
        color: inherit;
        appearance: none;
        border: 0;
        text-align: left;
        font-size: 18px;
        line-height: 28px;
        cursor: pointer;
        & > span{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .plus{
                display: inline-grid;
                place-items: center;
                width: 20px;
                height: 20px;
                position: relative;
                
                span{
                    position: absolute;
                    width: 100%;
                    height: 3px;
                    background-color: white;
                    display: block;
                    &:last-child{
                        rotate: 90deg;
                    }
                }
            }
        }
    }
    &__content{
        padding: 0 24px;
        display: none;
        color: g.$text-secondary;
        font-size: 20px;
        line-height: 30px;
        overflow: hidden;
        max-height: 0px;
    }
    &.shown &__content{
        display: block;
        max-height: 2000px;
    }
    &.shown .plus span:last-child{
        display: none;
    }
    &:has(.animate-reverse) .plus span:last-child{
        display: block !important;
    }

    &__content.animate{
        animation: expand .25s forwards;
    }
    &__content.animate-reverse{
        animation: collapse .25s forwards;
    }

    @keyframes expand {
        0%{
            max-height: 0px;
        }
        100%{
            max-height: 1200px;
        }
    }

    @keyframes collapse {
        0%{
            max-height: 1200px;
        }
        100%{
            max-height: 0px;
        }
    }
}
</style>