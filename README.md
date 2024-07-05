# tailwindcss-underline-strikethrough

## What?
This plugin adds a new `underline-strikethrough` class that applies the 
`text-decoration: underline line-through` styles directly to any component! Not currently
supported by tailwindcss out of the box

## Installation

`npm install tailwindcss-underline-strikethrough`

`pnpm add tailwindcss-underline-strikethrough`

`yarn add tailwindcss-underline-strikethrough`

## Usage

Add the plugin to your plugin array

```ts
// tailwind.config.ts/.js

module.exports = {
  theme: {
    // --snip--
  },
  variants: {
    // --snip--
  },
  plugins: [
    // Include plugin in build process
    require("tailwindcss-underline-strikethrough")(),
  ],
};
```

In react components

```tsx
// Component.tsx

function StrikedUnderline() {
    return (
        <p>
            Creates this <span classname="underline-strikethrough">output</span>
        </p>
    );
}

```

Creates this <ins>~~output~~</ins>

## Why?

While I worked @ [KSU KDD Research Lab](https://github.com/kddresearch) I got fed up with how tailwind used the [text decoration](https://tailwindcss.com/docs/text-decoration).
Straight up did not allow for 2 decorators at once, even though it is directly supported
by css. So I made this quick plugin, added to my react project and now its open for
anyone and everyone to use!

Have fun, and don't expect any updates as when tailwind actually supports this out of the
box, I will just deprecate it

## Updates?

I may add more classes in the future if I need them, otherwise please branch and pull
request for any updates! I will not be taking suggestions, sorry! (lil too busy...)