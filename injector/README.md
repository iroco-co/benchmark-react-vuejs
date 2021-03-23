# injector for web testing

The goal of this sub module is to provide infrastructure to test from a browser and provide feedback about the resource consumption by the browser.

We are using [jmeter](https://jmeter.apache.org/) as traffic generator with selenium [WebDriver plugin](https://jmeter-plugins.org/wiki/WebDriverSampler/).

## Drivers

Selenium needs drivers for each plateform.

### Firefox

The drivers are [here](https://github.com/mozilla/geckodriver/releases). 
Once downloaded for your OS it has to be in the PATH to work properly.

### Chromium/Chrome

The drivers can be downloaded [here](https://chromedriver.chromium.org/downloads).

You will have to point on it with jmeter in the `path to chrome driver` field (in the Chrome tab of the jmeter Chrome Driver Config Element). 

## How to use it

You must install jmeter and launch it.

You can then open one of the jmx files in this folder. For chrome, you'll have to adapt the parameter to fit your environment.

Then you have to run one of the Web Applications (Vuejs or React), check that the url configured in the JMX file is correct, then launch the benchmark.
