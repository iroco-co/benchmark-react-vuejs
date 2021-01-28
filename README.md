# Iroco Benchmark

The goal is to determine which technologies are best suited for the Iroco project.
In this repo you can find front and back end technologies with the same set of features relevant to a mail application. 
In each case we provide a full set of tests and comparative results.

## Technologies

### Mobile

#### [React Native](https://reactnative.dev/)

#### [Vue native](https://vue-native.io/)

### Web

#### [React](https://reactjs.org/)

#### [Vue](https://vuejs.org/)

## Criteria

### Application size

We are looking at the overall size of the bundled application to reduce the disk and / or network usage.

### Hardware usage on runtime

We are deeply concerned about the energy consumption of our service.
In an ecological approach we tend to reduce as much as possible the footprint of our code on the user device.
We compare technologies and frameworks based 5 metrics :

1. GPU usage (in percentage)
2. CPU usage (in percentage)
3. Memory usage (in bytes)
4. Disk usage (in bytes)
5. Network usage (in bytes)

We take the average usage based on multiple measurements for the same interaction on the same environment.
The aim is to compare technologies not to give an indication of performance.

### Performances

We are here testing the efficiency of the framework based on 6 metrics :

1. First contentful paint (FCP)
2. Speed index (SI)
3. Largest contentful paint (LCP)
4. Time to interactive (TTI)
5. Total blocking time (TBT)
6. Cumulative layout shift (CLS)

With all those indicators we obtain a score.
The method of calculation is described [here](https://googlechrome.github.io/lighthouse/scorecalc/).

### Backward compatibility

To avoid planned obsolescence and digital waste we are concerned about backward compatibility.
We look at the versions of IOS, Android and web browser that can run the framework.

### Maturity / Popularity

A mature framework tends to be more reliant and efficient.
We are looking 3 metrics to compare the maturity :

1. Number of releases
2. Frequency of releases
3. Number of contributors

A popular framework is convenient when it comes to find packages or developers.
It also improves the overall code quality since the community is more active on finding issues or helping each other.
We are looking here at metrics that can indicates popularity :

1. Stars on Github
2. Questions on Stack Overflow
3. Downloads of packages

## Tools

Here are the tools used to obtain these metrics :

### Mobile

#### [Firebase Performance Monitoring](https://firebase.google.com/products/performance)

#### [XCode](https://help.apple.com/instruments/mac/current/#/dev7b09c84f5)

XCode has a suite of tools to monitor running IOS apps. A good way to get hardware usages. 
