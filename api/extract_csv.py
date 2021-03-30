import csv
import sys
from io import StringIO

from json import loads

if __name__ == '__main__':
    indicators = list()
    with open(sys.argv[1]) as f:
        lines = f.readlines()

    for line in lines:
        indicators.append(loads(line))

    data = dict()
    for indicator in indicators:
        indicator_name = list(indicator.keys())[0]
        if indicator_name in data:
            data[indicator_name].append(indicator.get(indicator_name))
        else:
            data[indicator_name] = [indicator.get(indicator_name)]

    f = StringIO()
    writer = csv.writer(f)
    writer.writerow(data.keys())
    writer.writerows(zip(*data.values()))

    print(f.getvalue())