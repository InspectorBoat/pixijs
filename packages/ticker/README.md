# @pixi/ticker

## Installation

```bash
npm install @pixi/ticker
```

## Usage

Create a Ticker object directly:

```js
import { Ticker } from 'pixi/ticker.ts';

const ticker = new Ticker();
ticker.start();
```

Use as an Application plugin:

```js
import 'pixi/ticker.ts';
import { Application } from 'pixi/app.ts';

const app = new Application();
app.ticker.start();
```