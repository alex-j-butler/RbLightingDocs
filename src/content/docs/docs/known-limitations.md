---
title: Known Limitations
description: Outlines the known limitations of the RbLighting software.
---

This page outlines the known limitations of RbLighting.

Please keep in mind the software is in beta release, so bugs and missing features are to be expected!

## SoundSwitch
* SoundSwitch connections are currently only supported on the local PC.
    * On the roadmap to support sending to remote SoundSwitch instances.
* Support for pre-programmed songs is currently not supported but is a critical feature for a non-beta release.


## Rekordbox

* Only 2 deck mode in Rekordbox is currently supported.
    * 3+ decks modes will work, however they will not publish deck 3 & 4 to SoundSwitch.
* Songs must be analysed and beat-gridded correctly.
    * RbLighting simply exposes the current beat position to SoundSwitch, so if your songs are not on-beat, your lighting won't be either.
* Songs from external media (ie. a Rekordbox-formatted USB, streaming services) will not be read correctly.
    * On the roadmap to support external USB media (with the same caveat as above, that they must be analysed).
    * Support for streaming services is a planned feature, but no effort has been made to confirm this is possible.