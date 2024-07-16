<script>
    import { colourPalettes } from "./store";

    $: palettes = $colourPalettes;

    // Add a new PAlette
    function addPalette() {
        colourPalettes.update(palettes => [
            ...palettes,
            {
            name: "New Palette",
            date: new Date().toISOString().slice(0, 10), // How to add today's date
            colours: ["#FFFFFF", "#000000", "#FF0000", "#00FF00", "#0000FF"]
            }
        ]);
    }

    // Copy the Colour's hexcode
    function CopyPalette(CopyColour) {
		navigator.clipboard.writeText(CopyColour);
	}
</script>

<h1 class="text-4xl font-bold font-Space text-center pb-4">Previous Palettes</h1>

<div class="PaletteContainer grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 font-Space place-items-center mx-4">
    {#each palettes as palette}
        <div class="ContainerColor rounded-lg p-2 md:p-4 w-[100%]">
            <div class="Header flex items-end pb-2 justify-between">
                <div class="Name text-2xl font-bold">{palette.name}</div>
                <div class="Date">{palette.date}</div>
            </div>
    
            <div class="Colours flex flex-wrap gap-2 border-2 border-gray-200 p-2 md:p-4 rounded-lg">
                {#each palette.colours as colour}
                    <button class="colour h-24 grow group relative rounded-lg border-2 border-gray-200 active:opacity-50 active:border-green-500 duration-200" style="background-color: {colour};" on:click={() => CopyPalette(colour)}>
                        <div class="flex justify-center opacity-0 group-hover:opacity-100 duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-clipboard" viewBox="0 0 16 16">
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
                            </svg>
                        </div>
    
                        <div class="bg-black bg-opacity-25 absolute bottom-0 opacity-0 p-1 group-hover:opacity-100 duration-200 rounded-tr-lg pr-2 rounded-bl-md">
                            <div class="text-sm lg:text-base text-white md:font-bold uppercase">{colour}</div>
                        </div>
                    </button>
                {/each}
            </div>
        </div>
    {/each}
</div>

<!--<button on:click={addPalette}>Add Palette</button>-->