# Iroco Benchmark

The goal is to determine which technologies are best suited for the Iroco project.
In this repo you can find front and back end technologies with the same set of features relevant to a mail application. 
In each case we provide a full set of tests and comparative results.

## Features

To compare technologies we developed the same set of features:

1. A network fetch of a list of mails.
2. The display of those mails in scrollable view.
3. An html viewer to display mails.
4. A text input to search for mails.

You can find the mobile mockup [here](https://framer.com/share/Benchmark--7MGmW80Lo1Lu1AMoMN2Y/jZNcXWNxR).

## Use case senario

Here is the scenario we use for UI testing:

1. Type "Hello World!" inside the search bar
2. Scroll down the list of mails
3. Click on one
4. Scroll down the mail
5. Return to the list of mails
6. Erase the content in search bar

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

### Hardware usage

We are deeply concerned about the energy consumption of our service.
In an ecological approach we tend to reduce as much as possible the footprint of our code on the user device.
We compare these metrics for the same UI tests:

1. High watermark for heap allocations
2. High watermark for VM allocations
3. Persistent heap allocations
4. Persistent VM allocations
5. Temporary heap allocations
6. Total heap allocations
7. Transient heap allocations
8. Transient VM allocations

*Average based on 10 measurements for the same test on the same environment.

### Performances

The performance is determined by the speed of execution based on these metrics:

1. Launch time
2. Duration
3. Runtime
4. System time
5. Time
6. User time

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


## API

To test the fronts, you can find an API in the ```api``` folder that mimics a JMAP server.
The API returns random fake emails as follows :

```json
{
  "id": "ma_Ait47m3oFHPS6jds6H0u",
  "from": { "name": "John Doe", "email": "john.doe@example.com" },
  "subject": "RE: Secret mission",
  "receivedAt": "2013-10-13T14:12:00Z",
  "htmlBody": [
    {
      "partId": "1",
      "type": "text/html"
    }, {
      "partId": "2",
      "type": "text/plain"
    }
  ],
  "bodyValues": {
    "1": {
      "value": "<h1>Hello World!</h1>"
    },
    "2": {
      "value": "This is your secret mission"
    }
  }
}
```

There are two endpoints :

``GET /mails?limit=200``

- Returns a list of 200 mails without ***htmlBody*** and ***bodyValues***.

``GET /mails/random_id``

- Returns an email with ***htmlBody*** and ***bodyValues*** so you can display it.

An online server is available for tests : [https://iroco.herokuapp.com/](https://iroco.herokuapp.com/mails)
