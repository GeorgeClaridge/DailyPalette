<script>
    import { colourPalettes } from "./store";
    $: palettes = $colourPalettes;

    let count = 0

    function countIncrease() {
        if (count == 4) {
            console.log("Stops")
            return
        } else {
            count += 1;
            console.log(count)
        }
        
    }

    function countDecrease() {
        if (count == 0) {
            console.log("Stops")
            return
        } else {
            count -= 1;
            console.log(count)
        }
    }

    // Copy the Colour's hexcode
    function CopyColour(ColourClicked) {
		navigator.clipboard.writeText(ColourClicked);
	}

    function CopyPalette(PaletteClicked) {
		navigator.clipboard.writeText(PaletteClicked);
	}
</script>

<div class="lg:flex justify-center mx-4 md:mx-24 py-24 items-center">
    <div class="Today lg:w-[80%] pt-12 lg:pt-0">
        <div class="Header flex items-start pb-4 justify-between">
            <div class="Info font-Space">
                <div class="Name text-xl md:text-3xl font-bold" style="color: {palettes[count].colours[2]};">{palettes[count].name}</div>
                <div class="Date text-base md:text-lg font-medium">{palettes[count].date}</div>
            </div>

            <div class="flex items-start">
                <button class="py-2 px-4 border-2 border-black mt-2 rounded-md font-bold text-lg font-Space active:border-green-500 active:opacity-50 duration-200" on:click={() => CopyColour(palettes[0].colours)}>Copy All</button>
                <button class="py-2 px-4 mx-4 border-2 border-black mt-2 rounded-md font-bold text-lg font-Space active:border-green-500 active:opacity-50 duration-200" on:click={() => countDecrease()}></button>
                <button class="py-2 px-4 border-2 border-black mt-2 rounded-md font-bold text-lg font-Space active:border-green-500 active:opacity-50 duration-200" on:click={() => countIncrease()}></button>
                
            </div>
        </div>
        <div class="Colours grid grid-cols-3 gap-2 border-2 border-gray-200 p-2 md:p-4 rounded-lg font-Space">
            {#each palettes[count].colours as colour}
                <button class="colour h-32 lg:h-48 grow group relative rounded-lg border-2 border-gray-200 active:opacity-50 active:border-green-500 duration-200" style="background-color: {colour};" on:click={() => CopyColour(colour)}>
                    <div class="flex justify-center opacity-0 group-hover:opacity-100 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-clipboard" viewBox="0 0 16 16">
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                        </svg>
                    </div>

                    <div class="bg-black bg-opacity-30 absolute bottom-0 opacity-0 p-1 group-hover:opacity-100 duration-200 rounded-tr-lg rounded-bl-md pr-2">
                        <div class="text-base xl:text-lg text-white tracking-widest font-bold  uppercase">{colour}</div>
                    </div>
                </button>
            {/each}
        </div>
    </div>
    
</div>

<div class="Info text-center pb-24">
    <div class="Heading text-4xl font-bold font-Space">HOW IT WORKS</div>
    <div class="para font-Space text-lg leading-8 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
    <button class="py-2 px-4 border-2 border-black mt-2 rounded-md font-bold text-lg font-Space active:border-green-500 active:opacity-50 duration-200">Learn More</button>
</div>