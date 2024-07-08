<script>
    import { colourPalettes } from "./store";
    let palettes = $colourPalettes;

    const background = palettes[0].colours[0]
    const text = palettes[0].colours[1]
    const primary = palettes[0].colours[2]
    const secondary = palettes[0].colours[3]
    const accent = palettes[0].colours[4]
</script>

<h1 class="text-4xl font-bold font-Space text-center pb-4">Example Colours</h1>

<div class="ExampleContainer mx-2 md:mx-24 border-2 border-black font-Space p-4" style="background-color: {background}; color: {text};">
    <div class="Navbar mx-12 flex justify-between items-center">
        <div class="Brand text-3xl font-bold">Brand</div>
        <button class="py-2 px-4 font-bold border-2 rounded-sm" style="background-color: {accent}; border-color: {text};">Header</button>
    </div>
    <div class="Landing text-center mx-24 py-24">
        <div class="Header text-4xl font-bold text" style="color: {primary};">Header</div>
        <div class="para text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
        <button class="py-2 px-4 font-bold border-2 rounded-sm mt-4" style="background-color: {accent}; border-color: {text};">Header</button>
    </div>
    <div class="Bento?"></div>
</div>

