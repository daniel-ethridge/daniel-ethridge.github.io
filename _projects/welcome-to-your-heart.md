---
layout: post
title: Welcome to your Heart
description: How Does Music Affect your Heart?
---

# *Welcome to Your Heart!*
In the fisrt 8 weeks of my PhD, I created an application called *Welcome to your Heart!* which explored
the ways in different environments affect someone's nervous system and stress response. The application
was created using Max / MSP and an arduino. The arduino's sole job was to act as a mediary between Max
and an opensource photoplythesmogram (PPG) sensor. PPG is the technology that smart watches use to detect
your heart rate.

## "How can PPG data tell us anything about our nervous system and stress response?"
Heart rate variability (HRV) refers to the variation in our heart rate over time which actually is not constant at all.
Feel for your heart rate on your wrist or neck, then slowly breathe in and out. You should notice that your heart
rate increases as you inhale and that it decrease as you exhale. Try it! Through a real-time analysis of the PPG data, 
I was able to calculate HRV metrics as participants were listening to the soundscapes. Current literature generally agrees 
that higher HRV is indicative of more parasympathetic nervous system activity (that's the rest and digest side of the nervous
system), and that's typically associated with lower stress levels.

## The Soundscapes
I developed two soundscapes: one resembling a relaxing forest and one resembling a bustling city. I created both of these by
placing individual tracks inside of Max and having those sounds triggered in a random order at random times. I did this
so that the soundscapes would not seem like they were just on a loop. 

I used a quadrifonic sound setup for this with the participant sitting in the middle of four speakers all facing inwards.
In addition to the sounds being played randomly, they were also panned to any given location randomly. This further helped 
increase the authenticity and believability of the soundscapes. 

Lastly, the participants heartbeat was sonified. A heartbeat sound was played whenever the application detected a heartbeat.
This heartbeat was slowly moving in a circle around the participant as a way to surround them with their heartbeat.

## HRV
In the image above, you see "RMSSD" and "SDNN". These are two different metrics for measuring HRV. RMSSD measures the 
root-mean-square power of the time between heartbeats, while SDNN calculates the standard deviation of the time between heartbeats.
