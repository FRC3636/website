---
title: 2022 Kickoff and Days 1-3
author: Cpt. Charlie Becker
date: 08.01.2022
---

We had a lot of fun at Kickoff, and did a lot of brainstorming and strategic analysis. Overall, this game seems pretty balanced, with the high and low goals both offering benefits and drawbacks, and the high difficulty of the High and Traversal Rungs having a high payoff. Between chasing down bouncing Cargo and lining up for the climb, it’s clear that driver skill and coordination will be very important.

This is our overall priority list as of today. Our goal is to complete everything in the Needs category by the end of week 4 so we can focus on driver practice.

## Needs

1. Drive. We’ll be happily using the KOP drivetrain this year given the flat and open field.
2. Climb on the Mid Rung. Doing so every match will give us 6 guaranteed points, as well as a decent shot at the Ranking Point if other teams have climb capabilities.
3. Score Cargo in the Lower Hub. This will get us towards the Cargo RP in qualifying matches, and score a good amount of points if we have fast cycle times.
4. Intake Cargo from the ground. With the Human Player station only starting with one game piece (which will most likely be thrown in auto), ground intakes are a must-have in our opinion.
5. Hold 2 Cargo at once. We don’t see much reason not to.
6. Build the robot using a 24x24” chassis. This will give us much more flexibility for climbing with other robots, which will increase our chances of getting the Hangar RP, and make us more valuable in alliance selection.
7. Climb on the Low Rung. We also would like to climb on the Low Rung to enable 2 other robots to climb on the Mid Rung, earning the Hangar RP.

## Wants

8.  Score Cargo in the Upper Hub. We’ll most likely only do this in playoff matches, when RP isn’t a concern and we need to maximize points.
9.  Score 2 balls in auto. This would most likely mean building the robot to have an intake and shooter on opposite sides, so we could drive off the Tarmac, intake a cargo, drive back to the Hub and score both cargo.

## Luxuries

10. Climb on the High Rung. This is very challenging, and we don’t want to even attempt it until we have a solid plan for everything else.

![Day 3 Brainstorming Whiteboard](https://www.chiefdelphi.com/uploads/default/49be64914a4253326e5eb096ea22378fdd7087bb)

## Design

In terms of actual robot design, we have ideas for most of our major mechanisms.

### Climb

We ordered 2 Thrifty Telescoping Tube Kits on Saturday, which we’ll be using with MAX Planetary gearboxes for our climber. Right now we plan to use Falcon 500s at 20:1, and rely on the Falcon’s torque in Brake Mode to keep us lifted rather than any sort of mechanical brake. We’ve found that a single stage telescope with approximately 30” of travel can fit under the Low Rung, while still being able to reach the Mid Rung. We also plan to use double-sided hooks to make climbing convenient in any situation.

### Shooter

Based on initial calculations in [Julia’s trajectory calculator](https://www.desmos.com/calculator/3re85nakjn), we want to use a fixed-angle hooded shooter to score both the low and high goals from against the Fender. We plan to prototype the shooter extensively to test angles and speeds, and iterate the design accordingly. If we find that shooting the high and low goals with the same angle is impossible or just too inaccurate, we might pursue an adjustable shooter hood like many teams used in 2020.

### Intake

Given our limited space, a full-width over-the-bumper intake with a V-hopper design seems a little excessive. However, given how ineffective our through-bumper intake was in 2020, we don’t want to try that again either. The solution we’ve tentatively settled on is something like this 13. We plan to use a 12” bumper gap (the maximum possible with a 24” wide frame) and intake the balls over the frame and into an indexer.

### Electronics

Because of the over-the-frame intake mechanism, and how much of our frame the overall cargo mechanism will take up, we plan to use an inverted bellypan. This will give us much more space to put electronics, and provide a surface for the Cargo above the frame. Since we’re using only Falcon 500s this year (with maybe 1 or 2 NEO 550s), we won’t need to allocate space for many motor controllers.

## Programming

Our programming lead [Silas Gagnon](/members/silas-gagnon) created [a trajectory calculator](https://www.desmos.com/calculator/ownfjjsbyf) you can use to estimate your shooter's trajectory (in a vacuum). It also calculates the optimal ball velocity for a given shooter angle, and shows the bounds of the ball's trajectory given angle and velocity error values.

## Looking Forward

Our plan is to have working prototypes of the intake and shooter by the end of the week, and get the climber assembled as soon as our MAX Planetaries and TTB Telescope kit arrive.

So far [our CAD](https://cad.onshape.com/documents/cd0b0e474e581bdfec4f150d/w/373f57dad67277118d0ce57f/e/c2171cda5e1e5e8ab11e90ac?renderMode=0&uiState=61dd02a120576d23bd096fc5) contains our climber, base drivetrain, and a prototype shooter design based on 4255’s prototype.
