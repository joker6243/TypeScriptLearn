# TypeScript学習リポジトリ

## はじめに
このリポジトリは、TypeScriptの基礎をハンズオンで学習した時のリポジトリで、以下の内容がハンズオンで学んだ内容です。

---

## TypeScriptの概要
### TypeScriptとは
- JavaScriptに型付けを加えたプログラミング言語
- Microsoftによって開発されたオープンソースプロジェクト
- 主な特徴:
  - 静的型付け
  - 型安全性の向上
  - 大規模開発への適応性

### メリット
1. 型エラーを事前に検出
2. コードの保守性向上
3. モダンなJavaScript機能が使用可能

---

## TypeScriptのセットアップ

### 必要な環境
- Node.jsとnpm（Node Package Manager）

### インストール手順
```bash
npm install -g typescript

## TypeScriptの基本

### 基本的な型
TypeScriptでは、以下のような基本的な型を使用します。

| 型        | 説明                               |
|-----------|------------------------------------|
| `number`  | 数値型（整数、小数、浮動小数点数） |
| `string`  | 文字列型                           |
| `boolean` | 真偽値型                           |
| `array`   | 配列型                             |
| `tuple`   | タプル型（固定長の配列）           |
| `enum`    | 列挙型                             |
| `any`     | 任意の型（型チェックを無効化）     |
| `void`    | 戻り値のない型（関数で使用）       |
| `null`    | null 値を持つ型                    |
| `undefined` | 未定義の値を持つ型               |

---

### 型注釈を使用した変数宣言
TypeScriptでは、変数に型注釈をつけることで、型を指定できます。

```typescript
let age: number = 25;          // 数値型
const name: string = "Alice";  // 文字列型
let isActive: boolean = true;  // 真偽値型
```

型注釈をつけることで、以下のような誤った代入が防止されます。

```typescript
let age: number = 25;
age = "twenty-five"; // エラー: 'string'型を'number'型に割り当てることはできません
```

## 配列

配列の型注釈には、以下の2つの記法があります。

1. `型[]`
2. `Array<型>`

```typescript
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
```

## 関数
関数の引数や戻り値にも型を指定できます。

### 引数と戻り値の型

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

引数に型を指定することで、不正な呼び出しを防ぎます。

```typescript
add(1, 2);    // OK
add("1", "2"); // エラー: 'string'型を'number'型に割り当てることはできません
```

### 戻り値が無い関数(`void`型)
```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

## オブジェクト
オブジェクトの型を定義することで、プロパティの型と構造を明確にできます。

```typescript
let person: { name: string; age: number } = {
    name: "Bob",
    age: 30
};
```

## ユニオン型
ユニオン型を使用すると、複数の型を持つ変数を定義できます。
```typescript
let value: string | number;
value = "Hello";  // OK
value = 42;       // OK
value = true;     // エラー: 'boolean'型は許可されていません
```

## 型エイリアス
型エイリアスを使用すると、複雑な型に名前を付けることができます。
```typescript
type StringOrNumber = string | number;

let id: StringOrNumber;
id = 101;    // OK
id = "ABC";  // OK
id = true;   // エラー: 'boolean'型は許可されていません
```

## 型推論
TypeScriptは初期値から型を推論します。明示的に型を指定しなくても、多くの場合適切に推論されます。
```typescript
let count = 10; // TypeScriptは'number'型と推論
count = 20;     // OK
count = "twenty"; // エラー: 'string'型を'number'型に割り当てることはできません
```

