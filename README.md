# Pacecal

A npm package to calculate pace using distance and time in various units.

![CI](https://github.com/pranavacharya/pacecal/workflows/CI/badge.svg)
![GitHub](https://img.shields.io/github/license/pranavacharya/pacecal)
![npm](https://img.shields.io/npm/v/pacecal)

## Installation

### npm

```sh
npm install pacecal
```

### Browser

#### CDN

```html
<script src="https://unpkg.com/pacecal@latest/dist/pacecal.umd.js"></script>
```

#### [download package](https://unpkg.com/pacecal@latest/dist/pacecal.umd.js)

## Usage

#### Import the package

```javascript
const { Pace } = require('pacecal');
```

#### Creating Pace object

##### Class parameters

1. distance - default unit: km
1. time - default unit: s
1. optional params
   - distanceUnit - unit of distance
   - timeUnit - unit of time

```javascript
// using default distance unit: km, default time unit: s
const pace = new Pace(10, 3600);
```

```javascript
// overriding default units
const pace = new Pace(6.2, 60, { distanceUnit: 'mi', timeUnit: 'min' }); //distance: 6.2 miles, time: 60 min
```

```javascript
// for browsers using CDN build use module name: pacecal
const pace = new pacecal.Pace(10, 60, { distanceUnit: 'km', timeUnit: 'min' });
```

##### Available methods

- `.getPace();`
  ```javascript
  // returns pace in s/km
  pace.getPace();
  ```
- `.getPaceTimeString();`
  ```javascript
  // returns time taken for 1 km in hh:mm:ss format
  pace.getPaceTimeString();
  ```
- `.format('mi', 'min')`

  ```javascript
  // returns pace in min/mi
  pace.format('mi', 'min').getPace();

  // returns time taken for 1 mile in hh:mm:ss format
  pace.format('mi', 'min').getPaceTimeString();
  ```

## Examples

```javascript
// get pace in different units from distance in km and time in mins
const pace = new Pace(10, 60, { distanceUnit: 'km', timeUnit: 'min' });

// get pace in s/km
pace.getPace(); // 360
// time taken for one km in hh:mm:ss format
pace.getPaceTimeString(); // 00:06:00

// get pace in min/mi
pace.format('mi', 'min').getPace(); // 9.656039999999999
// time taken for one mile in hh:mm:ss format
pace.format('mi', 'min').getPaceTimeString(); // 00:09:39

// get pace in min/km
pace.format('km', 'min').getPace(); // 6
// time taken for one km in hh:mm:ss format
pace.format('km', 'min').getPaceTimeString(); // 00:06:00
```

## Units supported

##### Distance

- m - metre
- km - kilometers
- mi - miles

##### Time

- ms - milliseconds
- s - seconds
- min - minutes
- h - hours

### **_Deprecated functions_**

```javascript
const pacecal = require('pacecal');

// accepts input in km and seconds only

// returns time taken in hh:mm:ss format to cover one km
pacecal.getPaceInTime(10, 3600); // 00:06:00

// returns pace in seconds/km
pacecal.getPace(10, 3600); // 360

// returns average of all the pace values
pacecal.getAreragePace([360, 366, 390]); // 372

// returns average time taken in hh:mm:ss format to cover one km
pacecal.getAreragePaceinTime([360, 366, 390]);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
