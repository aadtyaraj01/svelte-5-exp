<script lang="ts">
    import type { Snippet } from 'svelte';
    import type {Action} from 'svelte/action';
    import { page } from '$app/stores';
    let {children}: { children: Snippet} = $props();

    let isOpenMenu = $state(false); // menu state
    let isOpenTopics = $state(false);// topics state
    let isOpenToc = $state(false); // toc state
    let isOpenOne = $derived(isOpenTopics || isOpenToc);
    
    // works if inspecting 
    // $inspect(isOpenOne); 

    const createToc: Action = (el: HTMLElement) => {

        const headings = document.querySelectorAll<HTMLHeadingElement>('h2');
        
        const tocArr = Array.from(headings).map((heading) => {
            return `<li>
                        <a href="#${heading.id}">${heading.innerText}</a>
                    </li>`
        });

        el.innerHTML = tocArr.join('');
        return {
            destroy () {
                console.log('destroyed');
                el.innerHTML = '';
            }
        }
    }

    const toggleMenu = () => {
        if (isOpenMenu) {
            isOpenToc = false;
            isOpenTopics = false;
        }

        isOpenMenu = !isOpenMenu
    }

    const toggleTopics = () => {
        isOpenTopics = !isOpenTopics
    }

    const toggleToc = () => {
        isOpenToc = !isOpenToc
    }
</script>
<h1 class="text-7xl">🤯</h1>
<div class="grid grid-cols-1 overflow-hidden h-screen w-full">
    <div class="col-span-1 bg-blue-600 fixed inset-0 -translate-x-full w-full h-screen z-10 transition-transform duration-200 ease-in-out" class:topics={isOpenTopics}>
        <ul>
            {#each new Array(4) as _, i}
            <li>
                <a href={"/posts#wtf-" + (i +1)}>
                    Wtf {i +1}
                </a>
            </li>
            {/each}
        </ul>
    </div>
    <div class="col-span-1 overflow-y-scroll">
        {@render children()}
    </div>
    <div class="col-span-1 fixed bg-green-600 inset-0 w-full transition-transform duration-200 ease-in-out h-screen translate-x-full z-10"
        class:topics={isOpenToc}
    >
        <p class="font-mono font-semibold">Topics</p>
        {#key $page.url.href}
            <ul use:createToc>
            </ul>
        {/key}
    </div>
</div>

<div class="fixed bottom-10 flex flex-row flex-nowrap gap-8 left-10 z-50">
    <!-- menu button -->
    <button type="button" class:menuBtn={isOpenMenu} onclick={toggleMenu}>👉</button>

    <!-- toggle topics & toc buttons -->
    {#if isOpenMenu && !(isOpenTopics || isOpenToc)}
        <!-- topics button -->
        <button type="button" onclick={toggleTopics}>📃</button>
        <!-- toc button -->
        <button type="button" onclick={toggleToc}>🏓</button>
    {/if}
</div>

<style>
    .menuBtn {
        transform: rotate(180deg);
    }

    .topics {
        transform: translateX(0);
    }

</style>