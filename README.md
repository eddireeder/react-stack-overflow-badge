# react-stack-overflow-badge

> A React component for displaying your Stack Overflow profile in a badge.

[![NPM](https://img.shields.io/npm/v/react-stack-overflow-badge.svg)](https://www.npmjs.com/package/react-stack-overflow-badge) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---

## 🛠 Install

Using npm:
```bash
npm install --save react-stack-overflow-badge
```

Or with yarn:
```bash
yarn add react-stack-overflow-badge
```

## 🚀 Usage

```tsx
import StackOverflowBadge from 'react-stack-overflow-badge'
import 'react-stack-overflow-badge/dist/index.css'
```

### Default:

<img src="https://github.com/eddireeder/react-stack-overflow-badge/blob/main/example/demo/so.png?raw=true" height="90">

```tsx
<StackOverflowBadge id={2937831} />
```

### Remove card:

<img src="https://github.com/eddireeder/react-stack-overflow-badge/blob/main/example/demo/so-no-card.png?raw=true" height="90">

```tsx
<StackOverflowBadge id={2937831} card={false} />
```

### Remove logo:

<img src="https://github.com/eddireeder/react-stack-overflow-badge/blob/main/example/demo/so-no-card-no-logo.png?raw=true" height="90">

```tsx
<StackOverflowBadge id={2937831} card={false} logo={false} />
```

## ⚙️ Props:

| Property               | Type   | Default | Description                       |
| :--------------------- | :----- | :------ | :---------------------------------|
| id                     | number | -       | Stack Overflow user ID.           |
| card                   | bool   | `true`  | Display the profile in a card.    |
| logo                   | bool   | `true`  | Display the Stack Overflow logo.  |

## 📜 License

MIT © [eddireeder](https://github.com/eddireeder)
