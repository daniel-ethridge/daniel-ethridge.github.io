---
layout: post
title: "Master's Project: Shape Song"
description: "Research Question: How Does Cross-Instrumental Control Affect Engagement in a Network Music Environment"
---

Master's Project: Shape Song
============

Shape song is a custom app that I developed from scratch to help research cross-instrumental control in a network music environment. I defined cross instrumental control as the ability for one participant to control timbral, temporal, melodic, etc. properties of another participant’s instrument or device. Imagine playing music with a group of people, and you and your friend are playing synthesizers. Of course you can both turn the knobs on your own synthesizer, but what if you could also turn the knobs on each other's synthesizer? Check out the demo video below!

https://www.youtube.com/watch?v=AnS1vEmkQ9I

Shape song was developed using Unity's video game engine, Audiokinetic's interactive audio engine WWise, and the Photon Engine API for networking. Three participants could participate at once, and each was represented by an avatar in the application. Pressing the "J" key on the keyboard would play a note with pitch determined by the respective avatar's vertical position on the screen and volume determined by horizontal location. A higher position meant a higher pitch, while being further right on the screen meant a louder note. 

The avatar's all had four body parts: a head, a torso, arms, and legs. Changing the color of those would in effect "turn the knobs" of that participant's synthesizer and change their sound. 

All participants could create and delete squares and circles anywhere on the screen. Squares were percussion instruments, while circles were melodic lines. Depending on the amount of each shape present, the colors, and the brightnesses, participants could create different backing tracks to accompany them while they played their own synth with the "J" key. A the frequency cutoff of a global low-pass filter was controlled by an intensity slider which also controlled the brightness of the background. All the background music was synced together for each participant using a master clock inside of WWise.

Importantly, each participant was able to create and delete all shapes, modify colors and brightness values for all shapes, and change colors of all avatars. The study was divided into three parts: no cross-instrumental control (only modify your own avatar and one shape or the intensity slider), some cross-instrumental control (modify your avatar and someone elses and control either two shapes or one shape and the intensity slider), or total cross instrumental control (everyone controls everything).

Through a focus group at the end, I saw that the second condition (some cross-instrumental control) seemed to foster the most engagement. No cross-instrumental control was too limiting, while total cross-instrumental control was overwhelming. This result could be further tested and used in creating new unique and meaningful interactive performances and installations, both in person and remotely.
