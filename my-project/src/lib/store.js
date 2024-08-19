import { writable } from 'svelte/store';

const CurrentPalettes = [
  {
    name: "Cotton Candy",
    date: "2024-06-25",
    colours: ['#fbfcfd', '#0C0D16', '#6374ab', '#A5B3E0', '#ba9dca', '#bb89c0']
  },
  {
    name: "Summer Sun",
    date: "2024-06-24",
    colours: ['#fbf4f1', '#1c0f07', '#cb6b35', '#e0d386', '#d7da6c', '#000']
  },
  {
    name: "Purple",
    date: "2024-06-25",
    colours: ['#F5F1FA', '#050307', '#7F46CA', '#B48EE6', '#9A62E4', '#000']
  },
  {
    name: "Pottery Barn",
    date: "2024-06-25",
    colours: ['#f8f6f6', '#161110', '#97746f', '#b2c8bc', '#8da2ad', '#000']
  },
  {
    name: "Garden Gnome",
    date: "2024-06-25",
    colours: ['#fafdfb', '#08100a', '#66af74', '#bba9d2', '#ba7baa', '#000']
  },
];

export const colourPalettes = writable(CurrentPalettes);
