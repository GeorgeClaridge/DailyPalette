<script>
    import { colourPalettes } from "./store";
    $: palettes = $colourPalettes;

    // Copy the Colour's hexcode
    function CopyPalette(CopyColour) {
		navigator.clipboard.writeText(CopyColour);
	}
</script>

<div class="lg:flex justify-between mx-4 md:mx-24 py-24 items-center">
    <div class="Info lg:w-[30%]">
        <div class="Heading text-4xl font-bold font-Space">HOW IT WORKS</div>
        <div class="para font-Space text-lg leading-8 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <button class="py-2 px-4 border-2 border-black mt-2 rounded-md font-bold text-lg font-Space">Learn More</button>
    </div>
    <div class="Today lg:w-[60%] pt-12 lg:pt-0">
        <div class="Header flex items-start pb-4 justify-between">
            <div class="Info">
                <div class="Name text-3xl font-bold">{palettes[0].name}</div>
                <div class="Date text-lg">{palettes[0].date}</div>
            </div>
        </div>
        <div class="Colours flex flex-wrap gap-2 border-2 border-gray-200 p-2 md:p-4 rounded-lg">
            {#each palettes[0].colours as colour}
                <button class="colour h-32 grow group relative rounded-lg border-2 border-gray-200 active:opacity-50 active:border-green-500 duration-200" style="background-color: {colour};" on:click={() => CopyPalette(colour)}>
                    <div class="flex justify-center opacity-0 group-hover:opacity-100 duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-clipboard" viewBox="0 0 16 16">
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                        </svg>
                    </div>

                    <div class="bg-black bg-opacity-15 absolute bottom-0 opacity-0 p-1 group-hover:opacity-100 duration-200 rounded-tr-lg pr-2">
                        <div class="text-sm lg:text-base text-white md:font-bold uppercase">{colour}</div>
                    </div>
                </button>
            {/each}
        </div>
    </div>
    
</div>