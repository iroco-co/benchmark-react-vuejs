# injector for web testing

The goal of this sub module is to provide infrastructure to test from a browser and provide feedback about the resource consumption by the browser.

## Drivers

Selenium needs drivers for [each plateform](https://selenium-python.readthedocs.io/installation.html#drivers) 

See here https://github.com/mozilla/geckodriver/releases

## How to use it

You must install pipenv with python3.

Then run 

```
pipenv install
```

Then you can either enter into the virtualenv with 

```
pipenv shell
python -m iroco
```

or make it run with pipenv : 

```
pipenv run selenium
```
