<script lang="ts">
    import { animate, stagger } from "motion";

    let ball: HTMLDivElement | null = null;
    let i = 0;
    function moveBall(e: Event) {
        const ball1 = document.querySelector('.ball');
      //  if (!ball1) return;
        animate('.ball', { backgroundColor: "blue" });
        let transValue = i % 2 === 0 ? '300px' : '0px';
        animate(
            "li",
            { transform: `translateX(${transValue})` },
            { delay: stagger(0.1)
        });
        i++;
    }
</script>

<div id="ball" class="ball size-20 rounded-full bg-red-400 mx-auto mt-44" >
</div>

<div class="flex w-full justify-center items-center">
    
    <button type="button" class="btn btn-primary mx-auto mt-20"
        onclick={moveBall}
         
    >
        move
    </button>
</div>

<ul>
    <li class="size-10 rounded-full bg-red-400 md-auto mt-5"></li>
    <li class="size-10 rounded-full bg-red-400 md-auto mt-5"></li>
    <li class="size-10 rounded-full bg-red-400 md-auto mt-5"></li>
    <li class="size-10 rounded-full bg-red-400 md-auto mt-5"></li>
    <li class="size-10 rounded-full bg-red-400 md-auto mt-5"></li>
    <li class="size-10 rounded-full bg-red-400 md-auto mt-5"></li>

</ul>