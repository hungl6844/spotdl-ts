# DISCLAIMER

So, this technically works, but it probably runs into ratelimits quite often and I can't guarantee accuracy. I also cannot recommend you use this for legal reasons, as well as because I'm abandoning this project. There are better alternatives, but writing this was a pleasure.

# spotdl-ts

This is a project to download spotify playlists given a spotify playlist id, a spotify api client key, and client secret.

This project downloads from youtube, and uses two different APIs; [cobalt](https://cobalt.tools) and [Invidious](https://iv.ggtyler.dev); to do so. 
- [Invidious](https://github.com/iv-org/documentation)
- [cobalt](https://github.com/wukko/cobalt/)

## Building with Bun
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
